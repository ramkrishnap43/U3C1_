
let selectedProducts = JSON.parse(localStorage.getItem("products"))

selectedProducts.map(function(elem){

    let div = document.createElement("div")
    
    let image = document.createElement("img");
    image.src = elem.image;


    let type = document.createElement("p");
    type.innerText = elem.type;

    let desc = document.createElement("p");
    desc.innerText = elem.desc;

    let price = document.createElement("p");
    price.innerText = elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove Products";
    btn.setAttribute = ("id", "remove_product");
    btn.addEventListener ("click", function(){
        removeData(elem)
    })
    
    div.append(image,type,desc,price, btn);
    

    document.getElementById("all_products").append(div)




   

   

    

})

function removeData(elem,index){

    console.log(elem,index)


    selectedProducts.splice(index,1);
    localStorage.setItem("products",JSON.stringify(selectedProducts))
    window.location.reload()
}




 

function addMore(){
    window.location.href = "index.html"
}
