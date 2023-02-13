//declaring a variable of the api to be fetched
let url = "https://dog.ceo/api/breeds/image/random"
//declaring a variable of the botton from the dom
let btn = document.getElementById("load");
//an empty div
let box = document.getElementById("box");
//the function here made the botton interactive upon click
btn.addEventListener("click", () => {
//this fetch the api using the variable decleared earlier
    fetch(url).then(data => data.json())
    //the resolve part of the promise
    .then((data) => {
        if(data.status == "success"){
            //this insert a code into a specific position
            box.insertAdjacentHTML("beforeend",
            `<img src="${data.message}" >`)
            //reject part of the promise
        }else{
            alert('popo don catch you');
        }
    }).catch(err => console.log(err));
})