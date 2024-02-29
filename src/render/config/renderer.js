import * as THREE from 'three';

import { canvas } from './canvas';

export const renderer = new THREE.WebGLRenderer({ canvas }); // Creating WebGL renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Setting renderer size
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Setting renderer pixel ratio
