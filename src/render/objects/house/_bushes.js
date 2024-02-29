import * as THREE from 'three';

const bushRadius = 1;
const bushWidthSegments = 16;
const bushHeightSegments = 16;

const bushGeometry = new THREE.SphereGeometry(
	bushRadius,
	bushWidthSegments,
	bushHeightSegments
);
const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89C854' });

export const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.9, 0.2, 2.3);

export const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.5, 0.1, 2.15);

export const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.6, 0.6, 0.6);
bush3.position.set(-1, 0.2, 2.35);
