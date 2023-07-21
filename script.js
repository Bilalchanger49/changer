

const PRODUCTS = [
    {
        value: 0,
        productName: "IPhone",
        price: "Price: $"+999.0,
        productImage: "./assets/1.png"
    },
      {
        value: 0,
        productName: "Macbook Pro 2022 (M1)",
        price: "Price: $"+1999.0,
        productImage: "./assets/2.png"
      },
      {
        value: 0,
        productName: "Cannon M50 Camera",
        price: "Price: $"+699.0,
        productImage: "./assets/3.png"
      },
      {
        value: 0,
        productName: "WLS Van Gogh Denim Jacket",
        price: "Price: $"+228.0,
        productImage: "./assets/4.png"
      },
      {
        value: 0,
        productName: "LED Light Strips",
        price: "Price: $"+19.99,
        productImage: "./assets/5.png"
      },
      {
        value: 0,
        productName: "SPECTRUM LS TEE",
        price: "Price: $"+68.0,
        productImage: "./assets/6.png"
      },
      {
        value: 0,
        productName: "AUTO SERVICE SHIRT by GOLF WANG",
        price: "Price: $"+120.0,
        productImage: "./assets/7.png"
      },
      {
        value: 0,
        productName: "DON'T TRIP UNSTRUCTURED HAT",
        price:"Price: $"+ 40.0,
        productImage: "./assets/8.png"
      },
];

var name1 = document.getElementsByClassName("name"); 
var price1 = document.getElementsByClassName("price"); 
var number1 = document.getElementsByClassName("number");
var slink = document.querySelector(".Shop_link");
var clink = document.querySelector(".cart_link");
var cs = document.querySelector(".CS");


document.getElementById('2.2').style.display = "none"; 

const values = () =>{
    for (const key in PRODUCTS) {
        
        console.log(price1[key]);
        name1[key].innerHTML = PRODUCTS[key].productName
        price1[key].innerHTML = PRODUCTS[key].price
        number1[key].innerText = PRODUCTS[key].value
    }

    for (var i=8; i<16; i++) {
        
        console.log(price1[i]);
        name1[i].innerHTML = PRODUCTS[i-8].productName
        price1[i].innerHTML = PRODUCTS[i-8].price
    }
    for (let i = 0; i < 8; i++) {
       if(PRODUCTS[i].value === 0){
        document.getElementById(i+1).style.display = "none";
       } else{
        document.getElementById(i+1).style.display = "flex";
       }
    }
}
values();

function add(id){
    
    PRODUCTS[id-1].value++
    values();
    
}


function sub(id){
 
    var a =  document.getElementsByClassName("number")[id-1].innerText;
    if(a <= 0){
        alert("not possible");
    }
    else{
        PRODUCTS[id-1].value--
    values();
    }
}

clink.addEventListener("click", () => {
    document.getElementById('2.1').style.display = "none";
    document.getElementById('2.2').style.display = "block";
} );




slink.addEventListener("click", () => {
    document.getElementById('2.2').style.display = "none";
    document.getElementById('2.1').style.display = "block";
} );


const change = (key) => {
    PRODUCTS[key].value = 1;
    values();
}

cs.addEventListener("click", () => {
  document.getElementById('2.2').style.display = "none";
  document.getElementById('2.1').style.display = "block";
} );





  




