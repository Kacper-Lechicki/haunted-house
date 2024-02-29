import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera';
import { canvas } from './canvas';

export const controls = new OrbitControls(camera, canvas); // Creating orbit controls
controls.enableDamping = true; // Enabling damping for smoother interactions

controls.enablePan = false;
controls.enableZoom = false;

controls.maxPolarAngle = Math.PI / 2.5;
