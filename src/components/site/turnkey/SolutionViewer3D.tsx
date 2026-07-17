import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * A stylised C-arm cath lab suite built from primitives. Six hotspots orbit
 * the equipment in 3D space; selecting one moves the camera to focus.
 */

export type Hotspot3D = {
  n: number;
  label: string;
  /** local position of the hotspot marker */
  pos: [number, number, number];
};

export const CATH_HOTSPOTS_3D: Hotspot3D[] = [
  { n: 1, label: "C-Arm Imaging", pos: [-1.4, 1.5, 0] },
  { n: 2, label: "Patient Table", pos: [0, 0.75, 0.3] },
  { n: 3, label: "Ceiling Monitors", pos: [0.6, 2.4, -0.6] },
  { n: 4, label: "Hemodynamic", pos: [1.9, 1.1, 0.4] },
  { n: 5, label: "Injector", pos: [1.4, 0.9, 0.9] },
  { n: 6, label: "Radiation Shield", pos: [-1.6, 1.6, 0.9] },
];

function CArm() {
  return (
    <group position={[-1.2, 0.4, 0]}>
      {/* base */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.4, 0.2, 32]} />
        <meshStandardMaterial color="#e8ebef" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* vertical column */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.25, 0.9, 0.25]} />
        <meshStandardMaterial color="#f3f4f6" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* C-arm arc */}
      <mesh position={[0.35, 1.4, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.9, 0.09, 16, 48, Math.PI * 1.15]} />
        <meshStandardMaterial color="#dfe3e8" metalness={0.75} roughness={0.25} />
      </mesh>
      {/* detector head */}
      <mesh position={[0.35, 2.2, 0]} castShadow>
        <boxGeometry args={[0.55, 0.25, 0.55]} />
        <meshStandardMaterial color="#1b1d21" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* x-ray source */}
      <mesh position={[0.35, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.28, 0.35, 24]} />
        <meshStandardMaterial color="#1b1d21" metalness={0.8} roughness={0.25} />
      </mesh>
    </group>
  );
}

function PatientTable() {
  return (
    <group position={[0.4, 0.55, 0.3]}>
      <mesh castShadow>
        <boxGeometry args={[2.4, 0.08, 0.55]} />
        <meshStandardMaterial color="#0f1114" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.6, -0.35, 0]} castShadow>
        <boxGeometry args={[0.35, 0.65, 0.35]} />
        <meshStandardMaterial color="#e8ebef" metalness={0.6} roughness={0.35} />
      </mesh>
    </group>
  );
}

function CeilingMonitors() {
  return (
    <group position={[0.6, 2.4, -0.6]}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7, 12]} />
        <meshStandardMaterial color="#c9ced4" metalness={0.7} roughness={0.3} />
      </mesh>
      {[-0.55, 0, 0.55].map((x) => (
        <mesh key={x} position={[x, 0, 0]} castShadow>
          <boxGeometry args={[0.5, 0.3, 0.05]} />
          <meshStandardMaterial color="#0a0b0d" emissive="#1a2a55" emissiveIntensity={0.55} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Injector() {
  return (
    <group position={[1.4, 0.6, 0.9]}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.6, 24]} />
        <meshStandardMaterial color="#e8ebef" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.35, 0.5]} />
        <meshStandardMaterial color="#1b1d21" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function HemoStation() {
  return (
    <group position={[1.9, 0.6, 0.4]}>
      <mesh castShadow>
        <boxGeometry args={[0.6, 1.1, 0.4]} />
        <meshStandardMaterial color="#f3f4f6" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.7, 0.21]}>
        <boxGeometry args={[0.5, 0.35, 0.02]} />
        <meshStandardMaterial color="#0a0b0d" emissive="#c7203a" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function RadiationShield() {
  return (
    <group position={[-1.6, 1.6, 0.9]}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1, 12]} />
        <meshStandardMaterial color="#c9ced4" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow>
        <boxGeometry args={[0.7, 0.5, 0.04]} />
        <meshStandardMaterial color="#eaf2ff" transparent opacity={0.45} metalness={0.2} roughness={0.05} />
      </mesh>
    </group>
  );
}

function Room() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#eef1f4" roughness={0.85} metalness={0.05} />
      </mesh>
      <mesh position={[0, 4, -4]} rotation={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#f7f8fa" roughness={0.95} />
      </mesh>
      {/* platform */}
      <mesh position={[0, 0.02, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.6, 2.9, 96]} />
        <meshStandardMaterial color="#e11d2e" emissive="#e11d2e" emissiveIntensity={0.5} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function HotspotMarker({
  h,
  active,
  onClick,
}: {
  h: Hotspot3D;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    const scale = 1 + Math.sin(t * 2 + h.n) * 0.08;
    ref.current.scale.setScalar(active ? scale * 1.4 : scale);
  });
  return (
    <group position={h.pos}>
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial
          color="#e11d2e"
          emissive="#e11d2e"
          emissiveIntensity={active ? 1.6 : 0.9}
        />
      </mesh>
      {/* pulse ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.14, 0.18, 32]} />
        <meshBasicMaterial color="#e11d2e" transparent opacity={active ? 0.9 : 0.4} side={THREE.DoubleSide} />
      </mesh>
      {active && (
        <Html distanceFactor={6} position={[0, 0.28, 0]} center>
          <div className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[calc(10.5 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <span className="mr-2 text-primary">0{h.n}</span>
            {h.label}
          </div>
        </Html>
      )}
    </group>
  );
}

function Rig({ activeN }: { activeN: number }) {
  const { camera } = useThree();
  const active = CATH_HOTSPOTS_3D.find((h) => h.n === activeN) ?? CATH_HOTSPOTS_3D[0];
  useFrame((state) => {
    const [x, y, z] = active.pos;
    const desired = new THREE.Vector3(x + 2.4, y + 0.9, z + 3.4);
    camera.position.lerp(desired, 0.045);
    const look = new THREE.Vector3(x, y, z);
    look.x += state.pointer.x * 0.25;
    look.y += state.pointer.y * 0.15;
    camera.lookAt(look);
  });
  return null;
}

export function SolutionViewer3D({
  activeN,
  onSelect,
}: {
  activeN: number;
  onSelect: (n: number) => void;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [3, 2, 5], fov: 42 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#f4f6f9"]} />
      <fog attach="fog" args={["#f4f6f9", 12, 22]} />
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 5, -2]} intensity={0.4} color="#e6ecf3" />
      <Suspense fallback={null}>
        <Room />
        <Float speed={1} floatIntensity={0.15} rotationIntensity={0}>
          <group>
            <CArm />
            <PatientTable />
            <CeilingMonitors />
            <Injector />
            <HemoStation />
            <RadiationShield />
          </group>
        </Float>
        <Sparkles count={40} size={1.5} scale={[8, 3, 4]} position={[0, 2, 0]} speed={0.2} opacity={0.35} color="#e11d2e" />
        {CATH_HOTSPOTS_3D.map((h) => (
          <HotspotMarker
            key={h.n}
            h={h}
            active={h.n === activeN}
            onClick={() => onSelect(h.n)}
          />
        ))}
        <Rig activeN={activeN} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
