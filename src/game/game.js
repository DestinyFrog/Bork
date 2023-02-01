import { Scene } from "../engine/scene.js";
import { background, player } from "./entities.js";
export const WIDTH = 450;
export const HEIGHT = 450;
export const FPS = 4;
export const MainScene = new Scene([
    background,
    player
]);
export const MID = () => { return { x: WIDTH / 2, y: HEIGHT / 2 }; };
