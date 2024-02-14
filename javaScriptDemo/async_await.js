let empPromise = new Promise((res, rej) => {
    let x = true
    if (x) {
        res({ empId: "101", dept: "CSE", name: "Ashish" })
    }
    else {
        rej("Not an Employee")
    }
})

let company = async () => {

    try {
        let empObj = await empPromise
        console.log(`name is ${empObj.name.toUpperCase()}`);
    }
    catch (err){
        console.log(err);
    }
    finally{
        console.log("for resource closing");
    }

}

company()