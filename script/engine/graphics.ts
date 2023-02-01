// imports
import { WIDTH, HEIGHT } from "../game/game.js";
import { Font, Vector2, Vector4 } from "./forms.js";

var ctx:CanvasRenderingContext2D = ( <HTMLCanvasElement> document.getElementById('canvas') ).getContext('2d');

// Characteristics
type Align = 'center'|'left'|'right'|'start'|'end';
type BaseLine = 'top'|'hanging'|'middle'|'alphabetic'|'ideographic'|'bottom';

// ! It changes the standard information
// ? If you don't set it on a 'Draw' method, the information below will be used
var common:{ color?:string,font?:Font,fontSize?:number,align?:Align,baseLine?:BaseLine,width?:number } = {
    color:      "#000000" ,
    width:      2 ,
    font :      'Arial' ,
    fontSize:   24,
    align:      'center',
    baseLine:   'middle'
};

// ? Color Library
export class Color {
    static WHITE    :string = "#FFFFFF";
    static SOFTWHITE:string = "#DDDDDD";
    static GRAY     :string = "#AAAAAA";
    static BLACK    :string = "#000000";
    static RED      :string = "#FF0000";
    static CARMINE  :string = "#D70040";
    static RUBY     :string = "#E0115F";
    static YELLOW   :string = "#FFFF00";
    static ORANGE   :string = "#FF7700";
    static MAROON   :string = "#800000";
    static PINK     :string = "#FFC0CB";
    static BLUE     :string = "#0000FF";
    static ICE      :string = "#CEF5FA";
    static DARKICE  :string = "#AFCFE3";
    static DARKBLUE :string = "#00007F";
    static GREEN    :string = "#00FF00";
    static PLANGREEN:string = "#00D26A";
    static GRASS    :string = "#7EC850";
    static NEONGREEN:string = "#AFE1AF";
    static ESMERALD :string = "#50C878";
    static JADE     :string = "#00A36C";
    static NYANZA   :string = "#ECFFDC";
    static RANDOM:Function = ():string => {
        return "rgb("+
            Math.floor(Math.random()*255) + ","+
            Math.floor(Math.random()*255) + ","+
            Math.floor(Math.random()*255)
        +")"
    }; 
}

// ? Draw Library
export class Draw {

    static Background( color?:string ):void {
        ctx.fillStyle = color || common.color;
        ctx.fillRect( 0,0,WIDTH,HEIGHT );
    }

    static BordBackground( color?:string, width?:number ):void {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.strokeRect( 0,0,WIDTH,HEIGHT );
    }

    static Square( position:Vector2,side:number,color?:string ):void {
        ctx.fillStyle = color || common.color;
        ctx.fillRect( position.x-side/2,position.y-side/2,side,side );
    }

    static BordSquare( position:Vector2,side:number,color?:string,width?:number ):void {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth =   width || common.width;
        ctx.strokeRect( position.x-side/2,position.y-side/2,side,side );
    }

    static Rectangle( position:Vector2,size:Vector2,color:string ):void {
        ctx.fillStyle = color || common.color;
        ctx.fillRect( position.x-(size.x/2),position.y-(size.y/2),size.x,size.y );
    }

    static BordRectangle( position:Vector2,size:Vector2,color?:string,width?:number ):void {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth =   width || common.width;
        ctx.strokeRect( position.x-(size.x/2),position.y-(size.y/2),size.x,size.y );
    }

    static Circle( position:Vector2,radius:number,color?:string ):void {
        ctx.fillStyle = color || common.color;
        ctx.beginPath();
        ctx.arc( position.x,position.y,radius,0,2*Math.PI );
        ctx.fill();
    }

    static Circuference( position:Vector2,radius:number,color?:string, width?:number ):void {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth =   width || common.width;
        ctx.beginPath();
        ctx.arc( position.x,position.y,radius,0,2*Math.PI );
        ctx.stroke();
    }

    static Line( start:Vector2, end:Vector2, color?:string, width?:number ):void {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth   = width || common.width;

        ctx.beginPath();
        ctx.moveTo( start.x, start.y );
        ctx.lineTo( end.x  , end.y   );
        ctx.stroke();
    }

    static Write( position:Vector2, message:string, size?:number, color?:string, font?:Font, align?:Align, base?:BaseLine ):void {
        ctx.textBaseline = ( <CanvasTextBaseline> base  || "middle" );
        ctx.textAlign =    ( <CanvasTextAlign>    align || "center" );

        ctx.fillStyle = color || common.color;
        ctx.font = ((size || common.fontSize).toString())+"px "+(font || common.font) ;
        ctx.fillText( message, position.x, position.y );
    }

    static BordWrite( position:Vector2, message:string, size?:number, color?:string, width?:number, font?:Font, align?:Align, base?:BaseLine ):void {
        ctx.textBaseline = ( <CanvasTextBaseline> base  || "middle" );
        ctx.textAlign =    ( <CanvasTextAlign>    align || "center" );

        ctx.lineWidth = width || common.width;
        ctx.strokeStyle = color || common.color;
        ctx.font = ((size || common.fontSize).toString())+"px "+(font || common.font) ;
        ctx.strokeText( message, position.x, position.y );
    }

    static Sprite( adress:string, position:Vector2, size:Vector2, cut?:Vector4, smooth?:boolean ):void {
        const spr = new Image();
        spr.src = "./image/" + adress;

        ctx.imageSmoothingEnabled = smooth || false;

        if( cut == undefined){
            ctx.drawImage( spr, 
                // position in screen
                (position.x - size.x/2),(position.y - size.y/2),
                size.x, size.y
            );
        }else{
        ctx.drawImage( spr,
        /* pos. in image  */ cut.x, cut.y,
        /* size in image  */ size.x,size.y,
        /* pos. in screen */ position.x - size.x/2,position.y - size.y/2,
        /* size in screen */ size.x,size.y);
        }
    }
}