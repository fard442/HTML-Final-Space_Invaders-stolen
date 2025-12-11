import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Toolbox } from "../toolbox.js";
export class laserEnemy {
    x;
    y;
    width=50;
    height=75;
    velocity=-3;

    constructor(pencil, canvas, player, enemy){
        this.pencil = pencil;
        this.canvas = canvas;
        this.player = player;
        this.enemy = enemy;
        this.toolbox = new Toolbox();
    }
    enemyLaserModel = document.getElementById("enemyLaser")







    shoot(){
        
        this.x = this.enemy.x + 70;
        this.y = this.enemy.y + 25;
        this.isFired = true;
        // console.log("shot")

    }
    // this.drawPlayerLaser();
    drawEnemyLaser(){
        this.pencil.drawImage(enemyLaser, this.x, this.y, this.width, this.height);
    }

    moveEnemyLaser(){
        this.drawEnemyLaser();
        this.y -= this.velocity;
        
    }

    
}