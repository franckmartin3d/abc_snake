class Tail {
    constructor(player, alphabet) {
        this.tailArray = [{
            path: alphabet.activeIcon,
            x: player.xPos,
            y: player.yPos

        }, ];
        this.head;
        this.child = 0;

    }

    setHead(player, alphabet) {
        this.head = {
            path: alphabet.activeIcon,
            x: player.xPos,
            y: player.yPos
        }
        this.tailArray[0] = this.head;


    }

    test() {
        // testing passing the head position
        // console.log(this.head.x);
        // console.log(this.head.y);

        //test tail array 0
        console.log('activeIcon path: ' + this.tailArray[0].path);
        console.log('tailarray x:' + this.tailArray[0].x);
        console.log('tailarray y:' + this.tailArray[0].y);

        // console.log('this is the array' + this.tailArray);
    }


    setTail(player) {
        // update the tail array
        this.tailArray.shift()
        //Copy array 0 
        let headCopy = this.tailArray[this.tailArray.length - 1];

        // add another element
        this.tailArray.push(headCopy)

        // shuffle array
    }

    grow(alphabet) {

        let temp = {
            path: alphabet.activeIcon,
            x: 0,
            y: 0
        };
        this.child++;
        this.tailArray.push(temp);
    }

    update() {
        this.setHead(player, alphabet);
        
   }
    drawTail(ctx) {



        for (let i = 0; i < this.tailArray.length; i++) {
            let element = this.tailArray[i];
            ctx.fillStyle = 'black';
            ctx.fillRect(this.tailArray[i].xPos,this.tailArray[i].yPos, 50, 50);




        // console.log('tail lenght: ' + this.tailArray.length);
        // console.log("tailarray" + this.tailArray);
   
        //     this.colorRect(0, 0, 10 , 10 ,'black');
            // console.log('draw image ' + this.tailArray[i].path)
            // let element_image = new Image ();
            // element_image.src = this.tailArray[i].ewpath;
            // ctx.drawImage(element_image, this.tailArray[i].xPos, this.tailArray[i].yPos,30,30);

        }
    }

   
}s
