export interface gameObject {
    name?: string,
    tag?:  string,
    object: any
}

export class Scene {
    GameObjects:gameObject[] = [];
    press:Object|undefined = undefined;
    unpress:Object|undefined = undefined;

    constructor( objects?:gameObject[] ) {
        this.GameObjects = objects || [];
    }

    run():void {
        this.GameObjects.forEach( obj => {
            if ( obj.object.update != undefined )
                obj.object.update();
        })
    }

    add( object:gameObject ):void {
        this.GameObjects.push( object );
    }

    findByName( name:string ):gameObject|undefined {
        var ob = undefined;
        this.GameObjects.forEach( obj => {
            if( obj.name == name ) ( ob = obj );
        } )
        return ob;
    }

    findByTag( tag:string ):gameObject[]|undefined {
        var arr:gameObject[] = [];
        this.GameObjects.forEach( obj => {
            if( obj.tag == tag ) arr.push( obj );
        } )
        return arr;
    }
}