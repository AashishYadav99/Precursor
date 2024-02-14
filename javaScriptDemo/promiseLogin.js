let user_login= new Promise((res,rej)=>{
    let userId=123;
    let password="123Abc"
    if(userId===123 && password==="123Abc")
    res("Successfully loged In")

    else
    rej("Invalid  Credentials")
})// producer code

//consumer code from here

// user_login.then((success)=>{
//     console.log(success);
// },(error)=>{
//     console.log((error));
// })


//chaining

user_login.then((success)=>{
    return success;
},(error)=>{
    console.log((error));
}).then((value)=>{
    console.log(value.toUpperCase());
})

