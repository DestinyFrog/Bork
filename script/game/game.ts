import { Scene } from "../engine/scene.js";
import { background, player } from "./entities.js";

// ! Necessary Parameters
export const WIDTH  :number = 450;
export const HEIGHT :number = 450;
export const FPS    :number =   4;

// ! Set Main Scene
export const MainScene:Scene = new Scene( [
    // todo: Add GameObjects to MainScene on Scene Start
    background,
    player
] );

// ? optional Parameters
export const MID:Function = () => { return { x: WIDTH/2,y: HEIGHT/2 } };