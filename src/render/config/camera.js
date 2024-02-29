// Camera
import * as THREE from 'three';

const cameraFieldOfView = 75;
const cameraNear = 0.01;
const cameraFar = 30;

export const camera = new THREE.PerspectiveCamera(
	cameraFieldOfView,
	window.innerWidth / window.innerHeight,
	cameraNear,
	cameraFar
);

const cameraX = 4;
const cameraY = 4;
const cameraZ = 10;

camera.position.set(cameraX, cameraY, cameraZ); // Setting camera position
