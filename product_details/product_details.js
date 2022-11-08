
let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let cart_products = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : [];


const query = window.location.search;
const urlParams = new URLSearchParams(query);
const productID = urlParams.get("product_id");

const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

function renderProductDetails() {
    const productImg = col1.querySelector(".product-img")
    const productBanner = col1.querySelector(".banner");
    const productName = document.querySelector(".product-name");
    const productPrice = document.querySelector(".product-price");
    const productDesc = document.querySelector(".product-desc");
    const productQuantity = document.querySelector(".product-quantity");
    let product = products.find(function(item) {
        return item.id == productID;
    });
    productImg.setAttribute("style", `background-image: url(.${product.background_image})`);
    productName.innerText = product.name;
    productPrice.innerText = product.price;
    productDesc.innerText = product.description;
    productQuantity.innerHTML = `<span>Còn lại: </span>${product.quantity}`
}

const toHomeBtn = document.querySelector("#toHome")
toHomeBtn.onclick = () => {
    window.location.href = "../index.html"   // trở về tran chính
}

