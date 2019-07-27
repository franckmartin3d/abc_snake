// class of the snake
class Snake {
    constructor(xPos, yPos, xVelo, yVelo, width, height, speed, alphabet) {
        //Tail
        this.tailArray = [{
            path: alphabet.activeIcon,
            x: this.xPos,
            y: this.yPos
        }, ];

        this.children = 0;
        this.head;

        //original
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelo = xVelo;
        this.yVelo = yVelo;
        this.width = width;
        this.height = height;
        this.speed = speed;

    }
    define(alphabet) {
        // update tailarray[0]
        //set head
        this.head = {
            path: alphabet.activeIcon,
            x: this.xPos,
            y: this.yPos
        }
        this.tailArray[0] = this.head;
    }

    draw(ctx) {
        // image
        // need to change letter so get pass letter from letter choosers
        for (let i = 0; i < this.tailArray.length; i++) {
            const element = this.tailArray[i];
            let a_image = new Image();
            a_image.src = '../char/S_char.png';
            ctx.drawImage(a_image, this.tailArray[i].x, this.tailArray[i].y, this.width, this.height);
        }
        //draw a children

    }
    position(x, y) {
        this.xPos = x
        this.yPos = y
    }


    direction(x, y) {
        //helper methos that set the direction of the
        this.xVelo = x;
        this.yVelo = y;
    }
    movement() {

        this.xPos += (this.xVelo * this.width) / this.speed;
        this.yPos += (this.yVelo * this.height) / this.speed;

        // hitting the side in x
        if (this.xPos > canvas.width) {
            this.xPos -= canvas.width;
        } else if (this.xPos < 0) {
            this.xPos += canvas.width;
        }

        //hitting the side in y
        if (this.yPos > canvas.height) {w
            this.yPos -= canvas.height;
        } else if (this.yPos < 0) {
            this.yPos += canvas.height;
        }

        // update all instance
        // for (let i = 0; i < this.tailArray.length; i++) {
            this.tailArray[0].x = this.xPos;
            this.tailArray[0].y = this.yPos;

        // }

        // console.log(this.bodyX[0]);s
    }


    //grow
    grow(ctx, alphabet) {


        //copy head
        let headCopy = this.tailArray[0];
        this.tailArray.shift;
        //add the 1copied head to the array
        this.tailArray.push(headCopy);
        // debugger;
        // result of 2 original heads

        // for (let i = 0; i < this.tailArray.length; i++) {
        //     console.log("tailarray: " + this.tailArray[i].path);
        //     console.log("tailarray: " + this.tailArray[i].x);
        //     console.log("tailarray: " + this.tailArray[i].y);


        // }

    }

    input() {
        // get input and set direction using helper method direction
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
}