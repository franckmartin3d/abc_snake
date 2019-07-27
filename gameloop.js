
//Setup canvas
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');
var fps = 60;

var canvasActiveWord = document.getElementById('currentWord');
var ctxActiveWord = canvasActiveWord.getContext('2d');

var canvasNextNumber = document.getElementById('number');
var ctxNextNumber = canvasNextNumber.getContext('2d');

var canvasWordList = document.getElementById('wordList');
var ctxWordList = canvasWordList.getContext('2d');

var canvasNextLetter = document.getElementById('next');
var ctxNextLetter = canvasNextLetter.getContext('2d');

//setup instance
let grid = 60; // not sure where to put it

let apple = new Apple(0, false);
let alphabet = new Alphabet(['apple', 'bubble'],'apple',[1],'test' );
let player = new Snake(400, 400, 1, 0, grid, grid, 15,0, alphabet);

//New Gameloop
function gameloop(player, apple ,alphabet,) {
    setTimeout(function() {
        input();
        updateApple();
        updateAlphabet();
        updatePlayer();
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
    player.define(alphabet)
    player.movement();
    // tail.update(player.xPos, player.yPos, alphabet.activeIcon);

   
    
   
    
}
function updateApple(){
    // all apple class update goes here
    apple.update(player,alphabet,ctx);
}
function updateAlphabet(){
    // alphabet class update goes here
    alphabet.update(player.children,apple);
    
    

}
//draw all the stuff in this functiond
function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);  
    apple.draw(ctx,alphabet);
    alphabet.drawActiveWord(ctxActiveWord);
    alphabet.drawNumberLetter(ctxNextNumber);
    alphabet.drawWordList(ctxWordList);
    alphabet.drawNextLetter(ctxNextLetter);
   

}





