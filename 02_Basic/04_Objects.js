// Singleton object 
const infor = new Object();
// console.log(infor);

// Non-singleton object
const infor1 = {};
// console.log(infor1);


const tinderUser = {}
tinderUser.name = "deep kumar"
tinderUser.id = "123abc"
tinderUser.isLogin = false
console.log(tinderUser);



const regularUser = {
    email : "sum@gamil.com",
    fullname : {
        userfullname :{
            firstname : " deep ",
            lastname : " kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);



// // combine the objects
const obj1 = { 1:"a", 2:"b"};
const obj2 = { 3:"c", 4:"d"};
const obj3 = {obj1,obj2}
// console.log(obj3);            //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
const combine1 = Object.assign( {} ,obj1,obj2)
// console.log(combine1);         // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const combine2 = {...obj1,...obj2}
// console.log(combine2);            // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// object in a Array
const arr = [
    {
        student1 : " deep kumar",
        id1 : "123abc"
    },
    {
        student2 : "abc" ,
        id2 : "abc123"
    }
]
// console.log(arr[1].student1);



// how to access only key in object
console.log(Object.keys(tinderUser));      // [ 'name', 'id', 'isLogin' ]->all the keys store in a array
// how to access only value in object
console.log(Object.values(tinderUser));    // ['deep kumar', '123abc', false ]
// check the key is present or not in a object
console.log(tinderUser.hasOwnProperty('name'));  // true
console.log(tinderUser.hasOwnProperty('fullname'));  //  false
console.log(tinderUser.hasOwnProperty('deep kumar'));  // 
console.log(tinderUser.hasOwnProperty('deep kumar'));  // 






