import { Vector2 } from "../engine/forms.js";
import { Audio } from "../engine/audio.js";
import { Color, Draw } from "../engine/graphics.js";
import { gameObject } from "../engine/scene.js";
import { MID } from "./game.js";

export const background:gameObject = { object: {
    update():void {
        Draw.Background( Color.ICE );
    }
} };

export const player:gameObject = { object: {
    press: {
        [ 32 ]: () => { Audio.play( "The Avengers.mp3" ); },
        [ 90 ]: () => { Audio.stop(); }
    },

    update():void {
        Draw.Sprite( "player.png", MID(), Vector2( 64 ) );
    }
} };