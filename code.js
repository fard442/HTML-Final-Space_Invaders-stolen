import { Game } from "./states/game.js"
import { GameOver } from "./states/gameOver.js"
import { GameWin } from "./states/gameWin.js"
import { Title } from "./states/title.js"
import { Toolbox } from "./toolbox.js"
import { laserPlayer } from "./assets/laserPlayer.js"
import { laserEnemy } from "./assets/laserEnemy.js"




let canvas = document.getElementById("myCanvas")
let pencil = canvas.getContext("2d")
pencil.imageSmoothingEnabled = false;

let toolbox = new Toolbox()



let game = new Game(canvas, pencil)
let gameOver = new GameOver(canvas, pencil)
let gameWin = new GameWin(canvas, pencil)
let title = new Title(canvas, pencil)

let state = title
game.enter()



// console.log(playerLaser)


function gameLoop(){

    pencil.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    let command = state.update()
    
    if(command == "title"){
        state = title
    }
    if(command == "gameover"){
        state = gameOver
    }
    if(command == "game"){
        game.enter()
        state = game
    }
    if(command == "gameWin"){
        state = gameWin
    }

    //sets player y low
    game.player.y = canvas.clientHeight - 100

    //checks player on edges
    if (game.player.x + 50 > canvas.clientWidth + 75){
        game.player.x = canvas.clientWidth - canvas.clientWidth;
    } 
    if (game.player.x - 50 < canvas.clientWidth - 650){
        game.player.x = canvas.clientWidth;
    }

    //checks enemy on edge
    if (game.enemy.x > canvas.clientWidth){
        game.enemy.x = canvas.clientWidth - canvas.clientWidth - 110;
    } 
    

    

}

//controls for player
function onKeyPressed(event){
    let isLeftPushed = event.key == "a"
    let isRightPushed = event.key == "d"
    let isRightArrowPushed = event.key == "ArrowRight"
    let isLeftArrowPushed = event.key == "ArrowLeft"
    let killBind = event.key == "k"
    let winBind = event.key == "w"
   
    if(killBind){
        state = gameOver
    }

    if(winBind){
        state = gameWin
    }
    

    if(isLeftPushed || isLeftArrowPushed){
        // game.player.pencil.clearRect(game.player.x, game.player.y, game.player.width, game.player.height)
        game.player.moveLeft();
        game.player.drawPlayer();
    } else if (isRightPushed || isRightArrowPushed){
        // game.player.pencil.clearRect(game.player.x, game.player.y, game.player.width, game.player.height)
        game.player.moveRight();
        game.player.drawPlayer();
    }

    state.onKeyPressed(event)

    
}

document.addEventListener("keydown", onKeyPressed);

setInterval(gameLoop, 1000 / 60)

