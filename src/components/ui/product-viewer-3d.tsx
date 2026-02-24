"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Float, RoundedBox, Bounds } from '@react-three/drei'
import * as THREE from 'three'

// A highly detailed procedural model heavily inspired by Creed Aventus
function ProceduralAventusBottle() {
    return (
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
            <group position={[0, -1.2, 0]}>

                {/* 1. The Main Glass Body (Flask Shape) */}
                <RoundedBox args={[1.5, 2.0, 0.7]} radius={0.15} smoothness={4} position={[0, 1.0, 0]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.98}
                        opacity={1}
                        transparent={true}
                        metalness={0.1}
                        roughness={0.02}
                        ior={1.5}
                        thickness={1.5}
                        specularIntensity={1.0}
                        envMapIntensity={1.0}
                        side={THREE.DoubleSide}
                    />
                </RoundedBox>

                {/* 2. The Inner Liquid (Faint tint) */}
                <RoundedBox args={[1.35, 1.8, 0.55]} radius={0.1} smoothness={4} position={[0, 0.95, 0]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.95}
                        opacity={0.8}
                        roughness={0.0}
                        ior={1.33} // Water/fragrance index of refraction
                    />
                </RoundedBox>

                {/* 3. The Signature Black Faux-Leather Wrap (Lower Half) */}
                <RoundedBox args={[1.52, 1.05, 0.72]} radius={0.15} smoothness={4} position={[0, 0.525, 0]}>
                    <meshStandardMaterial
                        color="#0a0a0a"
                        roughness={0.85}
                        metalness={0.2}
                    />
                </RoundedBox>

                {/* 4. The Silver Crest / Front Label */}
                {/* Silver Background */}
                <mesh position={[0, 0.95, 0.37]}>
                    <planeGeometry args={[1.1, 0.5]} />
                    <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Black Logo Design Inset */}
                <mesh position={[0, 0.95, 0.375]}>
                    {/* A stylised horseman block representation */}
                    <planeGeometry args={[0.9, 0.4]} />
                    <meshStandardMaterial color="#ffffff" roughness={1.0} metalness={0.0} />
                </mesh>
                {/* The "CREED" branding ribbon (upper crest logic) */}
                <mesh position={[0, 1.35, 0.355]}>
                    <planeGeometry args={[1.2, 0.2]} />
                    <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0, 1.35, 0.36]}>
                    <planeGeometry args={[0.05, 0.4]} />
                    <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
                </mesh>

                {/* 5. The Glass Neck (Curving up) */}
                <mesh position={[0, 2.15, 0]}>
                    <cylinderGeometry args={[0.18, 0.4, 0.3, 32]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.95}
                        roughness={0.05}
                        ior={1.5}
                        thickness={1}
                    />
                </mesh>

                {/* 6. The Silver Spray Atomizer Ring */}
                <mesh position={[0, 2.35, 0]}>
                    <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
                    <meshStandardMaterial color="#e0e0e0" metalness={1.0} roughness={0.1} />
                </mesh>

                {/* 7. The Iconic Black Crown-like Cap */}
                {/* Main Cap Cylinder */}
                <mesh position={[0, 2.65, 0]}>
                    <cylinderGeometry args={[0.3, 0.23, 0.5, 32]} />
                    <meshStandardMaterial color="#050505" metalness={0.4} roughness={0.6} />
                </mesh>
                {/* Cap Base Ring */}
                <mesh position={[0, 2.45, 0]}>
                    <cylinderGeometry args={[0.32, 0.32, 0.1, 32]} />
                    <meshStandardMaterial color="#050505" metalness={0.4} roughness={0.6} />
                </mesh>
                {/* Cap Top Chamfer/Crown tip */}
                <mesh position={[0, 2.9, 0]}>
                    <cylinderGeometry args={[0.25, 0.3, 0.1, 32]} />
                    <meshStandardMaterial color="#050505" metalness={0.4} roughness={0.6} />
                </mesh>

            </group>
        </Float>
    )
}

// Loader for the actual external 3D model with instant correct scaling
function ModelLoader({ url, targetSize = 3.0 }: { url: string, targetSize?: number }) {
    const { scene } = useGLTF(url)
    const clonedScene = React.useMemo(() => scene.clone(), [scene])

    React.useLayoutEffect(() => {
        // First compute bounding box of the unscaled original
        clonedScene.updateMatrixWorld(true)
        const box = new THREE.Box3().setFromObject(clonedScene)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        if (maxDim > 0) {
            // Instantly scale uniformly to roughly fit the target size
            const scale = targetSize / maxDim
            clonedScene.scale.setScalar(scale)

            // Recompute box after scaling to accurately center it
            clonedScene.updateMatrixWorld(true)
            const scaledBox = new THREE.Box3().setFromObject(clonedScene)
            const scaledCenter = scaledBox.getCenter(new THREE.Vector3())
            const scaledSize = scaledBox.getSize(new THREE.Vector3())

            // Move it so its 3D center is at the scene origin, but aligned exactly with floor
            clonedScene.position.x -= scaledCenter.x
            clonedScene.position.y -= scaledCenter.y - (scaledSize.y / 2) // Move center down exactly half its height so the bottom touches 0
            clonedScene.position.z -= scaledCenter.z
        }
    }, [clonedScene])

    return <primitive object={clonedScene} />
}

export function ProductViewer3D({ modelUrl, listMode = false }: { modelUrl?: string, listMode?: boolean }) {
    return (
        <div className={`w-full h-full ${listMode ? 'bg-[#f0eee9]' : 'bg-transparent'} rounded-sm relative overflow-hidden flex items-center justify-center`}>
            {/* Overlay badge - hide in list mode */}
            {!listMode && (
                <div className="absolute top-6 left-6 z-10 bg-white/60 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] px-4 py-2 font-bold text-primary border border-primary/5 rounded-none flex items-center gap-3 shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                    </span>
                    Góc Nhìn 3D Tương Tác
                </div>
            )}

            <Canvas shadows camera={{ position: [listMode ? 4 : 15, listMode ? 2 : 20, listMode ? 5 : 15], fov: listMode ? 45 : 40 }} className={listMode ? "pointer-events-none" : ""}>
                <ambientLight intensity={0.7} />
                <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={2} castShadow />
                <spotLight position={[-5, 5, 5]} angle={0.2} penumbra={1} intensity={1} color="#ffffff" />
                <directionalLight position={[0, 5, -5]} intensity={1} />

                <Suspense fallback={null}>
                    {modelUrl ? (
                        <ModelLoader url={modelUrl} targetSize={listMode ? 3.0 : 22.0} />
                    ) : (
                        <ProceduralAventusBottle />
                    )}

                    {/* High quality studio environment reflection */}
                    <Environment preset="studio" />

                    {/* Realistic grounding shadow */}
                    <ContactShadows resolution={512} position={[0, -1.2, 0]} opacity={listMode ? 0.3 : 0.6} scale={10} blur={2} far={4} color="#000000" />
                </Suspense>

                {!listMode && (
                    <OrbitControls
                        target={[0, 1, 0]}
                        enablePan={false}
                        enableZoom={true}
                        minZoom={0.5}
                        maxZoom={2}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI / 2}
                        autoRotate
                        autoRotateSpeed={0.8}
                    />
                )}
                {listMode && (
                    <OrbitControls
                        target={[0, 0.5, 0]}
                        enablePan={false}
                        enableZoom={false}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2.5}
                        autoRotate
                        autoRotateSpeed={1.5}
                    />
                )}
            </Canvas>
        </div>
    )
}
