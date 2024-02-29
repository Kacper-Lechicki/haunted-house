import * as THREE from 'three';
import { grassMaterial } from '../floor/floor';

const bushRadius = 1;
const bushWidthSegments = 32;
const bushHeightSegments = 8;

const bushGeometry = new THREE.SphereGeometry(
	bushRadius,
	bushWidthSegments,
	bushHeightSegments
);

export const bush1 = new THREE.Mesh(bushGeometry, grassMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.9, 0.2, 2.3);

export const bush2 = new THREE.Mesh(bushGeometry, grassMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.5, 0.1, 2.15);

export const bush3 = new THREE.Mesh(bushGeometry, grassMaterial);
bush3.scale.set(0.6, 0.6, 0.6);
bush3.position.set(-1, 0.2, 2.35);
