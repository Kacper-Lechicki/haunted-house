import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader(); // Creating a texture loader

const wallsWidth = 4;
const wallsHeight = 2.3;
const wallsDepth = 4;

const bricksColorTexture = textureLoader.load('textures/bricks/color.jpg');
const bricksambientOcclusionTexture = textureLoader.load(
	'textures/bricks/ambientOcclusion.jpg'
);
const bricksNormalTexture = textureLoader.load('textures/bricks/normal.jpg');
const bricksRoughnessTexture = textureLoader.load(
	'textures/bricks/roughness.jpg'
);

export const walls = new THREE.Mesh(
	new THREE.BoxGeometry(wallsWidth, wallsHeight, wallsDepth),
	new THREE.MeshStandardMaterial({
		map: bricksColorTexture,
		transparent: true,
		aoMap: bricksambientOcclusionTexture,
		displacementScale: 0.1,
		normalMap: bricksNormalTexture,
		roughnessMap: bricksRoughnessTexture,
	})
);

walls.position.y = wallsHeight / 2 + 0.001; // Positioning walls

walls.castShadow = true;
