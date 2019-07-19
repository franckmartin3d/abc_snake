//Setup
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');



// Game loop
function frame(){
    input();
    updateEverything();
    render();
    requestAnimationFrame(frame); // request the next frame
}

requestAnimationFrame(frame);//start with first frame

//input goes in here
function input(){

}

// Update function in this ie: move points player.
function updateEverything(){

}

//draw all the stuff in this function
function render(){

    //image test
    var a_image = new Image ();

    a_image.onload = function(){
        ctx.drawImage(a_image, 50, 0,30,30);
    };
    a_image.src = 'A_test.jpg';
}




