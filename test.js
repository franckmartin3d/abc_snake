function snakeArray(){

    let body = [
        {
            state: 'head',
            xpos: 100,
            ypos: 150
        }  
        
        ];
        
        
        // console.log(body);
        console.log(body[0].xpos);
        
        let temp1 = {
            state: "middle",
            xpos:200,
            ypos:200
        }
        body.push(temp1);
        
        let temp2 = {
            state: "end",
            xpos:300,
            ypos:300
        }
        body.push(temp2)
        
        
        // body.shift();
        console.log(body);
             
}

function word(){
    let wordlist = ['abcdefg', 'mila','maman',"nana"];

    let randomitem = wordlist[Math.floor(Math.random() * wordlist.length)]
    console.log('this random item:' + randomitem);
    return randomitem
}



function char(word){

    // chop word
    word = word.toUpperCase();
    let split = word.split('');
    console.log("array of word:" + word[0]);

    // list for path


    let list = [
        {
            char: 'A',
            path: '../char/A_char.png'
        },

        {
            char: 'B',
            path: '../char/B_char.png'
        },
        {
            char: 'C',
            path: '../char/C_char.png'
        },
        {
            char: 'D',
            path: '../char/D_char.png'
        },
        {
            char: 'E',
            path: '../char/E_char.png'
        },
        {
            char: 'F',
            path: '../char/F_char.png'
        },
        {
            char: 'G',
            path: '../char/G_char.png'
        },
        {
            char: 'H',
            path: '../char/H_char.png'
        },
        {
            char: 'I',
            path: '../char/I_char.png'
        },
        {
            char: 'J',
            path: '../char/J_char.png'
        },
        {
            char: 'K',
            path: '../char/K_char.png'
        },
        {
            char: 'L',
            path: '../char/L_char.png'
        },
        {
            char: 'M',
            path: '../char/M_char.png'
        },
        {
            char: 'N',
            path: '../char/N_char.png'
        },
        {
            char: 'O',
            path: '../char/O_char.png'
        },
        {
            char: 'P',
            path: '../char/P_char.png'
        },
        {
            char: 'Q',
            path: '../char/Q_char.png'
        },
        {
            char: 'R',
            path: '../char/R_char.png'
        },
        {
            char: 'S',
            path: '../char/S_char.png'
        },
        {
            char: 'T',
            path: '../char/T_char.png'
        },
        {
            char: 'U',
            path: '../char/U_char.png'
        },
        {
            char: 'V',
            path: '../char/V_char.png'
        },
        {
            char: 'W',
            path: '../char/W_char.png'
        },
        {
            char: 'X',
            path: '../char/X_char.png'
        },
        {
            char: 'Y',
            path: '../char/Y_char.png'
        },{
            char: 'Z',
            path: '../char/Z_char.png'
        },

    ];

   

    let patharr = [];
    split.forEach(element => {
        // console.log(element);
        
        list.forEach(letter =>{
            if (element == letter.char){
                // console.log(letter.path);
                patharr.push(letter.path);
            }
            // console.log(letter.path);
           
        });

    });
   console.log(patharr);


}
let papa = word();

console.log(typeof papa);
char(papa);



