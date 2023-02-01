import { Draw, Color } from "./graphics.js";
export class BallHit {
    constructor(radius, TriggerAction, InsideAction, ExitAction) {
        this.point = { x: 0, y: 0 };
        this.canDetect = true;
        this.radius = radius;
        this.onTrigger = TriggerAction;
        this.onInside = InsideAction;
        this.onExit = ExitAction;
    }
    update(self, target, drawGizmos) {
        this.point = self;
        if (target == undefined)
            return;
        var color = Color.ESMERALD;
        let distance = Math.sqrt(Math.pow(this.point.x - target.point.x, 2) + Math.pow(this.point.y - target.point.y, 2));
        if (distance <= (this.radius + target.radius)) {
            color = Color.RUBY;
            if (this.canDetect == true) {
                this.canDetect = false;
                if (this.onTrigger !== undefined)
                    this.onTrigger();
            }
            else {
                if (this.onInside !== undefined)
                    this.onInside();
            }
        }
        else if (this.canDetect == false) {
            if (this.onExit !== undefined)
                this.onExit();
            this.canDetect = true;
        }
        if (drawGizmos == true)
            Draw.Circuference(this.point, this.radius, color || Color.ESMERALD);
    }
}
export class SquareHit {
    constructor(size, TriggerAction, InsideAction, ExitAction) {
        this.point = { x: 0, y: 0 };
        this.canDetect = true;
        this.outTrigger = false;
        this.size = size;
        this.onTrigger = TriggerAction;
        this.onInside = InsideAction;
        this.onExit = ExitAction;
    }
    gizmos(color) {
        Draw.BordRectangle(this.point, this.size, color || Color.ESMERALD);
        Draw.Circle({ x: this.point.x + (this.size.x / 2), y: this.point.y + (this.size.y / 2) }, 3, Color.RUBY);
        Draw.Circle({ x: this.point.x - (this.size.x / 2), y: this.point.y + (this.size.y / 2) }, 3, Color.RUBY);
        Draw.Circle({ x: this.point.x + (this.size.x / 2), y: this.point.y - (this.size.y / 2) }, 3, Color.RUBY);
        Draw.Circle({ x: this.point.x - (this.size.x / 2), y: this.point.y - (this.size.y / 2) }, 3, Color.RUBY);
    }
    update(self, target, drawGizmos) {
        this.point = self;
        let color = Color.ESMERALD;
        if (target != undefined) {
            if (this.point.x - (this.size.x / 2) < target.point.x + (target.size.x / 2) &&
                this.point.x + (this.size.x / 2) > target.point.x - (target.size.x / 2) &&
                this.point.y - (this.size.y / 2) < target.point.y + (target.size.y / 2) &&
                this.point.y + (this.size.y / 2) > target.point.y - (target.size.y / 2)) {
                color = Color.RUBY;
                if (this.canDetect == true) {
                    if (this.onTrigger != undefined)
                        this.onTrigger();
                    if (target.onTrigger != undefined)
                        target.onTrigger();
                    this.canDetect = false;
                }
                else {
                    if (this.onInside != undefined)
                        this.onInside();
                    if (target.onInside != undefined)
                        target.onInside();
                }
            }
            else {
                if (this.canDetect == false) {
                    if (this.onExit !== undefined)
                        this.onExit();
                    this.canDetect = true;
                }
            }
        }
        if (drawGizmos == true)
            this.gizmos(color);
    }
}
