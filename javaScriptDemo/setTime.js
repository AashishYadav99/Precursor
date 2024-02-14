
let x=0;
function printNum(){
    x++
    console.log(x);
    if(x>=10)
    clearInterval(y)
}


let y=setInterval(printNum,1000);
