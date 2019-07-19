// class of the snake
class Snake{
    constructor(xPos, yPos , xVelo, yVelo , width, height ,speed){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelo = xVelo;
        this.yVelo = yVelo;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    draw(ctx){
        // draw the snake.

        // image
        // need to change letter so get pass letter from letter chooser
        let a_image = new Image ();
        a_image.src = '../char/B_char.png';
        ctx.drawImage(a_image, this.xPos, this.yPos,this.width,this.height);
       
    }
    direction(x, y){
        //helper methos that set the direction of the
        this.xVelo = x;
        this.yVelo = y;
    }
    movement(){
        this.xPos += (this.xVelo * this.width) / this.speed;
        this.yPos += (this.yVelo * this.height) /  this.speed;
    }

    input(){
        // get input and set direction using helper method direction
        document.addEventListener('keydown', event => {
                    // up
            switch (event.keyCode) {
                // move up
                case 38:
                    this.direction(0, -1);
                break;

                // move down
                case 40:
                    this.direction(0, 1);
                break;

                //lefT
                case 37:
                    this.direction(-1, 0);
                break;
                //right
                case 39:
                    this.direction(1, 0);
                break;

        }
    });
}
    grow(){
        // when snakes eats apple and grows.
    }

    collision(){
        // When snake collides with itself.
    }

}
