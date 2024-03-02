import * as THREE from 'three';

import { camera } from './render/config/camera';
import { controls } from './render/config/controls';
import { renderer } from './render/config/renderer';
import { ambientLight, doorLight, moonLight } from './render/config/lights';

import { floor } from './render/objects/floor/floor';
import { houseGroup } from './render/objects/house/house';
import { graves } from './render/objects/graves/graves';
import { ghosts } from './render/objects/ghosts/ghosts';

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
const fog = new THREE.Fog('#313340', 2, 17);
scene.fog = fog;
scene.add(ambientLight); // Adding ambient light to the scene
scene.add(moonLight); // Adding directional light to the scene
scene.add(camera); // Adding camera to the scene

scene.add(floor); // Adding floor to the scene
houseGroup.add(doorLight);
scene.add(houseGroup); // Adding house group to the scene
scene.add(graves); // Adding graves to the scene
scene.add(ghosts); // Adding ghosts to the scene

// Animation
const clock = new THREE.Clock(); // Creating a clock for animation

const tick = () => {
	const elapsedTime = clock.getElapsedTime(); // Calculating elapsed time

	// Update controls
	controls.update();

	// Render scene
	renderer.render(scene, camera);
	renderer.setClearColor('#313340');

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick(); // Start animation loop
