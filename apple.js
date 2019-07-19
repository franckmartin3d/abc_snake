class Applemanager{
    constructor(){

    }
    spawnApple(){
        //Spawn an apple at randonm position
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
        let a_image = new Image ();
        B_image.src = '../char/B_char.jpg';
        ctx.drawImage(a_image, this.xPos, this.yPos,this.width,this.height);
    }

    
}

