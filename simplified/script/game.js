import { Vector2 } from './forms.js';
import { Color, Draw } from './graphics.js';
export var game = {}
game["WIDTH"] = 300
game["HEIGHT"] = game["WIDTH"]
game["FPS"] =   4
game["MID"] = Vector2( game["WIDTH"]/2 )
game["STANDARD"] = {}
game["STANDARD"]["color"] = "#000000"
game["STANDARD"]["width"] = 2
game["STANDARD"]["font"] = "Comic Sans MS"
game["STANDARD"]["fontSize"] = 24
game["STANDARD"]["align"] = "center"
game["STANDARD"]["baseLine"] = "middle"
game["gameObjects"] = {}
game["gameObjects"]["background"] = {}
game["gameObjects"]["background"]["color"] = Color["ICE"];
game["gameObjects"]["background"]["draw"] = o => { Draw["Background"]( o["color"] ) }
game["gameObjects"]["chicken"] = {}
game["gameObjects"]["chicken"]["pos"] = game["MID"]
game["gameObjects"]["chicken"]["dir"] = Vector2( 0 )
game["gameObjects"]["chicken"]["speed"] = 1
game["gameObjects"]["chicken"]["size"] = Vector2( 64 )
game["gameObjects"]["chicken"]["sprite"] = ["player.png"]
game["gameObjects"]["chicken"]["draw"] = o => {
    o["pos"].x += o["dir"].x * o["speed"]
    o["pos"].y += o["dir"].y * o["speed"]
    Draw.Sprite( o["sprite"][0], o["pos"], o["size"] )
}
