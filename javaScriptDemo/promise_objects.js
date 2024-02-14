let user_promise = new Promise((resolve, reject) => {
    let isLogin = true
    if (!isLogin) {
        let user = {
            name: "scott",
            email: "ashish@99",
            phone: 9795992502
        }
        resolve(user)
    }

    else {
        reject("Please do login first")
    }

})
user_promise.then((userobject) => {
    console.log(`user name is ${userobject.name}`);
    console.log(`user name is ${userobject.email}`);
    console.log(`user name is ${userobject.phone}`);

}, (error) => {
    console.log(error);

})