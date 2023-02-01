import { Vector2, Vector4 } from "./forms.js";
import { Draw } from "./graphics.js";
export const animSpr = (x, y, X, Y, t) => {
    return { x: x, y: y, X: X, Y: Y, t: (t || 0) };
};
export const animInfo = (f, t) => {
    return { f: f, t: (t || 0) };
};
export class Anima {
    constructor(sheet, start) {
        this.count = 0;
        this.index = 0;
        this.sheet = sheet;
        this.animation = this.sheet[start || 'idle'];
        this.frame = this.animation[this.index];
    }
    changeAnimation(animationName) {
        this.animation = this.sheet[animationName];
    }
    draw() {
        if (this.count >= this.frame['t']) {
            this.count = 0;
            if (this.index >= this.animation.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
            this.frame = this.animation[this.index];
        }
        else {
            this.count++;
        }
        this.frame['f']();
    }
}
export class AnimaSprite {
    constructor(adress, sheet, start) {
        this.count = 0;
        this.index = 0;
        this.adress = adress;
        this.sheet = sheet;
        this.animation = this.sheet[start || 'idle'];
        this.frame = this.animation[this.index];
    }
    changeAnimation(animationName) {
        this.animation = this.sheet[animationName];
    }
    draw(pos) {
        if (this.count >= this.frame['t']) {
            this.count = 0;
            if (this.index >= this.animation.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
            this.frame = this.animation[this.index];
        }
        else {
            this.count++;
        }
        Draw.Sprite(this.adress, pos, Vector2(this.sheet['size']['x'], this.sheet['size']['y']), Vector4(this.frame['x'], this.frame['y'], this.frame['x'] + this.frame['X'], this.frame['y'] + this.frame['Y']));
    }
}
