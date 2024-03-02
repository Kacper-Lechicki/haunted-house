import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader(); // Creating a texture loader

const doorWidth = 2.2;
const doorHeight = 2.2;

const doorColorTexture = textureLoader.load('textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('textures/door/alpha.jpg');
const doorambientOcclusionTexture = textureLoader.load(
	'textures/door/ambientOcclusion.jpg'
);
const doorHeightTexture = textureLoader.load('textures/door/height.jpg');
const doorNormalTexture = textureLoader.load('textures/door/normal.jpg');
const doorMetalnessTexture = textureLoader.load('textures/door/metalness.jpg');
const doorRoughnessTexture = textureLoader.load('textures/door/roughness.jpg');

export const door = new THREE.Mesh(
	new THREE.PlaneGeometry(doorWidth, doorHeight, 100, 100),
	new THREE.MeshStandardMaterial({
		map: doorColorTexture,
		alphaMap: doorAlphaTexture,
		transparent: true,
		aoMap: doorambientOcclusionTexture,
		displacementMap: doorHeightTexture,
		displacementScale: 0.1,
		normalMap: doorNormalTexture,
		metalnessMap: doorMetalnessTexture,
		roughnessMap: doorRoughnessTexture,
	})
);

door.geometry.setAttribute(
	'uv2',
	new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);

door.position.z = 2 + 0.001;
door.position.y = doorHeight / 2 - 0.09;
