
// let walletNum = JSON.parse(localStorage.getItem("user"));

// document.getElementById("wallet_balance").innerHTML = walletNum;






async function getData(){

    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`


    try{
        const res = await fetch(url);
       

        const data  =  await res.json();


        console.log(data[0].vouchers)
        appendData(data[0].vouchers)
    }
    catch(error){
        console.log(error)
    }



}

getData()


let purchaseArray = [];

const appendData = (data) => {

    document.getElementById("voucher_list").innerText = null;

    data.forEach(function(el){

        let div = document.createElement("div");

        let title = document.createElement("p")
        title.innerText = el.name;

        let image = document.createElement("img")
        image.src = el.image;

        let price =  document.createElement("p");
        price.innerText = el.price;


        let btn = document.createElement("button")
        btn.innerText = "BUY";
        btn.setAttribute ("class", "buy_voucher");

        btn.addEventListener("click",function(){
            purchaseArray.push(el);
            localStorage.setItem("purchase", JSON.stringify(purchaseArray))
            removeMoney(el)
        });
        div.append(image,title,price,btn)
        document.getElementById("voucher_list").append(div)


    })

}

let items = [];

function removeMoney(el){

    let tp = el.price;
    let money = Number(document.getElementById("wallet_balance").innerText)

    let exact = money - tp;
    document.getElementById("wallet_balance").innerText = exact;

    items.push(el);

    localStorage.setItem("purchase",JSON.stringify(items))
}

