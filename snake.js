// class of the snake
class Snake {
    constructor(xPos, yPos, xVelo, yVelo, width, height, speed, alphabet) {
        //Tail

        this.snakebody = [{
            path: alphabet.activeIcon,
            x: xPos,
            y: yPos
        }, ];

        this.children = 0;


        //original

        this.xVelo = xVelo;
        this.yVelo = yVelo;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.movementplane ;


        //event listener input
        document.addEventListener('keydown', event => {
            // up
            switch (event.keyCode) {
                // move up
                case 87:
                    this.direction(0, -1, "Y");
                    break;

                    // move down
                case 83:
                    this.direction(0, 1 , 'Y');
                    break;

                    //lefT
                case 65:
                    this.direction(-1, 0, 'X');
                    break;
                    //right
                case 68:
                    this.direction(1, 0 ,'X');
                    break;

            }
        });

    }


    draw(ctx, alphabet) {
        // image
        // need to change letter so get pass letter from letter choosers

        for (let i = 0; i < this.snakebody.length; i++) {
            const element = this.snakebody[i];
            let a_image = new Image();
            a_image.src = this.snakebody[i].path;
            ctx.drawImage(a_image, this.snakebody[i].x, this.snakebody[i].y, this.width, this.height);
        }
        //draw a children

    }
    direction(x, y, movementplane) {
        //helper methos that set the direction of the
        this.xVelo = x;
        this.yVelo = y;
        this.movementplane = movementplane
    }

    move() {
        //creating a copy
        let snakeCopy = [];

        for (let i = 0; i < this.snakebody.length; i++) {
            const part = Object.assign({}, this.snakebody[i]);
            snakeCopy.push(part);
            
        }
        //move snake head
        this.snakebody[0].x += (this.xVelo * this.width)
        this.snakebody[0].y += (this.yVelo * this.height)

        //move snake body

        // to do refactor this
        for (let i = 1; i < this.snakebody.length; i++) {
            this.snakebody[i].x =  snakeCopy[i - 1].x ;
            this.snakebody[i].y = snakeCopy[i - 1].y; 
            }

        // hitting the side in x
        if (this.snakebody[0].x > canvas.width) {
            console.log("hitting left");
            this.snakebody[0].x -= canvas.width;
        } else if (this.snakebody[0].x < 0) {
            console.log("hitting right");
            this.snakebody[0].x += canvas.width;
        }

        //hitting the side in y
        if (this.snakebody[0].y > canvas.height) {
            
            this.snakebody[0].y -= canvas.height;
        } else if (this.yPos < 0) {
            this.snakebody[0].y += canvas.height;
        }

    }

    //grow
    grow(ctx, alphabet) {
        // create a new object (copy head)
        const newSnakePart = Object.assign({}, this.snakebody[0]);

        // add newparameter to snake head
        this.snakebody[0].x += (this.xVelo * this.width);
        this.snakebody[0].y += (this.yVelo * this.height);
        this.snakebody[0].path = alphabet.activeIcon;

        
        this.snakebody.unshift(newSnakePart);

       
        }
    
    collision(){
        // if the head colide with any part of body goes to game over


        if (this.snakebody.lenght > 3){
            let headX = this.snakebody[1].x;
            let HeadY = this.snakebody[1].y;

            for (let i = 3; i < this.snakebody.length; i++) {
                const part = this.snakebody[i];
                if (part.x == x && part.y == y){
                    console.log("collision detected");
                    return true;
                }

            }
        }
       
        return false;

    }    

}