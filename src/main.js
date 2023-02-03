import * as game from "./game/game.js";
class Game {
    constructor(width, height, fps) {
        const canvas = document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height;
        this.DELAY = (1000 / (Math.floor(fps) || 12));
        document.addEventListener("DOMContentLoaded", () => { this.main(); });
        document.addEventListener('keydown', (key) => {
            if (game.MainScene.press != undefined) {
                if (game.MainScene.press[key.keyCode] != undefined)
                    game.MainScene.press[key.keyCode]();
            }
            game.MainScene.GameObjects.forEach(obj => {
                if (obj.object.press[key.keyCode] != undefined)
                    obj.object.press[key.keyCode]();
            });
        });
        document.addEventListener('keyup', (key) => {
            if (game.MainScene.unpress != undefined) {
                if (game.MainScene.unpress[key.keyCode] != undefined)
                    game.MainScene.unpress[key.keyCode]();
            }
            game.MainScene.GameObjects.forEach((obj) => {
                if (obj.object.unpress != undefined) {
                    if (obj.object.unpress[key.keyCode] != undefined)
                        obj.object.unpress[key.keyCode]();
                }
            });
        });
    }
    main() {
        var _a;
        (_a = game.MainScene) === null || _a === void 0 ? void 0 : _a.run();
        setTimeout(() => { this.main(); }, this.DELAY);
    }
}
const _GAME = new Game(game.WIDTH, game.HEIGHT, game.FPS);
