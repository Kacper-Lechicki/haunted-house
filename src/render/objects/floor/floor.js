import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader(); // Creating a texture loader

//Floor
const floorWidth = 50;
const floorHeight = 50;

//Grass textures
const grassTextureNormal = textureLoader.load('textures/grass/normal.jpg');
grassTextureNormal.repeat.set(16, 16);
grassTextureNormal.wrapS = THREE.RepeatWrapping;
grassTextureNormal.wrapT = THREE.RepeatWrapping;

const grassTextureColor = textureLoader.load('textures/grass/color.jpg');
grassTextureColor.repeat.set(16, 16);
grassTextureColor.wrapS = THREE.RepeatWrapping;
grassTextureColor.wrapT = THREE.RepeatWrapping;

const grassTextureAmbientOcclusion = textureLoader.load(
	'textures/grass/ambientOcclusion.jpg'
);
grassTextureAmbientOcclusion.repeat.set(16, 16);
grassTextureAmbientOcclusion.wrapS = THREE.RepeatWrapping;
grassTextureAmbientOcclusion.wrapT = THREE.RepeatWrapping;

const grassTextureRoughness = textureLoader.load(
	'textures/grass/roughness.jpg'
);
grassTextureRoughness.repeat.set(16, 16);
grassTextureRoughness.wrapS = THREE.RepeatWrapping;
grassTextureRoughness.wrapT = THREE.RepeatWrapping;

export const grassMaterial = new THREE.MeshStandardMaterial({
	color: '#A9C388',
	side: THREE.DoubleSide,
	map: grassTextureColor,
	aoMap: grassTextureAmbientOcclusion,
	normalMap: grassTextureNormal,
	roughness: 0.9,
	reflectivity: 0,
	metalness: 0,
});

export const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(floorWidth, floorHeight),
	grassMaterial
);

floor.rotation.x = -Math.PI * 0.5; // Rotating floor

floor.receiveShadow = true;
