import * as THREE from 'three';

const roofRadius = 3.5;
const roofHeight = 1.7;
const roofRadialSegments = 4;

export const roof = new THREE.Mesh(
	new THREE.ConeGeometry(roofRadius, roofHeight, roofRadialSegments),
	new THREE.MeshStandardMaterial({ color: '#B35F45' })
);

roof.position.y = 2.3 + roofHeight / 2 + 0.001; // Positioning roof
roof.rotation.y = Math.PI / 4; // Rotating roof

roof.castShadow = true;
