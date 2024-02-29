// Importing necessary modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

// Debug
const gui = new GUI(); // Initializing GUI for debugging
const GUIAmbientLightFolder = gui.addFolder('Ambient Light'); // Creating GUI folder for ambient light
const GUIMoonlightLightFolder = gui.addFolder('(Directional) Moonlight Light'); // Creating GUI folder for directional moonlight

// Canvas
const canvas = document.querySelector('canvas.webgl'); // Selecting the WebGL canvas element

// Scene
const scene = new THREE.Scene(); // Creating a new Three.js scene

// Textures
const textureLoader = new THREE.TextureLoader(); // Creating a texture loader

let sizes = {
	width: 0,
	height: 0,
};

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
const cameraFieldOfView = 75;
const cameraNear = 0.1;
const cameraFar = 100;

const camera = new THREE.PerspectiveCamera(
	cameraFieldOfView,
	window.innerWidth / window.innerHeight,
	cameraNear,
	cameraFar
);

const cameraX = 4;
const cameraY = 2;
const cameraZ = 5;

camera.position.set(cameraX, cameraY, cameraZ); // Setting camera position
scene.add(camera); // Adding camera to the scene

// Controls
const controls = new OrbitControls(camera, canvas); // Creating orbit controls
controls.enableDamping = true; // Enabling damping for smoother interactions

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas }); // Creating WebGL renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Setting renderer size
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Setting renderer pixel ratio

// Lights
const ambientLightIntensity = 0.5;

const ambientLight = new THREE.AmbientLight('#ffffff', ambientLightIntensity); // Creating ambient light
GUIAmbientLightFolder.add(ambientLight, 'intensity')
	.min(0)
	.max(1)
	.step(0.01)
	.name('Intensity'); // Adding ambient light intensity control to GUI
scene.add(ambientLight); // Adding ambient light to the scene

const moonLightIntensity = 1.5;

const moonLight = new THREE.DirectionalLight('#ffffff', moonLightIntensity); // Creating directional light
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

walls.position.y = wallsHeight / 2 + 0.001; // Positioning walls

houseGroup.add(walls);

//Roof
const roofRadius = 3.5;
const roofHeight = 1.5;
const roofRadialSegments = 4;

const roof = new THREE.Mesh(
	new THREE.ConeGeometry(roofRadius, roofHeight, roofRadialSegments),
	new THREE.MeshStandardMaterial({ color: '#B35F45' })
);

roof.position.y = wallsHeight + roofHeight / 2 + 0.001; // Positioning roof
roof.rotation.y = Math.PI / 4; // Rotating roof

houseGroup.add(roof);

//Floor
const floorWidth = 20;
const floorHeight = 20;

//Grass textures
const grassTextureNormal = textureLoader.load('textures/grass/normal.jpg');
grassTextureNormal.repeat.set(8, 8);
grassTextureNormal.wrapS = THREE.RepeatWrapping;
grassTextureNormal.wrapT = THREE.RepeatWrapping;

const grassTextureColor = textureLoader.load('textures/grass/color.jpg');
grassTextureColor.repeat.set(8, 8);
grassTextureColor.wrapS = THREE.RepeatWrapping;
grassTextureColor.wrapT = THREE.RepeatWrapping;

const grassTextureAmbientOcclusion = textureLoader.load(
	'textures/grass/ambientOcclusion.jpg'
);
grassTextureAmbientOcclusion.repeat.set(8, 8);
grassTextureAmbientOcclusion.wrapS = THREE.RepeatWrapping;
grassTextureAmbientOcclusion.wrapT = THREE.RepeatWrapping;

const grassTextureRoughness = textureLoader.load(
	'textures/grass/roughness.jpg'
);
grassTextureRoughness.repeat.set(8, 8);
grassTextureRoughness.wrapS = THREE.RepeatWrapping;
grassTextureRoughness.wrapT = THREE.RepeatWrapping;

const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(floorWidth, floorHeight),
	new THREE.MeshStandardMaterial({
		color: '#A9C388',
		side: THREE.DoubleSide,
		map: grassTextureColor,
		aoMap: grassTextureAmbientOcclusion,
		normalMap: grassTextureNormal,
		roughness: grassTextureRoughness,
	})
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
