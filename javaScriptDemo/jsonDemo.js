let college='{"name":"jon","address":"lucknow","email":"ashish@gmail.com"}'
console.log(college.name);
// console.log(college);

// conert in to JS object

let college_obj=JSON.parse(college)
console.log(college_obj);


// conert in to JS object to  JSON


let product={Pname:"Maggiee",pId:34,Pprice:5000}
console.log(product.Pname);
let product_obj=JSON.stringify(product)
console.log(product_obj);


//JSON array to Object

let e1={
    emp:[
        {"Id":"01","email":"ashish@gamil.com"},
        {"id":"02",email:"himashu@gmail.com"}
    
    ]
}
console.log(e1.emp[0].Id);
console.log(e1.emp[1].email);




