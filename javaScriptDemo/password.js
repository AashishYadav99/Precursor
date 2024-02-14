let pass = new Promise((resolve, reject) => {
    let password = "ashi99";
    // let password = prompt("Please enter your password");
    if (password.length < 8)
        resolve("PASSWORD LENGTH MUST BE GREATHER THAN 8 ");
    else
        reject("PASSWORD LENGTH IS OK");
})

pass.then((p1) => {
    console.log(p1);
}, (p2) => {
    console.log(p2);

})