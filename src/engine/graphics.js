import { WIDTH, HEIGHT } from "../game/game.js";
var ctx = document.getElementById('canvas').getContext('2d');
var common = {
    color: "#000000",
    width: 2,
    font: 'Arial',
    fontSize: 24,
    align: 'center',
    baseLine: 'middle'
};
export class Color {
}
Color.WHITE = "#FFFFFF";
Color.SOFTWHITE = "#DDDDDD";
Color.GRAY = "#AAAAAA";
Color.BLACK = "#000000";
Color.RED = "#FF0000";
Color.CARMINE = "#D70040";
Color.RUBY = "#E0115F";
Color.YELLOW = "#FFFF00";
Color.ORANGE = "#FF7700";
Color.MAROON = "#800000";
Color.PINK = "#FFC0CB";
Color.BLUE = "#0000FF";
Color.ICE = "#CEF5FA";
Color.DARKICE = "#AFCFE3";
Color.DARKBLUE = "#00007F";
Color.GREEN = "#00FF00";
Color.PLANGREEN = "#00D26A";
Color.GRASS = "#7EC850";
Color.NEONGREEN = "#AFE1AF";
Color.ESMERALD = "#50C878";
Color.JADE = "#00A36C";
Color.NYANZA = "#ECFFDC";
Color.RANDOM = () => {
    return "rgb(" +
        Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255)
        + ")";
};
export class Draw {
    static Background(color) {
        ctx.fillStyle = color || common.color;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
    static BordBackground(color, width) {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.strokeRect(0, 0, WIDTH, HEIGHT);
    }
    static Square(position, side, color) {
        ctx.fillStyle = color || common.color;
        ctx.fillRect(position.x - side / 2, position.y - side / 2, side, side);
    }
    static BordSquare(position, side, color, width) {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.strokeRect(position.x - side / 2, position.y - side / 2, side, side);
    }
    static Rectangle(position, size, color) {
        ctx.fillStyle = color || common.color;
        ctx.fillRect(position.x - (size.x / 2), position.y - (size.y / 2), size.x, size.y);
    }
    static BordRectangle(position, size, color, width) {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.strokeRect(position.x - (size.x / 2), position.y - (size.y / 2), size.x, size.y);
    }
    static Circle(position, radius, color) {
        ctx.fillStyle = color || common.color;
        ctx.beginPath();
        ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    static Circuference(position, radius, color, width) {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.beginPath();
        ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    static Line(start, end, color, width) {
        ctx.strokeStyle = color || common.color;
        ctx.lineWidth = width || common.width;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }
    static Write(position, message, size, color, font, align, base) {
        ctx.textBaseline = (base || "middle");
        ctx.textAlign = (align || "center");
        ctx.fillStyle = color || common.color;
        ctx.font = ((size || common.fontSize).toString()) + "px " + (font || common.font);
        ctx.fillText(message, position.x, position.y);
    }
    static BordWrite(position, message, size, color, width, font, align, base) {
        ctx.textBaseline = (base || "middle");
        ctx.textAlign = (align || "center");
        ctx.lineWidth = width || common.width;
        ctx.strokeStyle = color || common.color;
        ctx.font = ((size || common.fontSize).toString()) + "px " + (font || common.font);
        ctx.strokeText(message, position.x, position.y);
    }
    static Sprite(adress, position, size, cut, smooth) {
        const spr = new Image();
        spr.src = "./image/" + adress;
        ctx.imageSmoothingEnabled = smooth || false;
        if (cut == undefined) {
            ctx.drawImage(spr, (position.x - size.x / 2), (position.y - size.y / 2), size.x, size.y);
        }
        else {
            ctx.drawImage(spr, cut.x, cut.y, size.x, size.y, position.x - size.x / 2, position.y - size.y / 2, size.x, size.y);
        }
    }
}
