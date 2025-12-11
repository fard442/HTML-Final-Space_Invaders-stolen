import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Toolbox } from "../toolbox.js";
export class laserPlayer {
    x=200;
    y=200;
    width=50;
    height=75;
    velocity;
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
        this.y = this.player.y + 100;
        this.isFired = true;

    }
    // this.drawPlayerLaser();

    update () {
        if(this.isFired) {
            this.player.pencil.drawImage(playerLaser, this.x, this.y, this.width, this.height);
            this.y -= 5;
        }


    }

}