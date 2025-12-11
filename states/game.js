import { Star } from "../assets/background.js"
import { Player } from "../assets/player.js"
import { Enemy } from "../assets/enemy.js";
import { laserPlayer } from "../assets/laserPlayer.js";
import { laserEnemy } from "../assets/laserEnemy.js";
export class Game {
    canvas;
    pencil;
    newStar;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
        this.star = new Star(this.pencil, this.canvas);
        this.player = new Player(this.pencil, this.canvas);
        this.enemy = new Enemy(this.pencil, this.canvas);
        this.laserEnemy = new laserEnemy(this.pencil, this.canvas);

        //enemy additon area
        
    }

    //star section
    stars = []
    howManyStars = 100

    //draw black space for star visibility
    drawSpace(){
        this.pencil.fillStyle = 'black'
        this.pencil.fillRect(0,0,this.canvas.width, this.canvas.height)
    }


    //into the index they go
    pushStars(){
        for(let i=0; i < this.howManyStars; i++){
            this.newStar = new Star(this.pencil, this.canvas)
            this.stars.push(this.newStar)
        }
    }


    //into the fire they go (movement for stars in background)
    moveStars(){
        for(let i=0; i < this.howManyStars; i++){
            // console.log(this.star.sizeMult)
            this.stars[i].move()
            this.stars[i].draw()
            this.stars[i].tryRecycle()
        }
    }




    missles = []
    maxMissles = 1

    //into the index they go
    pushMissles(){
        
        this.newMissle = new laserPlayer(this.pencil, this.canvas, this.player, this.enemy)
        this.missles.push(this.newMissle)
        this.newMissle.shoot()
    }


    //into the fire they go (movement for stars in background)
    moveMissles(){
        for(let i=0; i < this.missles.length; i++){
            // console.log(this.star.sizeMult)
            this.missles[i].movePlayerLaser()
            // this.missles[i].drawPlayerLaser()
            console.log("moved")
        }
    }
    

//game gode

    onKeyPressed(event) {

        let isSpacePressed = event.key == " "

        if(isSpacePressed){
            
            
            this.pushMissles()
            
           
            console.log(this.missles)
            
        }
    }


    
    //big chillin gameloop code
    update(){
        //stars
        this.drawSpace();
        this.pushStars();
        this.moveStars();
        //player and enemy(ies)
        this.moveMissles()
        this.player.drawPlayer();
        this.enemy.drawEnemy();

        this.enemy.moveEnemyRight();
        
        //player laser
        
        
        

    }

    
}