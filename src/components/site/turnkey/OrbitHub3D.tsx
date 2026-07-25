import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, RoundedBox, useTexture, Float } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";

import cathImg from "@/assets/sol-carm.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import orImg from "@/assets/sol-or.jpg";
import icuImg from "@/assets/why-cathlab.jpg";

const DEPTS = [
  { id: "cath", img: cathImg, label: "Cath Lab" },
  { id: "mri", img: mriImg, label: "MRI" },
  { id: "ct", img: ctImg, label: "CT" },
  { id: "or", img: orImg, label: "OR" },
  { id: "icu", img: icuImg, label: "ICU" },
  { id: "pet", img: ctImg, label: "PET/CT" },
];

function Platform() {
  return (
    <group position={[0, -0.9, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.55, 1.9, 96]} />
        <meshStandardMaterial
          color="#e11d2e"
          emissive="#e11d2e"
          emissiveIntensity={0.4}
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
        <circleGeometry args={[1.55, 96]} />
        <meshStandardMaterial color="#f4f5f7" roughness={0.9} metalness={0.05} />
      </mesh>
      {/* central hub disc */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.6, 0.14, 64]} />
        <meshStandardMaterial color="#0e0f13" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.52, 0.52, 0.01, 64]} />
        <meshStandardMaterial color="#e11d2e" emissive="#e11d2e" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function DeptCard({
  index,
  count,
  img,
  activeIndex,
  onClick,
}: {
  index: number;
  count: number;
  img: string;
  activeIndex: number;
  onClick: () => void;
}) {
  const angle = (index / count) * Math.PI * 2;
  const r = 2.6;
  const x = Math.sin(angle) * r;
  const z = Math.cos(angle) * r;
  const texture = useTexture(img);
  texture.anisotropy = 8;
  const active = index === activeIndex;

  const { scale, y } = useSpring({
    scale: active ? 1.14 : 1,
    y: active ? 0.55 : 0.25,
    config: { mass: 1, tension: 220, friction: 24 },
  });

  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    // face inward toward center + slight breathing tilt
    const lookAt = new THREE.Vector3(0, ref.current.position.y, 0);
    ref.current.lookAt(lookAt);
    ref.current.rotation.y += Math.PI; // face outward
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6 + index) * 0.04;
  });

  return (
    <animated.group ref={ref} position-x={x} position-z={z} position-y={y} scale={scale}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
        <group
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <RoundedBox args={[1.35, 0.9, 0.08]} radius={0.06} smoothness={6} castShadow>
            <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.1} />
          </RoundedBox>
          {/* image face */}
          <mesh position={[0, 0.02, 0.045]}>
            <planeGeometry args={[1.22, 0.7]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
          {/* active glow ring */}
          {active && (
            <mesh position={[0, 0, -0.05]}>
              <ringGeometry args={[0.82, 0.92, 64]} />
              <meshBasicMaterial
                color="#e11d2e"
                transparent
                opacity={0.55}
                side={THREE.DoubleSide}
              />
            </mesh>
          )}
        </group>
      </Float>
    </animated.group>
  );
}

function Connectors({ activeIndex, count }: { activeIndex: number; count: number }) {
  const lines = useMemo(() => {
    const arr: [THREE.Vector3, THREE.Vector3, boolean][] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const p = new THREE.Vector3(Math.sin(a) * 2.6, 0.25, Math.cos(a) * 2.6);
      arr.push([new THREE.Vector3(0, 0.28, 0), p, i === activeIndex]);
    }
    return arr;
  }, [activeIndex, count]);
  return (
    <group>
      {lines.map(([a, b, active], i) => {
        const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
        return (
          <primitive
            key={i}
            object={
              new THREE.Line(
                geo,
                new THREE.LineBasicMaterial({
                  color: active ? 0xe11d2e : 0x9aa1ab,
                  transparent: true,
                  opacity: active ? 0.9 : 0.35,
                }),
              )
            }
          />
        );
      })}
    </group>
  );
}

function Rig({ activeIndex, count }: { activeIndex: number; count: number }) {
  const { camera } = useThree();
  const group = useRef<THREE.Group>(null);
  const targetRot = useRef(0);

  useFrame((state) => {
    if (!group.current) return;
    // rotate hub so active card faces camera
    const desired = -(activeIndex / count) * Math.PI * 2;
    targetRot.current = desired;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRot.current,
      0.06,
    );
    // subtle mouse parallax
    const mx = state.pointer.x;
    const my = state.pointer.y;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 0.6, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.9 + my * 0.3, 0.05);
    camera.lookAt(0, 0.2, 0);
  });

  return (
    <group ref={group}>
      <Platform />
      <Connectors activeIndex={activeIndex} count={count} />
      {DEPTS.slice(0, count).map((d, i) => (
        <DeptCard
          key={d.id}
          index={i}
          count={count}
          img={d.img}
          activeIndex={activeIndex}
          onClick={() => {}}
        />
      ))}
    </group>
  );
}

export function OrbitHub3D({ activeId }: { activeId: string }) {
  const activeIndex = Math.max(
    0,
    DEPTS.findIndex((d) => d.id === activeId),
  );
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.9, 5.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#f6f7f9"]} />
      <fog attach="fog" args={["#f6f7f9", 8, 16]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.15}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 3, -2]} intensity={0.35} color="#dfe6ef" />
      <Suspense fallback={null}>
        <Rig activeIndex={activeIndex} count={DEPTS.length} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
