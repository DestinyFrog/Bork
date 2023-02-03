import { gameObject, Scene } from "../engine/scene.js";

// ! Basic Settings
export const WIDTH  :number = 450;
export const HEIGHT :number = 450;
export const FPS    :number =   4;

// ! Set Main Scene
export const MainScene:Scene = new Scene( [
    // todo: Add GameObjects to MainScene on Scene Start
] );

MainScene.press = {
    [38]: () => { console.log( 'up' );    } ,
    [40]: () => { console.log( 'down' );  } ,
    [37]: () => { console.log( 'left' );  } ,
    [39]: () => { console.log( 'right' ); }
}