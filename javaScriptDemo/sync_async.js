
//syncronous function


// let restra = () => {

//     console.log("user place order");
//     for (let i = 0; i < 10; i++) {
//         console.log("meal is preparing......");

//     }

//     console.log("user can eat");
// }
// restra()


//asyncronus function


let restra=()=>{
    console.log("user place order");
    setTimeout(()=>{
        console.log("chef is preparing meal");
    },3000)
    console.log("you can play mobile games ")
}
restra()
