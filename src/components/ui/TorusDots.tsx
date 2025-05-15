"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function TorusDotCloud() {
  const ref = useRef<THREE.Points>(null);

  const R = 2; // major radius
  const r = 0.7; // minor radius
  const segments = 100;
  const rings = 40;

  const positions = [];

  for (let i = 0; i < segments; i++) {
    const u = (i / segments) * 2 * Math.PI;

    for (let j = 0; j < rings; j++) {
      const v = (j / rings) * 2 * Math.PI;

      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = (R + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);

      positions.push(x, y, z);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    size: 0.03,
    color: "#32cd32", // lime green
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <points ref={ref} geometry={geometry} material={material} />;
}
