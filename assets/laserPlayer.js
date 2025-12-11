import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Toolbox } from "../toolbox.js";
export class laserPlayer {
    x=200;
    y=200;
    width=50;
    height=75;
    velocity=5;
    pencil;
    canvas;

    isFired = false;

    constructor(pencil, canvas, player, enemy){
        this.pencil = pencil;
        this.canvas = canvas;
        this.player = player;
        this.enemy = enemy;
        this.toolbox = new Toolbox();
    }
    playerLaserModel = document.getElementById("playerLaser")
    

    shoot(){
        // if ( == ){
        //     console.log("44")
        // }
        // console.log("worked");
        // console.log(this);

        this.x = this.player.x + 23;
        this.y = this.player.y;
        this.isFired = true;
        console.log("shot")

    }
    // this.drawPlayerLaser();
    drawPlayerLaser(){
        this.pencil.drawImage(playerLaser, this.x, this.y, this.width, this.height);
    }

    movePlayerLaser(){
        this.drawPlayerLaser();
        this.y -= this.velocity;
        console.log("test")
    }

    update () {
        if(this.isFired) {
            this.movePlayerLaser()
            console.log("moving")
        }
        


    }

}