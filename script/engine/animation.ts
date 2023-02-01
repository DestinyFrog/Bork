import { Vector2, Vector4 } from "./forms.js";
import { Draw } from "./graphics.js";

// Animation
export const animSpr = (x:number,y:number,X:number,Y:number,t?:number) => {
    return {x:x,y:y,X:X,Y:Y,t:(t||0)}
}

export const animInfo = (f:Function,t?:number) => {
    return {f:f,t:(t||0)} };

export class Anima {
    sheet:any;
    frame:Function;
    animation:any;

    count:number = 0;
    index:number = 0;

    constructor( sheet:JSON, start?:string ) {
        this.sheet = sheet;
        this.animation = this.sheet[ start || 'idle' ] ;
        this.frame = this.animation[ this.index ];
    }

    changeAnimation( animationName:string ):void {
        this.animation = this.sheet[ animationName ] ;
    }

    draw():void {
        if( this.count >= this.frame['t'] ){
            this.count = 0;
            if( this.index >= this.animation.length-1 ){
                this.index = 0;
            }else{ this.index++; }
            this.frame = this.animation[ this.index ];
        }else{
            this.count++;
        }

        this.frame['f']();
    }
}
export class AnimaSprite {
    adress:string;
    sheet:any;
    frame:string;
    animation:any;

    count:number = 0;
    index:number = 0;

    constructor( adress:string, sheet:JSON, start?:string ) {
        this.adress = adress;
        this.sheet = sheet;
        this.animation = this.sheet[ start || 'idle' ] ;
        this.frame = this.animation[ this.index ];
    }

    changeAnimation( animationName:string ):void {
        this.animation = this.sheet[ animationName ] ;
    }

    draw( pos:Vector2 ):void {
        if( this.count >= this.frame['t'] ){
            this.count = 0;
            if( this.index >= this.animation.length-1 ){
                this.index = 0;
            }else{ this.index++; }
            this.frame = this.animation[ this.index ];
        }else{
            this.count++;
        }

        Draw.Sprite(
        /* sprite adress   */   this.adress, 
        /* position screen */   pos, 
        /* size general    */   Vector2( this.sheet['size']['x'], this.sheet['size']['y'] ),
        /* crop sprite     */   Vector4( this.frame['x'], this.frame['y'], this.frame['x']+this.frame['X'], this.frame['y']+this.frame['Y']) 
        );
    }
}