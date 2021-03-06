class Alphabet {
    constructor(){

        this.wordlist = ['WebDev', 'Javascript','Focus', 'Coding'];
        this.activeWord = '';
        this.iconPathArray = [];
        this.activeIcon = 'char/HEAD_char.png';
        this.completedWord = 0;
        this.Collectedletters = 0;
        this.alphastart = false;
        this.activeWordChange = 0;

    }

    setActiveWord() {

        //set a random word as active
        // this.activeWord = this.wordlist[Math.floor(Math.random() * this.wordlist.length)];
        //  console.log('activeword:' + this.activeWord);
        this.activeWord = this.wordlist[this.completedWord];
    }

    setIconPathArray() {

        // Split active word into array
        // debugger;
        if(this.activeWord == undefined){
            this.isWinning();
        }
        else{
            this.activeWord = this.activeWord.toUpperCase();
        let activeWord_array = this.activeWord.split('');

        // list for icon path 
        let list = [{
                char: 'A',
                path: 'char/A_char.png'
            },
            
            {
                char: 'B',
                path: 'char/B_char.png'
            },
            {
                char: 'C',
                path: 'char/C_char.png'
            },
            {
                char: 'D',
                path: 'char/D_char.png'
            },
            {
                char: 'E',
                path: 'char/E_char.png'
            },
            {
                char: 'F',
                path: 'char/F_char.png'
            },
            {
                char: 'G',
                path: 'char/G_char.png'
            },
            {
                char: 'H',
                path: 'char/H_char.png'
            },
            {
                char: 'I',
                path: 'char/I_char.png'
            },
            {
                char: 'J',
                path: 'char/J_char.png'
            },
            {
                char: 'K',
                path: 'char/K_char.png'
            },
            {
                char: 'L',
                path: 'char/L_char.png'
            },
            {
                char: 'M',
                path: 'char/M_char.png'
            },
            {
                char: 'N',
                path: 'char/N_char.png'
            },
            {
                char: 'O',
                path: 'char/O_char.png'
            },
            {
                char: 'P',
                path: 'char/P_char.png'
            },
            {
                char: 'Q',
                path: 'char/Q_char.png'
            },
            {
                char: 'R',
                path: 'char/R_char.png'
            },
            {
                char: 'S',
                path: 'char/s_char.png'
            },
            {
                char: 'T',
                path: 'char/T_char.png'
            },
            {
                char: 'U',
                path: 'char/U_char.png'
            },
            {
                char: 'V',
                path: 'char/V_char.png'
            },
            {
                char: 'W',
                path: 'char/W_char.png'
            },
            {
                char: 'X',
                path: 'char/X_char.png'
            },
            {
                char: 'Y',
                path: 'char/Y_char.png'
            }, {
                char: 'Z',
                path: 'char/Z_char.png'
            },

        ];

        // iterate over activeword_array element
        activeWord_array.forEach(element => {
            // console.log(element);

            list.forEach(letter => {
                if (element == letter.char) {
                    // console.log(letter.path);
                    // debugger;
                    this.iconPathArray.push(letter.path);
                }
                // console.log(letter.path);

            });

        });
        }
        
    }
    setActiveIcon(){
        //set the id of the iconpath
        this.activeIcon = this.iconPathArray[this.Collectedletters];
    }
    update(){
        //run all required function in gameloop
     // console.log(this.alphastart);
        if (this.alphastart == false){
            this.setActiveWord();
            this.activeWordChange += 1;
            // 
            
            this.setIconPathArray();
            this.setActiveIcon();
            this.alphastart = true;
          }


        //    if the word is completed
        else if(this.Collectedletters >= this.iconPathArray.length ){

            //  reset iconpatharray
            this.iconPathArray = [];
            
            this.completedWord +=1;
            this.alphastart = false;
            
            this.setActiveWord();
            this.setIconPathArray();
            this.setActiveIcon();
            this.activeWordChange += 1;
            
        }
        else{
            // this.setIconPathArray();
            this.setActiveIcon();


        }
        // console.log(this.activeWord);


    }
    drawActiveWord(){
        // draw activeword on canvas
        ctxActiveWord.clearRect(0, 0, canvas.width, canvas.height);
        ctxActiveWord.font = "22px Georgia";
        ctxActiveWord.fillText(this.activeWord, canvasActiveWord.width/5, canvasActiveWord.height/2);

    }

    drawNumberLetter(){
        // draw activeword on canvas
        
        ctxNextNumber.clearRect(0, 0, canvas.width, canvas.height);
        ctxNextNumber.font = "32px Georgia";
        ctxNextNumber.fillText(this.Collectedletters, canvasNextNumber.width/2, canvasNextNumber.height/2);

    }
    
    drawWordList(){
 
        var fontSize = 20;

        ctxWordList.font = fontSize + "px Arial";
        ctxWordList.fillStyle = "#000";
        ctxWordList.textAlign = "left";

        var fontSize = 40;
        var x = 10;
        var y = 30;

        // wordwrapp array
        for (var i = 0; i < this.wordlist.length; i++) {
            ctxWordList.fillText(this.wordlist[i], x, y);
           y += fontSize;
        }

    }

    drawNextLetter(snake){
        // ctxNextLetter.clearRect(0, 0, canvas.width, canvas.height);
        // ctxNextLetter.font = "12px Georgia";
        // ctxNextLetter.fillText(this.iconPathArray[this.Collectedletters], 0, canvasNextLetter.height/2);

        let a_image = new Image();
        a_image.src = this.iconPathArray[this.Collectedletters];
        ctxNextLetter.drawImage(a_image, 10, 10, 40, 40);
    }

    isWinning(){
        // check if the winning condition are here
        

        if (this.completedWord > this.wordlist.length){
            
            winning();
           return true;
        }
        else{
            
            return false;
        }

    }
}