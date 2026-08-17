const coding = ['java','Cpp', 'python', 'js', 'c']

// coding.forEach((item)=>{
//     console.log(item);
// })

// const  value = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(value);      //undefined (foreach loop does not return)


const num = [1,2,3,4,5,6,7,8,9,10]
// const print = num.filter((number) =>  number>5)
//++++++++++++++ OR 
const print = num.filter((number) => {
    return number > 5
})
// console.log(print);           // [ 6, 7, 8, 9, 10 ]

const storenum = []
num.forEach( (item) => {
    if(item>5){
        storenum.push(item)
    }
})
// console.log(storenum);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre:  'Non-Fiction', publish: 1981, edition: 1989 },
];


//++++++++++++++++ how to access from the data
// let userbook = books.filter( (book) => book.genre === "History" )
userbook = books.filter( (book) =>  {
    return book.publish<=1995 && book.genre == "History" 
})
console.log(userbook);






 

