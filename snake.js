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


        //event listener input
        document.addEventListener('keydown', event => {
            // up
            switch (event.keyCode) {
                // move up
                case 87:
                    this.direction(0, -1);
                    break;

                    // move down
                case 83:
                    this.direction(0, 1);
                    break;

                    //lefT
                case 65:
                    this.direction(-1, 0);
                    break;
                    //right
                case 68:
                    this.direction(1, 0);
                    break;

            }
        });

    }


    draw(ctx) {
        // image
        // need to change letter so get pass letter from letter choosers
        for (let i = 0; i < this.snakebody.length; i++) {
            const element = this.snakebody[i];
            let a_image = new Image();
            a_image.src = '../char/S_char.png';
            ctx.drawImage(a_image, this.snakebody[i].x, this.snakebody[i].y, this.width, this.height);
        }
        //draw a children

    }
    direction(x, y) {
        //helper methos that set the direction of the
        this.xVelo = x;
        this.yVelo = y;
    }

    move() {
        //creating a copy
        let snakeCopy = [];

        for (let i = 0; i < this.snakebody.length; i++) {
            const part = Object.assign({}, this.snakebody[i]);
            snakeCopy.push(part);
            
        }


        //move snake head
        this.snakebody[0].x += (this.xVelo * this.width) / this.speed;
        this.snakebody[0].y += (this.yVelo * this.height) / this.speed;

        //move snake body

        for (let i = 1; i < this.snakebody.length; i++) {
            this.snakebody[i].x =  snakeCopy[i - 1].x ;
            this.snakebody[i].y = snakeCopy[i - 1].y ; 
    
            }

        // hitting the side in x
        if (this.snakebody[0].x > canvas.width) {
            this.snakebody[0].x -= canvas.width;
        } else if (this.xPos < 0) {
            this.snakebody[0].x += canvas.width;
        }

        //hitting the side in y
        if (this.snakebody[0].y > canvas.height) {
            
            this.snakebody[0].y -= canvas.height;
        } else if (this.yPos < 0) {
            this.snakebody[0].y += canvas.height;
        }

        // update all instance
  

        // console.log(this.bodyX[0]);s
    }


    //grow
    grow(ctx, alphabet) {
        // create a new object (copy head)
        const newSnakePart = Object.assign({}, this.snakebody[0]);

        // not sure why we do this
        this.snakebody[0].x += (this.xVelo * this.width) ;
        this.snakebody[0].y += (this.yVelo * this.height);

        this.snakebody.unshift(newSnakePart);




        // Me code

        // let headCopy = this.snakebody[0];
        // this.snakebody.shift;
        // this.snakebody.push(headCopy);
       

    }


}