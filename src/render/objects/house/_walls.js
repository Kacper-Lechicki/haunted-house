import * as THREE from 'three';

const wallsWidth = 4;
const wallsHeight = 2.5;
const wallsDepth = 4;

export const walls = new THREE.Mesh(
	new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
	new THREE.MeshStandardMaterial({ color: '#AC8E82' })
);

walls.position.y = wallsHeight / 2 + 0.001; // Positioning walls
