let array = JSON.parse(localStorage.getItem("purchase"))

array.map(function(el){

    let div = document.createElement("div");

    let image = document.createElement("img")
    image.src = el.image;

    let title = document.createElement("p")
    title.innerText = el.name;

    let price =  document.createElement("p");
    price.innerText = el.price;

    div.append(image,title,price)
    document.getElementById("purchased_vouchers").append(div)

})