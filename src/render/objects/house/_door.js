import * as THREE from 'three';

const doorWidth = 1.5;
const doorHeight = 2;

export const door = new THREE.Mesh(
	new THREE.PlaneGeometry(doorWidth, doorHeight),
	new THREE.MeshStandardMaterial({ color: '#AA7B7B' })
);

door.position.z = 2 + 0.001;
door.position.y = doorHeight / 2 + 0.001;
