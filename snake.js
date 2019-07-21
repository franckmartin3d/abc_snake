// class of the snake
class Snake{
    constructor(xPos, yPos , xVelo, yVelo , width, height ,speed, total){
        //Tail
        this.bodyX = [];
        this.bodyY = [];
        this.bodyX[0] = this.xPos;
        this.bodyY[0] = this.yPos;
        this.children = 0;

        //original
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
        a_image.src = '../char/E_char.png';
        ctx.drawImage(a_image, this.bodyX[0], this.bodyY[0],this.width,this.height);

        //draw a children

       
    }
    position(x,y){
        this.xPos = x
        this.yPos = y
    }
       

    direction(x, y){
        //helper methos that set the direction of the
        this.xVelo = x;
        this.yVelo = y;
    }
    movement(){

        this.xPos += (this.xVelo * this.width) / this.speed;
        this.yPos += (this.yVelo * this.height) /  this.speed;

        // hitting the side in x
        if (this.xPos > canvas.width){
            this.xPos  -= canvas.width; 
        }else if( this.xPos < 0 ){
            this.xPos += canvas.width; 
        }

        //hitting the side in y
        if (this.yPos > canvas.height){
            this.yPos  -= canvas.height; 
        }else if( this.yPos < 0 ){
            this.yPos += canvas.height; 
        }
        this.bodyX[0] = this.xPos
        this.bodyY[0] = this.yPos
        // console.log(this.bodyX[0]);
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
    eat(apple){
        // when snakes eats apple and grows.
        let distance  = Math.hypot((apple.xPos - this.bodyX[0]) - (grid*2), (apple.yPos - this.bodyY[0])) - (grid*2);
        if (distance < grid*2){
            console.log('apple was eaten');
            // this.children ++;
            this.children += 1;
            return true;
            
        }
         console.log(this.children);
    }
    spawn(){
        let head = this.bodyX
    }

    collision(){
        // When snake collides with itself.
    }

}
