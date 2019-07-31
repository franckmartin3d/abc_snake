class Apple{
    constructor( width, height){
        this.xPos = Math.floor(Math.random()* canvas.width);
        this.yPos = Math.floor(Math.random()* canvas.height);
        this.width = grid;
        this.height = grid;
        this.appleCounter = 0;
    
    }
    draw(ctx,alphabet){
        // console.log("draw apple");
        let apple_image = new Image ();
        apple_image.src = alphabet.activeIcon;
        // debugger;
        ctx.drawImage(apple_image, this.xPos, this.yPos,this.width,this.height);
    }
    update(snake, alphabet, ctx){
        let distance  = Math.hypot(snake.snakebody[0].x - this.xPos, snake.snakebody[0].y - this.yPos);

        // Update with collision
        if (distance < grid){
            this.xPos = this.getRandomInt((0 + grid), (canvas.width - grid));
            this.yPos = this.getRandomInt((0 + grid), (canvas.height- grid));

        // trigger a snake child
            // console.log(' Colission thick');
            snake.children += 1;
            // console.log('children : ' + player.children);
            snake.grow(ctx,alphabet)



        // apple counter
            this.appleCounter +=1;

        // update alphabetr class
            alphabet.Collectedletters +=1;
            console.log('collected letters' + alphabet.Collectedletters);
        }
        
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min ; //The maximum is exclusive and the minimum is inclusive
      }
}
