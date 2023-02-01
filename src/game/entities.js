import { Vector2 } from "../engine/forms.js";
import { Audio } from "../engine/audio.js";
import { Color, Draw } from "../engine/graphics.js";
import { MID } from "./game.js";
export const background = { object: {
        update() {
            Draw.Background(Color.ICE);
        }
    } };
export const player = { object: {
        press: {
            [32]: () => { Audio.play("The Avengers.mp3"); },
            [90]: () => { Audio.stop(); }
        },
        update() {
            Draw.Sprite("player.png", MID(), Vector2(64));
        }
    } };
