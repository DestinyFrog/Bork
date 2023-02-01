import { Vector2 } from "./forms.js";
import { Draw, Color } from "./graphics.js";

export class BallHit {
    point:{x:number,y:number} = {x:0,y:0} ;
    radius:number;
    canDetect:boolean = true;

    onTrigger:Function; // ? Play on trigger collision
    onInside :Function; // ? Play while is inside collision
    onExit   :Function; // ? Play when exit the collision

    constructor( radius:number, TriggerAction?:Function, InsideAction?:Function, ExitAction?:Function ) {
        this.radius = radius;

        this.onTrigger = TriggerAction;
        this.onInside  = InsideAction;
        this.onExit    = ExitAction;
    }

    update( self:Vector2, target?:BallHit, drawGizmos?:boolean ):void {
        // Update Parameters
        this.point = self;
        if( target == undefined ) return;
        var color:string = Color.ESMERALD ;

        // Check if Collide
        let distance = Math.sqrt(Math.pow(this.point.x - target.point.x,2)+Math.pow(this.point.y - target.point.y,2));
        if( distance <= ( this.radius + target.radius ) ) {
            // Collision Detected
            color = Color.RUBY;
            if( this.canDetect == true ) {
                this.canDetect = false;
                if( this.onTrigger !== undefined ) this.onTrigger();
                // if( target.onTrigger !== undefined ) target.onTrigger();
            } else {
                if( this.onInside !== undefined ) this.onInside();
                // if( target.onInside !== undefined ) target.onInside();
            }
        } else if( this.canDetect == false ) {
                if( this.onExit !== undefined ) this.onExit();
                this.canDetect = true;
        }

        if( drawGizmos == true )
            Draw.Circuference( this.point, this.radius, color || Color.ESMERALD );
    }
}

export class SquareHit {
    point:{x:number,y:number} = {x:0,y:0};
    size :{x:number,y:number};

    canDetect:boolean = true;
    outTrigger:boolean = false;

    onTrigger:Function; // Play on trigger collision
    onInside :Function; // Play while is inside collision
    onExit   :Function; // Play when exit the collision

    constructor( size:{x:number,y:number}, TriggerAction?:Function, InsideAction?:Function, ExitAction?:Function ) {
        this.size = size;

        // Functions Realized on Collision
        this.onTrigger = TriggerAction;
        this.onInside  = InsideAction ;
        this.onExit    = ExitAction   ;
    }

    gizmos( color?:string ):void {
        Draw.BordRectangle( this.point, this.size, color || Color.ESMERALD );
        Draw.Circle( {x: this.point.x+(this.size.x/2),y: this.point.y+(this.size.y/2) }, 3, Color.RUBY );
        Draw.Circle( {x: this.point.x-(this.size.x/2),y: this.point.y+(this.size.y/2) }, 3, Color.RUBY );
        Draw.Circle( {x: this.point.x+(this.size.x/2),y: this.point.y-(this.size.y/2) }, 3, Color.RUBY );
        Draw.Circle( {x: this.point.x-(this.size.x/2),y: this.point.y-(this.size.y/2) }, 3, Color.RUBY );
    }

    update( self:Vector2, target?:SquareHit, drawGizmos?:boolean ):void {
        // Update Parameters
        this.point = self;
        let color:string = Color.ESMERALD;
        if( target != undefined ) {

    if( this.point.x - (this.size.x/2) < target.point.x + (target.size.x/2) &&
        this.point.x + (this.size.x/2) > target.point.x - (target.size.x/2) &&
        this.point.y - (this.size.y/2) < target.point.y + (target.size.y/2) &&
        this.point.y + (this.size.y/2) > target.point.y - (target.size.y/2) ) {
            // Collision Detected
            color = Color.RUBY;
            if( this.canDetect == true ) {
                if( this.onTrigger != undefined )    this.onTrigger();
                if( target.onTrigger != undefined )  target.onTrigger();
                this.canDetect = false;
            } else {
                if( this.onInside != undefined )    this.onInside();
                if( target.onInside != undefined )  target.onInside();
            }
        } else {
            if( this.canDetect == false ) {
                if( this.onExit !== undefined ) this.onExit();
                this.canDetect = true;
            }
        }
        }

        if( drawGizmos == true ) this.gizmos( color );
    }
}