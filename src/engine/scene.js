export class Scene {
    constructor(objects) {
        this.GameObjects = [];
        this.press = undefined;
        this.unpress = undefined;
        this.GameObjects = objects || [];
    }
    run() {
        this.GameObjects.forEach(obj => {
            if (obj.object.update != undefined)
                obj.object.update();
        });
    }
    add(object) {
        this.GameObjects.push(object);
    }
    findByName(name) {
        var ob = undefined;
        this.GameObjects.forEach(obj => {
            if (obj.name == name)
                (ob = obj);
        });
        return ob;
    }
    findByTag(tag) {
        var arr = [];
        this.GameObjects.forEach(obj => {
            if (obj.tag == tag)
                arr.push(obj);
        });
        return arr;
    }
}
