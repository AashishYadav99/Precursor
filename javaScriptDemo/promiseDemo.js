let p= new Promise((resolve,reject)=>{
    let x=10;
    if(x>=10)
    resolve("promise has been resolved"+x)

    else
    reject("not fullfilled"+x)
})// producer code

// consumer code from here

p.then((successValue)=>{
    console.log(successValue);
},(errorValue)=>{
    console.log((errorValue));
})