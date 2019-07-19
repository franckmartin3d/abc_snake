class Applemanager{
    constructor(Apple){

    }
    spawnApple(){
        let xmax = canvas.width;
        let ymax = canvas.height;

        let randomx = Math.floor(Math.random()* xmax);
        let randomy =  Math.floor(Math.random()* ymax);
        let apple1;
        apple1 = new Apple(randomx, randomy, grid , grid);
        apple1.draw(ctx);
    }
    contact(){
        //check contact with snake position
        
    }
}

class Apple{
    constructor(xPos, yPos, width, height){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
    }
    draw(ctx){
        let B_image = new Image ();
        B_image.src = '../char/B_char.png';
        
        ctx.drawImage(B_image, this.xPos, this.yPos,this.width,this.height);
    }

    
}

