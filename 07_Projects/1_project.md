# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)


# Solution code

## Project 1 
``` javascript

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("Body")
const count = 0;

buttons.forEach(function(button){
  button.addEventListener("click", function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})




```
## Project 2 

``` javascript

const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault();
  // document.querySelector("height").value // they give the value in string type
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const submit = document.querySelector("#results")
  if(height <= 0 || isNaN(height) ){
    submit.innerHTML = `this number is invalid ${height}`
  }
  if(weight <= 0 || isNaN(weight) ){
    submit.innerHTML = `this number is invalid ${weight}`
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    submit.innerHTML = `<span>${bmi}</span>`
    
  }
})



```
## Project 3
```javascript

// const clock = document.getElementById("clock")
//++++++++++ OR 
const clock = document.querySelector("#clock")


setInterval(function(){
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)




