let array = JSON.parse(localStorage.getItem("user")) || [];


let form = document.getElementById("form")

form.addEventListener("submit", function1)

function function1(){

    event.preventDefault();

    let name = form.name.value;

    let email = form.email.value;

    let address = form.address.value;

    let amount = Number(form.amount.value)

    let obj = {
        name : name,
        email: email,
        address : address,
        wallet : amount
    }

    array.push(obj)

    localStorage.setItem("user",JSON.stringify(array))
}

