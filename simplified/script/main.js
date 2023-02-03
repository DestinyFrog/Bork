import { game } from "./game.js";

const canvas = document.getElementById("canvas");
canvas.width  = game.WIDTH ;
canvas.height = game.HEIGHT;

var DELAY = ( 1000 / game.FPS );

function main() {
    setTimeout( () => {
        ( Object.entries( game.gameObjects ) ).forEach( obj => {
            obj[ 1 ].draw( obj[1] ) } );
        main();
    }, DELAY )
}

document.addEventListener( "DOMContentLoaded", main );