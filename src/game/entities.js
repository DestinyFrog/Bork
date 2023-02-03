import { Color, Draw } from "../engine/graphics.js";
var background = { ["color"]: Color.ICE };
export const back = {
    object: {
        update() {
            Draw.Background(background.color);
        }
    }
};
