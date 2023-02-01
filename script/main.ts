// Imports
import * as game from "./game/game.js";

// Set Screen Size
const canvas = <HTMLCanvasElement> document.getElementById('canvas');
canvas.width  = game.WIDTH ; 
canvas.height = game.HEIGHT;

// Set Frames Per Second
var DELAY :number  = ( 1000 / ( Math.floor( game.FPS ) || 12 ) ) ;

// Main Loop
function main():void {
    game.MainScene?.run();
    setTimeout( () => {
        main();
    }, DELAY);
}

document.addEventListener( "DOMContentLoaded", () => { main(); } );

// Keyboard Events
document.addEventListener( 'keydown',( key ) => {   // On Key Down
    // ? UnComment ⬇️this⬇️ to see Pressed keys in console
    // console.log( "⌨️ Pressed ⌨️\n"+key.keyCode+": "+key.key );

    if( game.MainScene.press != undefined ) {
        if( game.MainScene.press[ key.keyCode ] != undefined )
        game.MainScene.press[ key.keyCode ]();
    }

    game.MainScene.GameObjects.forEach( obj => {
        if( obj.object.press != undefined ){
            if( obj.object.ignorePress == true ) return;

            if( obj.object.press[ key.keyCode ] != undefined ) 
                obj.object.press[ key.keyCode ]();
        }
    })
} );

document.addEventListener(  'keyup' ,( key ) => {   // On Key Up
    // ? UnComment ⬇️this⬇️ to see UnPressed keys in console
    // console.log( "⌨️ Pressed ⌨️\n"+key.keyCode+": "+key.key );

    if( game.MainScene.unpress != undefined ) {
        if( game.MainScene.unpress[ key.keyCode ] != undefined )
        game.MainScene.unpress[ key.keyCode ]();
    }

    game.MainScene.GameObjects.forEach( ( obj:any ) => {
        if( obj.object.unpress != undefined ){
            if( obj.object.unpress[ key.keyCode ] != undefined )
                obj.object.unpress[ key.keyCode ]();
        }
    })
} );