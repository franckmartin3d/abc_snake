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





function update(body){
    let head = body[body.length - 1].copy();
    

}