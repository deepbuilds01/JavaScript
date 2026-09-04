// Creation ans consumtion of promises

// creation of promises
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     setTimeout(() => {
//         console.log("hello");
//         resolve()
//     }, 1000);
// });   
// // consumtion of promises
// promiseOne.then(function(){
//     console.log("promise consumed");
// })
//++++++++ OR ++++++++ (Promisetwo)
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("deep kumar");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log(" resolve consumtion");
// })


// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("deep kumar");
//         resolve({name : "deep kumar", rollno : " 123421", EmailID : " asd1234"})   
//     },1000)
// })
// promisethree.then(function(ans){
//     console.log(ans);
// })


// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         const ans = false;
//         if(!ans){
//             resolve({name:"deep kumar", EmailID:"deepkr556@gmail.com"})
//         }else{
//             reject("Occuring error");
//         }
//     }, 1000);
// })
// promisefour.then(function(res){
//     console.log(res);
//     return res.name;
// }).then(function(final){
//     console.log(final);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
    console.log("finally desolved -> this function always run");
    
// })


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()