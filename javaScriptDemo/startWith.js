
let p =new Promise((resolve,reject)=>{
    let userName = "Shish";
        if(userName.startsWith("s" && "S"))
            resolve("name starts with s ")
        else
            reject("name doest not start with s")
})

p.then((value1)=>{
    console.log(value1);
},(value2)=>{
    console.log(value2);
})

