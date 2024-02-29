import GUI from 'lil-gui';

const gui = new GUI(); // Initializing GUI for debugging

export const GUIAmbientLightFolder = gui.addFolder('Ambient Light'); // Creating GUI folder for ambient light
export const GUIMoonlightLightFolder = gui.addFolder(
	'(Directional) Moonlight Light'
); // Creating GUI folder for directional moonlight
