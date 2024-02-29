import * as THREE from 'three';

import { camera } from './render/config/camera';
import { controls } from './render/config/controls';
import { renderer } from './render/config/renderer';
import { ambientLight, moonLight } from './render/config/lights';

import { floor } from './render/objects/floor/floor';
import { houseGroup } from './render/objects/house/house';

// Sizes
let sizes = {
	width: 0,
	height: 0,
};

window.addEventListener('resize', () => {
	// Update sizes when the window is resized
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera aspect ratio and renderer size
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Scene
const scene = new THREE.Scene(); // Creating a new Three.js scene
scene.add(ambientLight); // Adding ambient light to the scene
scene.add(moonLight); // Adding directional light to the scene
scene.add(camera); // Adding camera to the scene

scene.add(floor); // Adding floor to the scene
scene.add(houseGroup); // Adding house group to the scene

// Animation
const clock = new THREE.Clock(); // Creating a clock for animation

const tick = () => {
	const elapsedTime = clock.getElapsedTime(); // Calculating elapsed time

	// Update controls
	controls.update();

	// Render scene
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick(); // Start animation loop
