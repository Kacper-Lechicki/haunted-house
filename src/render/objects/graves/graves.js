import * as THREE from 'three';

import { GUIGravesFolder } from '../../config/gui';

export const graves = new THREE.Group();

const graveOptions = {
	graveWidth: 0.6,
	graveHeight: 0.8,
	graveDepth: 0.2,
	number: 30,
};

GUIGravesFolder.add(graveOptions, 'number')
	.min(0)
	.max(50)
	.name('Number of Graves')
	.step(1)
	.onChange(() => generateGraves());

const graveGeometry = new THREE.BoxGeometry(
	graveOptions.graveWidth,
	graveOptions.graveHeight,
	graveOptions.graveDepth
);

const graveMaterial = new THREE.MeshStandardMaterial({ color: '#B2B6B1' });

const generateGraves = () => {
	graves.clear();

	for (let i = 0; i < graveOptions.number; i++) {
		const angle = Math.random() * Math.PI * 2;
		let radius = 3 + Math.random() * 6;

		if (radius < 5) {
			radius = 5 * Math.random() * 0.3;
		}

		const x = Math.sin(angle) * radius;
		const z = Math.cos(angle) * radius;

		const grave = new THREE.Mesh(graveGeometry, graveMaterial);

		grave.position.set(x, graveOptions.graveHeight / 2, z);
		grave.rotation.y = Math.random();

		graves.add(grave);
	}
};

generateGraves();
