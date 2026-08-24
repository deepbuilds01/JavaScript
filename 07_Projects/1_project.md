# Projects related to DOM

## Project link
[Click here]()


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
