
//Setup
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');

//setup variable
let grid = 30; // not sure where to put it
let player = new Snake(canvas.width/2, canvas.height/2, 1, 0, grid, grid, 15);
let manage = new Applemanager();



// Game loop
function frame(player){
    input();
    updateEverything();
    render();
    requestAnimationFrame(frame); // request the next frame
}

requestAnimationFrame(frame);//start with first frame

//input goes in here
function input(){
    player.input();
    
}

// Update function in this ie: move points player.
function updateEverything(){
    player.movement();
}

//draw all the stuff in this function
function render(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    manage.spawnApple(ctx);
    

}




//// Helper function


