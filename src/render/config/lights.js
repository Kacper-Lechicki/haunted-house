import * as THREE from 'three';

import { GUIAmbientLightFolder, GUIMoonlightLightFolder } from './gui';

const ambientLightIntensity = 0.5;

export const ambientLight = new THREE.AmbientLight(
	'#ffffff',
	ambientLightIntensity
); // Creating ambient light

GUIAmbientLightFolder.add(ambientLight, 'intensity')
	.min(0)
	.max(1)
	.step(0.01)
	.name('Intensity'); // Adding ambient light intensity control to GUI

const moonLightIntensity = 1.5;

export const moonLight = new THREE.DirectionalLight(
	'#ffffff',
	moonLightIntensity
); // Creating directional light

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
