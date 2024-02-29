import * as THREE from 'three';

import { walls } from './_walls';
import { roof } from './_roof';
import { door } from './_door';
import { bush1, bush2, bush3 } from './_bushes';

export const houseGroup = new THREE.Group();

houseGroup.add(walls);
houseGroup.add(roof);
houseGroup.add(door);
houseGroup.add(bush1, bush2, bush3);
