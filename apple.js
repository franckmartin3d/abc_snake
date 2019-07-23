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
    update(player, alphabet){
        let distance  = Math.hypot(player.xPos-this.xPos, player.yPos-this.yPos);

        // Update with collision
        if (distance < grid){
            this.xPos = Math.floor(Math.random()* canvas.width);
            this.yPos = Math.floor(Math.random()* canvas.height);

        // trigger a snake child
            console.log(' Colission thick');
            player.children += 1;
            console.log('children : ' + player.children);

        // apple counter
            this.appleCounter +=1;

        // update alphabetr class
            alphabet.Collectedletters +=1;
            console.log('collected letters' + alphabet.Collectedletters);
        }
    }
}
