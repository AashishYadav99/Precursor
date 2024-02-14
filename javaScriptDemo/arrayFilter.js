// age=[12,14,1,3,65,77,89,89,8,66,]
// const result = age.filter(function(age){
//     if(age>12)
//     return age

// })
// console.log(result);

//arrow function

age=[12,14,1,3,65,77,89,89,8,66,]
const result = age.filter((age)=>{
    if(age>12)
    return age

})
console.log(result);