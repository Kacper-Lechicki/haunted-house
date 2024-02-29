import * as THREE from 'three';

const roofRadius = 3.5;
const roofHeight = 1.5;
const roofRadialSegments = 4;

export const roof = new THREE.Mesh(
	new THREE.ConeGeometry(roofRadius, roofHeight, roofRadialSegments),
	new THREE.MeshStandardMaterial({ color: '#B35F45' })
);

roof.position.y = 2.5 + roofHeight / 2 + 0.001; // Positioning roof
roof.rotation.y = Math.PI / 4; // Rotating roof
