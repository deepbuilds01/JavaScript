const name = fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json;             // convert the responsed data into json
}).then(function(data){
    console.log(data);
    
}).catch(function(){
    console.log("hello");d
})
