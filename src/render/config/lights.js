import * as THREE from 'three';

import {
	GUIAmbientLightFolder,
	GUIDoorLightFolder,
	GUIMoonlightLightFolder,
} from './gui';

const ambientLightIntensity = 0.1;

export const ambientLight = new THREE.AmbientLight(
	'#b9d5ff',
	ambientLightIntensity
); // Creating ambient light

GUIAmbientLightFolder.add(ambientLight, 'intensity')
	.min(0)
	.max(1)
	.step(0.01)
	.name('Intensity'); // Adding ambient light intensity control to GUI

const moonLightIntensity = 0.15;

export const moonLight = new THREE.DirectionalLight(
	'#b9d5ff',
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

const doorLightIntensity = 4.5;
const doorLightDistance = 7;

export const doorLight = new THREE.PointLight(
	'#ff7d46',
	doorLightIntensity,
	doorLightDistance
);

doorLight.position.set(0, 2.4, 2.7);

GUIDoorLightFolder.add(doorLight, 'intensity')
	.min(0)
	.max(10)
	.step(0.01)
	.name('Intensity');
