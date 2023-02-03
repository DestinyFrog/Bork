// Imports
import * as game from "./game/game.js";

class Game {
    DELAY :number;

    constructor( width:number, height:number, fps?:number ) {
        // Set Screen Size
        const canvas = <HTMLCanvasElement> document.getElementById('canvas');
        canvas.width  = width ;
        canvas.height = height;

        // Set Frames Per Second
        this.DELAY = ( 1000 / ( Math.floor( fps ) || 12 ) );

        // it Start the Game When everything is loaded
        document.addEventListener( "DOMContentLoaded", () => { this.main(); } );

        // Keyboard Events
        document.addEventListener( 'keydown',( key ) => {   // On Key Down
            //! UnComment ⬇️this⬇️ to see Pressed keys in console
            // console.log( "pressed"+key.keyCode+": "+key.key );

            if( game.MainScene.press != undefined ) {
                if( game.MainScene.press[ key.keyCode ] != undefined )
                    game.MainScene.press[ key.keyCode ]();
            }

            game.MainScene.GameObjects.forEach( obj => {
                if( obj.object.press[ key.keyCode ] != undefined )
                    obj.object.press[ key.keyCode ]();
            } );
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
    }

    // Main loop
    main():void {
        game.MainScene?.run();
        setTimeout( () => { this.main(); }, this.DELAY);
    }
}

const _GAME = new Game( game.WIDTH, game.HEIGHT, game.FPS );