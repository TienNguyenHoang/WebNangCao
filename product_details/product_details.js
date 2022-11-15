
let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let cart_products = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : [];


const query = window.location.search;
const urlParams = new URLSearchParams(query);
const productID = urlParams.get("product_id");
let product = products.find(function(item) {
    return item.id == productID;
});

const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

function renderProductDetails() {
    const productImg = col1.querySelector(".product-img")
    const productBanner = col1.querySelector(".banner");
    const productName = document.querySelector(".product-name");
    const productPrice = document.querySelector(".product-price");
    const productDesc = document.querySelector(".product-desc");
    const productQuantity = document.querySelector(".product-quantity");
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

const btnPre = document.querySelector(".btn-pre")
const btnNext = document.querySelector(".btn-next")
const slides = document.querySelector(".slides")

function recommendSlider() {
    const slide = document.querySelectorAll(".slide")
    const length = slide.length // so luong rcm product
    const sub = length - 5 // so luong rcm co dinh tren UI la 5(chua co response)
    const width = 240 // chieu ngang cua mot o rcm product
    let marginLeft = 0
    btnNext.onclick = () => {
        console.log(marginLeft)
        if(marginLeft== -1*sub*width) {
            marginLeft = 0
            slides.style.marginLeft = 0 + "px"
        }
        else {
            marginLeft -= 240
            slides.style.marginLeft = marginLeft + "px"
        }
    }
}


function renderRecommend(){
    const arr = products.filter((item) => {
        return item.categoryID === product.categoryID && Math.abs(parseInt(item.price.replace(/[ .đ]/gm,''))-parseInt(product.price.replace(/[ .đ]/gm,'')))<5000000
    });
    const recommendArr = arr.slice(0, 8); // recommend toi da 8 sp

    let str = ""
    recommendArr.forEach((item) => {
        str += `
        <div class="slide">
            <div class="rcm-product-img" style="background-image: url(.${item.background_image})"></div>
            <div class="rcm-product-name">${item.name}</div>
            <div class="rcm-product-price">${item.price}</div>
            <div class="rcm-product-btns">
                <div class="rcm-product-addBtn"><i class="fa-solid fa-cart-shopping"></i></div>
                <div class="rcm-product-detailsBtn"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
        </div>
        `
    });
    slides.innerHTML = str;
    recommendSlider()
}
renderRecommend()


