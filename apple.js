class Apple{
    constructor( width, height){
        this.xPos = Math.floor(Math.random()* canvas.width);
        this.yPos = Math.floor(Math.random()* canvas.height);
        this.width = grid;
        this.height = grid;
    }
    draw(ctx){
        // console.log("draw apple");
        let B_image = new Image ();
        B_image.src = '../char/D_char.png';
        ctx.drawImage(B_image, this.xPos, this.yPos,this.width,this.height);
    }
    update(player){
        let distance  = Math.hypot(player.xPos-this.xPos, player.yPos-this.yPos);

        // console.log(distance);
        if (distance < 30){
            this.xPos = Math.floor(Math.random()* canvas.width);
            this.yPos = Math.floor(Math.random()* canvas.height);
        }
    }
}
