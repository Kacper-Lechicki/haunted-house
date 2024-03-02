import * as THREE from 'three';

export const ghosts = new THREE.Group();

const ghost1 = new THREE.PointLight('#ff00ff', 6, 3);
const ghost2 = new THREE.PointLight('#00ffff', 6, 3);
const ghost3 = new THREE.PointLight('#ffff00', 6, 3);

ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

ghosts.add(ghost1, ghost2, ghost3);

// Animation
const clock = new THREE.Clock(); // Creating a clock for animation

const tick = () => {
	const elapsedTime = clock.getElapsedTime(); // Calculating elapsed time

	const ghost1Angle = elapsedTime * 0.53;
	ghost1.position.x = Math.cos(ghost1Angle) * 5;
	ghost1.position.z = Math.sin(ghost1Angle) * 5;
	ghost1.position.y = Math.sin(ghost1Angle * 3);

	const ghost2Angle = elapsedTime * 0.32;
	ghost2.position.x = Math.cos(ghost2Angle) * 8;
	ghost2.position.z = Math.sin(ghost2Angle) * 8;
	ghost2.position.y = Math.sin(ghost2Angle * 4) + Math.sin(elapsedTime * 1.2);

	const ghost3Angle = elapsedTime * 0.18;
	ghost3.position.x =
		Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
	ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
	ghost3.position.y = Math.sin(ghost3Angle * 4) + Math.sin(elapsedTime * 2);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
