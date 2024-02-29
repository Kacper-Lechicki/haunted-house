// Importing necessary modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

// Debug
const gui = new GUI(); // Initializing GUI for debugging
const GUIAmbientLightFolder = gui.addFolder('Ambient Light');
const GUIMoonlightLightFolder = gui.addFolder('(Directional) Moonlight Light');

// Canvas
const canvas = document.querySelector('canvas.webgl'); // Selecting the WebGL canvas element

// Scene
const scene = new THREE.Scene(); // Creating a new Three.js scene

// Textures
const textureLoader = new THREE.TextureLoader(); // Creating a texture loader

// Sizes
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

// Camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
);
camera.position.set(4, 2, 5); // Setting camera position
scene.add(camera); // Adding camera to the scene

// Controls
const controls = new OrbitControls(camera, canvas); // Creating orbit controls
controls.enableDamping = true; // Enabling damping for smoother interactions

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas }); // Creating WebGL renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Setting renderer size
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Setting renderer pixel ratio

// Lights
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5); // Creating ambient light
GUIAmbientLightFolder.add(ambientLight, 'intensity')
	.min(0)
	.max(1)
	.step(0.01)
	.name('Intensity'); // Adding ambient light intensity control to GUI
scene.add(ambientLight); // Adding ambient light to the scene

const moonLight = new THREE.DirectionalLight('#ffffff', 1.5); // Creating directional light
moonLight.position.set(4, 5, -2); // Setting light position
GUIMoonlightLightFolder.add(moonLight, 'intensity')
	.min(0)
	.max(1)
	.step(0.01)
	.name('MoonLight Intensity'); // Adding directional light intensity control to GUI
GUIMoonlightLightFolder.add(moonLight.position, 'x')
	.min(-5)
	.max(5)
	.step(0.01)
	.name('MoonLight X'); // Adding light x-position control to GUI
GUIMoonlightLightFolder.add(moonLight.position, 'y')
	.min(-5)
	.max(5)
	.step(0.01)
	.name('MoonLight Y'); // Adding light y-position control to GUI
GUIMoonlightLightFolder.add(moonLight.position, 'z')
	.min(-5)
	.max(5)
	.step(0.01)
	.name('MoonLight Z'); // Adding light z-position control to GUI
scene.add(moonLight); // Adding directional light to the scene

/**
 * House
 */
const houseGroup = new THREE.Group();
scene.add(houseGroup);

//Walls
const wallsWidth = 4;
const wallsHeight = 2.5;
const wallsDepth = 4;

const walls = new THREE.Mesh(
	new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
	new THREE.MeshStandardMaterial({ color: '#AC8E82' })
);

walls.position.y = wallsHeight / 2 + 0.001;

houseGroup.add(walls);

//Floor
const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(20, 20),
	new THREE.MeshStandardMaterial({ color: '#A9C388', side: THREE.DoubleSide })
);
floor.rotation.x = -Math.PI * 0.5; // Rotating floor
scene.add(floor); // Adding floor to the scene

// Animation
const clock = new THREE.Clock(); // Creating a clock for animation

const animate = () => {
	const elapsedTime = clock.getElapsedTime(); // Calculating elapsed time

	// Update controls
	controls.update();

	// Render scene
	renderer.render(scene, camera);

	// Call animate again on the next frame
	window.requestAnimationFrame(animate);
};

animate(); // Start animation loop
