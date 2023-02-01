//? Space and Math
export type  Vector2 = {x:number, y:number};
export const Vector2:Function = ( x?:number,y?:number ) => { return {x:x||0,y:y||x}; }
export const MutVec2:Function = ( vec:Vector2,mut:number ) => { return Vector2(vec.x*mut,vec.y*mut); }
export const SumVec2:Function = ( vec:Vector2,sum:number ) => { return Vector2(vec.x+sum,vec.y+sum); }

export type  Vector4 = { x:number, y:number, w:number, z:number }
export const Vector4:Function = ( x:number,y:number,w:number,z:number ) => { return {x:x,y:y,w:w,z:z}; }

export type Font =
/*   Serif    */ 'Times New Roman'|'Georgia'|'Garamond'|
/* Sans-serif */ 'Arial'|'Verdana'|'Helvetica'|
/* Monospace  */ 'Courier New'|'Lucida Console'|'Monaco'|
/*  Cursive   */ 'Lucida Handwriting'|'Brush Script MT'|
/*  Fantasy   */ 'Copperplate'|'Papyrus'|
/*  Perfect   */ 'Comic Sans MS' ;