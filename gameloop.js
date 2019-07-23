
//Setup
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');
var fps = 60;

//setup variable
let grid = 60; // not sure where to put it
let player = new Snake(canvas.width/2, canvas.height/2, 1, 0, grid, grid, 15,0);
let apple = new Apple(0, false);
let alphabet = new Alphabet(['apple', 'bubble'],'apple',[1],'test' );

//New Gameloop
function gameloop(player, apple ,alphabet) {
    setTimeout(function() {
        input();
        updatePlayer();
        updateApple();
        updateAlphabet();
        render()

      requestAnimationFrame(gameloop);
    }, 1000 / fps);
  }
gameloop();

function input(){
    //input goes in here

    player.input();
}

function updatePlayer(){
    // Update function in this ie: move points player.

    player.movement();
   
    
}
function updateApple(){
    // all apple class update goes here
    apple.update(player,alphabet);
}
function updateAlphabet(){
    // alphabet class update goes here
    alphabet.update(player.children,apple);
    

}
//draw all the stuff in this function
function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);  
    apple.draw(ctx,alphabet);
}

// Game loop
// function frame(player){
//     input();
//     updateEverything();
//     render();
//     requestAnimationFrame(frame); // request the next frame
// }

// requestAnimationFrame(frame);//start with first frame




