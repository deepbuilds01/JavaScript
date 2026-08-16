// for of loop

const arr = [1,2,3,4,5]
// for (const nums of arr) {
//     console.log(nums);
// }

const str = "deep kumar"
// for (const name of str) {
//     if(name === " " ){   // for removing space
//         continue;
//     }else{
//         console.log(name);  
//     }
// }



//+++++++ MAP and for of loop apply on map
// const map = new Map()
// map.set(1,"d")
// map.set(2,"e")
// map.set(3,'p')
// console.log(map);

// console.log(map.get(1));
// map.set(1,"de")
// console.log(map.get(1));
// console.log(map.size);
// map.delete(2)
// console.log(map.size);


//+++++++++++++++ for of loop apply on object
const info = {
    name : "deep kumar",
    ID : '23234'
}

// for of loop
// for (const key of info) {
//     console.log(infor);
// }

// for in loop
for (const key in info) {
    // console.log(key)     // print  all keys
    // const element = info[key];
    // console.log(element)
}



const array = [234,2345,2345,235,63,356]
for (const key in array) {
    // console.log(key);    // print array index
    // const element = array[key];
    // console.log(element);    
}



const map = new Map()
map.set(1,"d")
map.set(2,"e")
map.set(3,'p')

for (const key of map) {
    console.log(key);
}
