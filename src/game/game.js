import { Scene } from "../engine/scene.js";
export const WIDTH = 450;
export const HEIGHT = 450;
export const FPS = 4;
export const MainScene = new Scene([]);
MainScene.press = {
    [38]: () => { console.log('up'); },
    [40]: () => { console.log('down'); },
    [37]: () => { console.log('left'); },
    [39]: () => { console.log('right'); }
};
