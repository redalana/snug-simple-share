import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, RoundedBox, useTexture, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

import solutionRoomImg from "@/assets/beyond-cathlab.jpg";
import orImg from "@/assets/sol-or.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import cathImg from "@/assets/sol-carm.jpg";

const STAGE_IMGS = [solutionRoomImg, orImg, project3, project2, icuImg, cathImg];

function Pedestal({
  x,
  z,
  img,
  index,
  active,
}: {
  x: number;
  z: number;
  img: string;
  index: number;
  active: boolean;
}) {
  const tex = useTexture(img);
  tex.anisotropy = 8;
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.position.y = 0.9 + Math.sin(s.clock.elapsedTime * 0.9 + index) * 0.05;
  });

  return (
    <group position={[x, 0, z]}>
      {/* base pedestal */}
      <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 1.0, 0.12, 48]} />
        <meshStandardMaterial color="#141518" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.86, 0.86, 0.01, 48]} />
        <meshStandardMaterial
          color={active ? "#e11d2e" : "#2b2f36"}
          emissive={active ? "#e11d2e" : "#000000"}
          emissiveIntensity={active ? 1.2 : 0}
        />
      </mesh>

      {/* floating card with image */}
      <group ref={g}>
        <RoundedBox args={[1.5, 1.0, 0.08]} radius={0.06} smoothness={5} castShadow>
          <meshStandardMaterial color="#ffffff" metalness={0.15} roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0.02, 0.045]}>
          <planeGeometry args={[1.36, 0.8]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
        {active && (
          <mesh position={[0, 0, -0.05]}>
            <ringGeometry args={[0.95, 1.05, 64]} />
            <meshBasicMaterial color="#e11d2e" transparent opacity={0.6} side={THREE.DoubleSide} />
          </mesh>
        )}
      </group>
    </group>
  );
}

function GlowPath({ points }: { points: THREE.Vector3[] }) {
  const geo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points);
    const pts = curve.getPoints(120);
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [points]);
  return (
    <primitive
      object={
        new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({ color: 0xe11d2e, transparent: true, opacity: 0.7 }),
        )
      }
    />
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[60, 60]} />
      <meshStandardMaterial color="#0e0f13" roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

function CameraRig({
  activeIndex,
  positions,
}: {
  activeIndex: number;
  positions: THREE.Vector3[];
}) {
  const { camera } = useThree();
  useFrame((state) => {
    const target = positions[activeIndex];
    const desired = new THREE.Vector3(target.x + 0.5, 2.4, target.z + 3.6);
    camera.position.lerp(desired, 0.045);
    const look = new THREE.Vector3(target.x, 1.1, target.z);
    // subtle mouse parallax
    look.x += state.pointer.x * 0.3;
    look.y += state.pointer.y * 0.15;
    camera.lookAt(look);
  });
  return null;
}

export function JourneyScene3D({ activeIndex }: { activeIndex: number }) {
  const count = STAGE_IMGS.length;
  const positions = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const t = i / (count - 1);
        const x = (t - 0.5) * 14;
        const z = Math.sin(t * Math.PI) * -1.4;
        return new THREE.Vector3(x, 0.9, z);
      }),
    [count],
  );

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 3, 7], fov: 40 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#0b0c0e"]} />
      <fog attach="fog" args={["#0b0c0e", 8, 22]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 4]} intensity={1.1} castShadow />
      <pointLight position={[0, 4, 2]} intensity={0.6} color="#ffd7d7" />
      <Suspense fallback={null}>
        <Ground />
        <GlowPath points={positions.map((p) => new THREE.Vector3(p.x, 0.15, p.z))} />
        {positions.map((p, i) => (
          <Pedestal
            key={i}
            x={p.x}
            z={p.z}
            img={STAGE_IMGS[i]}
            index={i}
            active={i === activeIndex}
          />
        ))}
        <Sparkles
          count={60}
          size={2}
          scale={[16, 4, 8]}
          position={[0, 2, 0]}
          speed={0.3}
          opacity={0.4}
          color="#ffffff"
        />
        <CameraRig activeIndex={activeIndex} positions={positions} />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}
