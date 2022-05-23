//store the products array in localstorage as "products"

document.getElementById("products").addEventListener("submit", displayProduct);

let array = JSON.parse(localStorage.getItem("products")) || [];

function displayProduct(){
    event.preventDefault();

    

    let type = document.getElementById("type").value;

    let desc =  document.getElementById("desc").value;

    let price =  document.getElementById("price").value;

    let image =  document.getElementById("image").value;


    function selectedData(t,d,p,i){
        this.type = t,
        this.desc = d,
        this.price = p,
        this.image= i;
    }

    let add = new selectedData(type,desc,price,image);

    console.log(add)

    array.push(add);

    localStorage.setItem("products",JSON.stringify(array))

  

}

document.getElementById("show_products").addEventListener("click", showProducts)

function showProducts(){
    window.location.href = "inventory.html"
}
