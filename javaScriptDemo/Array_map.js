// const arr =["Ashish","vishal","Himanshu"]
// let x=arr.map(function(e){
//     return "Mr."+e
// })
// console.log(x); // map returns in array



// const arr1 =["Ashish","vishal","Himanshu"]
// let x1=arr.forEach(function(e){
//     console.log("Mr."+e);
// })
// console.log(x1); // forEach return without array its  return  element of array


                const salary =[50000,30000,80000]
                let bonus=salary.map(function(e){
                    return e+1000
                })
                console.log(bonus); // map returns in array

                                const salary1 =[500020,30000,80000]
                                console.log(salary1.map(function(e){
                                    return e+1000
                                })); // short way of map