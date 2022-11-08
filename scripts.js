
// database sản phẩm có sẵn hiện thị web => tự tạo sẵn ?
// dùng object constructor để thêm, sửa, xóa sản phẩm (admin page) ?

function product(id, name, price, quantity ,background_image, category, description) {
    this.id = id,
    this.name = name;
    this.price = price + " đ";
    this.quantity = quantity;
    this.background_image = background_image;
    this.category = category;
    this.description = description;
}

let productsDB = 
[
    new product ("001",
    "Tên sản phẩm 1",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("002",
    "Tên sản phẩm 2",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("003",
    "Tên sản phẩm 3",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("004",
    "Tên sản phẩm 4",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("005",
    "Tên sản phẩm 5",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("006",
    "Tên sản phẩm 6",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("007",
    "Tên sản phẩm 7",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("008",
    "Tên sản phẩm 8",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("009",
    "Tên sản phẩm 9",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("010",
    "Tên sản phẩm 10",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("011",
    "Tên sản phẩm 11",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("012",
    "Tên sản phẩm 12",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("013",
    "Tên sản phẩm 13",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("014",
    "Tên sản phẩm 14",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("015",
    "Tên sản phẩm 15",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("016",
    "Tên sản phẩm 16",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("017",
    "Tên sản phẩm 17",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("018",
    "Tên sản phẩm 18",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("019",
    "Tên sản phẩm 19",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("020",
    "Tên sản phẩm 20",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("021",
    "Tên sản phẩm 21",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("022",
    "Tên sản phẩm 22",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("023",
    "Tên sản phẩm 23",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("024",
    "Tên sản phẩm 24",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("025",
    "Tên sản phẩm 25",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("026",
    "Tên sản phẩm 26",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("027",
    "Tên sản phẩm 27",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("028",
    "Tên sản phẩm 28",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("029",
    "Tên sản phẩm 29",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("030",
    "Tên sản phẩm 30",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 2",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("031",
    "Tên sản phẩm 31",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("032",
    "Tên sản phẩm 32",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("033",
    "Tên sản phẩm 33",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("034",
    "Tên sản phẩm 34",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("035",
    "Tên sản phẩm 35",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("036",
    "Tên sản phẩm 36",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("037",
    "Tên sản phẩm 37",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("038",
    "Tên sản phẩm 38",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("039",
    "Tên sản phẩm 39",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    new product ("040",
    "Tên sản phẩm 40",
    "1.990.000",
    100,
    "https://cf.shopee.vn/file/3355a767c028c484757bb7000e71e339",
    "Danh mục 1",
    "Thông tin mô tả sản phẩm hiển thị ở đây"),
    
];


// ============================================ //
// -------------- LOCALSTORAGE ---------------- //
// ============================================ //


let accountState = -1;   // xác định user id nào đang log in
let userAccounts;
let cart_products;
let orderNoteList
let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsDB;



// ============================================ //
// ---------------- FIRSTLOAD ----------------- //
// ============================================ //

window.addEventListener('DOMContentLoaded', () => {
    renderProduct(products, start, end);
    renderPagesList(totalPages);
    changePage(products);
    changeCategory(categoriesPC);
    changeCategory(categoriesMobile_Tablet);
    addToCart()
    search();
    filterByPrice(products, ".price_items");
    filterByPrice(products, ".filter_item-priceOption");
    productDetailNaviagte();
});


// =================================================== //
// ------------------- PAGINATION -------------------- //
// =================================================== //

let currentPage = 1;
let itemPerPage = 10;
let start = 0;
let end = itemPerPage;
let totalPages = Math.ceil(products.length/itemPerPage);

function renderProduct(productList, s, e) {
    const product_row = document.querySelector("#row2");
    product_row.innerHTML='';
    productList.forEach(function (item, index) {
        if(index>=s && index <e) {
            const product = document.createElement("div");
            product.classList.add("grid_column", "pc_col2-4", "tablet_col4", "mobile_col6", "pc-wide_col2-4"); // modifiy here
            product.innerHTML = `
            <a class="product_item-link" href="#"><div class="product_items" data-id="${item.id}">
                <div class="product_items-img" style="background-image: url(${item.background_image})"></div>
                <div class="product_items-name">${item.name}</div>
                <div class="product_items-price">${item.price}</div>
                <div class="product_items-description">${item.description}</div>
                <div class="product_items-modal">
                    <div class="product_items-addBtn"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="product_item-detailBtn"><i class="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div></a>
            `;
            product_row.appendChild(product);
            const productItemLinks = document.querySelectorAll(".product_item-link");
            productItemLinks.forEach(function(item) {
                item.onclick = function(e) {e.preventDefault()}
            })
            addToCart();
        }
    })
}
// renderProduct(products, start, end);

function renderPagesList(total) {
    let html = '';
    for(let i=1; i<=total; i++) {
        html+= `
            <a href="#">
                <li class="page_list-items">${i}</li>
            </a>
        `;
    }
    document.querySelector(".page_list").innerHTML=html;
}

// renderPagesList(totalPages);

function changePage(productList) {
    const pagesList = document.querySelectorAll(".page_list a");
    pagesList.forEach(function (item, index) {
        item.onclick = function () {
            let value = index+1;
            currentPage = value
            s = (currentPage-1)*itemPerPage;
            e = currentPage*itemPerPage;
            renderProduct(productList, s, e);
        }
    })
}

// changePage(products);

// ======================================================== //
// ----------------------- CATEGORY ----------------------- //
// ======================================================== //

const categoriesPC = document.querySelectorAll(".category_items-link");
const categoriesMobile_Tablet = document.querySelectorAll(".mobile_category-link");
function changeCategory(category) {
    let cagetoryItems=[];
    category.forEach(function (item, index) {
        item.onclick = function (e) {
            e.preventDefault();
            if(index==0) {
                start=0;
                end=itemPerPage;
                // currentPage=1;
                totalPages = Math.ceil(products.length/itemPerPage);
                renderProduct(products, start, end);
                renderPagesList(totalPages);
                changePage(products);
                filterByPrice(products, ".price_items");
                filterByPrice(products, ".filter_item-priceOption");
                productDetailNaviagte()
            }
            else {
                cagetoryItems = products.filter(function (a) {
                    return a.category == item.innerHTML;
                })
                start=0;
                end=itemPerPage;
                // currentPage=1;
                totalPages = Math.ceil(cagetoryItems.length/itemPerPage);
                renderPagesList(totalPages);
                renderProduct(cagetoryItems, start, end);
                changePage(cagetoryItems);
                filterByPrice(cagetoryItems, ".price_items");
                filterByPrice(cagetoryItems, ".filter_item-priceOption");
                productDetailNaviagte()
            }
        }
    })
}

// changeCategory(categoriesPC);
// changeCategory(categoriesMobile_Tablet);

// ====================================================================== //
// ----------------------- JS Interact Anmaitions ----------------------- //
// ===================================================================== //


// --------------- SEARCHBAR ON MOBILE AND TABLET -------------------

const mobileTabletSearchBTN = document.querySelector(".mobile_header-searchBtn");
const mobileTabletSearchBar = document.querySelector(".header_searchbar");

mobileTabletSearchBTN.onclick = function(e) {
    mobileTabletSearchBar.classList.remove("header_searchbar-hide");
}
window.onclick = function (e) {
    if(!mobileTabletSearchBTN.contains(e.target) && !mobileTabletSearchBar.contains(e.target)) {
        mobileTabletSearchBar.classList.add("header_searchbar-hide");
    }
}

// -------------- HAMBUGERLIST ON  MOBILE AND TABLET -----------------

const hambugerList = document.querySelector(".mobile_hambuger-list");
const hambugerModal = document.querySelector(".hambugerlist_modal");
const hambugerModal_content = document.querySelector(".hambugerlist_modal-content");
const hambugerModal_exitBTN = document.querySelector(".hambugerlist_modal-closeBTN");

hambugerList.onclick = function () {
    hambugerModal.classList.remove("hambugerlist_modal-hide");
    hambugerModal_content.style.animation = "slideIn 0.2s ease-in";
}

hambugerModal_exitBTN.onclick = function () {
    hambugerModal.classList.add("hambugerlist_modal-hide");
}

// ------------------- CART BOX ---------------------

const cartBtn = document.querySelector(".header_cart-icon");
const cartBox = document.querySelector(".cart_box");
cartBtn.onclick = function() {
    cartBox.classList.toggle("cart_box-hide");
}

// ------------------- CATEGORIES -----------------------

const categoriesLinks = document.querySelectorAll(".category_items-link");
categoriesLinks.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        categoriesLinks.forEach(function(e) {e.classList.remove("category_items-active")})
        item.classList.add("category_items-active");
    }) 
})


// ----------------- LOGIN , SIGNUP -------------------

const loginBtns = document.querySelectorAll(".signUp_logIn");
const signUpModal = document.querySelector(".signUp_modal");
const signUpCloseBtn = document.querySelector(".form_close-btn")
const line = document.querySelector('.line')
const inputForms = document.querySelectorAll(".form-input");
const username = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password");
const username_login = document.querySelector("#fullname-login");
const username_pass = document.querySelector("#password-login");

// reset error valid trước đó
function resetInValidInputs() {
    inputForms.forEach((item) => {
        item.classList.remove("invalid");
        getParentElement(item, ".form-group").querySelector(".form-messege").innerText = "";
    });
}

function renderSignUpForm() {
    signUpModal.classList.remove("signUp_modal-hide");
    signUpForm.classList.remove('form_toggle-display')
    logInFrom.classList.add('form_toggle-display')
    desc.style.color = "var(--text-color)";
    desc.innerHTML = "Chào mừng bạn đến với shop!";
    line.style.height = activeTab.offsetHeight + "px"
    line.style.width = activeTab.offsetWidth + "px"
    line.style.left = (activeTab.offsetLeft + 20) + 'px'
    line.style.top = '20px'   // padding of element
    resetInValidInputs();
}

loginBtns.forEach(function (item) {
    item.onclick = function(e) {
        e.preventDefault();
        renderSignUpForm();
    } 
})

signUpCloseBtn.onclick = function() {
    signUpModal.classList.add("signUp_modal-hide");
}

const signUp = document.querySelector("#sign-up")
const logIn= document.querySelector("#log-in")
const signUpForm = document.querySelector('#form-1')
const logInFrom = document.querySelector('#form-2')
const desc = document.querySelector('.desc')
const activeTab = document.querySelector('.active')


signUp.onclick = function() {
    signUpForm.classList.remove('form_toggle-display')
    logInFrom.classList.add('form_toggle-display')
    desc.innerText = 'Chào mừng đến với shop!'
    desc.style.color = "var(--text-color)";
    line.style.width = this.offsetWidth + "px"
    line.style.left = (this.offsetLeft + 20) + 'px'
    resetInValidInputs()
}

logIn.onclick = function() {
    signUpForm.classList.add('form_toggle-display')
    logInFrom.classList.remove('form_toggle-display')
    desc.innerText = 'Mừng bạn quay lại!'
    desc.style.color = "var(--text-color)";
    line.style.width = this.offsetWidth + "px"
    line.style.left = (this.offsetLeft + 20) + 'px'
}

inputForms.forEach(function(item) {
    item.addEventListener("focus", function() {
        item.classList.add("form-input-active");
    })
    item.addEventListener("blur", function() {
        item.classList.remove("form-input-active");
    })
})

username.addEventListener("blur", usernameValid)

function usernameValid() {
    let value = username.value;
    let messege = value ? true : false;
    const form_group = getParentElement(username, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    if (!messege) {
        username.classList.add("invalid");
        errorSpan.innerText = "Vui lòng không để trống";
        return false;
    }
    else {
        username.classList.remove("invalid");
        errorSpan.innerText = "";
        return true;
    }
}

email.addEventListener("blur", emailValid)

function emailValid() {
    let value = email.value;
    let messege1 = value ? true : false;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let messege2 = regex.test(value) ? true : false;
    const form_group = getParentElement(email, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    if(!messege1) {
        email.classList.add("invalid");
        errorSpan.innerText = "Vui lòng không để trống";
        return false;
    } 
    else if(!messege2) {
        email.classList.add("invalid");
        errorSpan.innerText = "Vui lòng nhập đúng định dạng email";
        return false;
    }
    else {
        email.classList.remove("invalid");
        errorSpan.innerText = "";
        return true;
    }
}

password.addEventListener("blur", passwordValid);

function passwordValid() {
    let value = password.value;
    let messege1 = value ? true : false;
    let messege2 = value.length<6 ? false : true;
    const form_group = getParentElement(password, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    if(!messege1) {
        password.classList.add("invalid");
        errorSpan.innerText = "Vui lòng không để trống";
        return false;
    } 
    else if(!messege2) {
        password.classList.add("invalid");
        errorSpan.innerText = "Độ dài mật khẩu tối thiểu là 6 ký tự!";
        return false;
    } 
    else {
        password.classList.remove("invalid");
        errorSpan.innerText = "";
        return true;
    }
}

confirmPass.addEventListener("blur", confirmPassWordValid);

function confirmPassWordValid() {
    let value = confirmPass.value;
    let messege1 = value ? true : false;
    let messege2 = value === password.value ? true : false;
    const form_group = getParentElement(confirmPass, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    if(!messege1) {
        confirmPass.classList.add("invalid");
        errorSpan.innerText = "Vui lòng không để trống";
        return false;
    } 
    else if(!messege2) {
        confirmPass.classList.add("invalid");
        errorSpan.innerText = "Mật khẩu nhập lại không trùng khớp!";
        return false;
    } 
    else {
        confirmPass.classList.remove("invalid");
        errorSpan.innerText = "";
        return true;
    }
}

// =================================================================== //
// ------------------------------ CART ------------------------------ //
// ================================================================= //


function addToCart() {
    cart_products = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : [];
    const addToCartBtns = document.querySelectorAll(".product_items-addBtn");
    addToCartBtns.forEach(function(item) {
        item.onclick = function () {
            const productBox = getParentElement(item, ".product_items");
            const productID = productBox.getAttribute("data-id");
            const productItem = products.find(function(i) {return i.id === productID});
            if(productItem.quantity <= 0) {
                alert("Out of order!")
            }
            else {
                function product (id, img, name, price, quantity) {
                    this.id = id,
                    this.img = img;
                    this.name = name;
                    this.price = price;
                    this.quantity = quantity;
                    this.totalPrice = this.quantity*this.price;
                }
                const index = cart_products.findIndex(function(i) {return i.id === productID})    // return index, if not find return -1.
                if (index !== -1) {
                    if(productItem.quantity<cart_products[index].quantity+1) {
                        alert("Out of order!")
                    }
                    else {
                        cart_products[index].quantity +=1;
                        cart_products[index].totalPrice = cart_products[index].quantity*cart_products[index].price;
                        localStorage.setItem("cart_products", JSON.stringify(cart_products));
                    }
                }
                else {
                    let cart_item = new product(productID, productItem.background_image, productItem.name, parseInt(productItem.price.replace(/[ .đ]/gm,'')), 1);
                    cart_products.push(cart_item);
                    localStorage.setItem("cart_products", JSON.stringify(cart_products));
                }
                renderCart();
            }
        }
    })
}

// addToCart()

function deleteProductCart(cartContainer) {
    const deleteBtns = cartContainer.querySelectorAll(".cart_items-deleteBtn");
    deleteBtns.forEach(function (item) {
        item.onclick = function() {
            const cart_item = getParentElement(item, ".cart_items");
            const productID = cart_item.getAttribute("data-id");
            const index = cart_products.findIndex(function(i) {return i.id === productID})
            cart_products.splice(index,1);  // at index i, delete 1 element => delete element while change the original array
            localStorage.setItem("cart_products", JSON.stringify(cart_products));
            cartContainer.removeChild(cart_item);
            if(cart_products.length == 0) {
                document.querySelector(".cart_nofi").innerText = "Không tìm thấy sản phẩm";
            }
        }
    })
}

function getParentElement(element, parent) {
    while(element.parentElement) {
        if(element.parentElement.matches(parent)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

function renderCart() {
    cart_products = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : [];
    const cart_list = document.querySelector(".cart_list");
    cart_list.innerHTML='';
    if(cart_products.length !==0) {
        cart_products.forEach(function(item) {
            const cart_item = document.createElement("div");
            cart_item.classList.add("cart_items");
            cart_item.setAttribute("data-id",`${item.id}`);
            cart_item.innerHTML = `
            <div class="cart_items-img" style="background-image: url(${item.img})"></div>
            <div class="cart_items-body">
                <div class="cart_item-info">
                    <div class="cart_items-name">${item.name}</div>
                    <div class="cart_items-price">${item.price} đ</div>
                </div>
                <div class="cart_items-quantity">
                    <i class="fa-sharp fa-solid fa-chevron-up increase"></i>
                    <span>${item.quantity}</span>
                    <i class="fa-solid fa-chevron-down decrease"></i>
                </div>
                <div class="cart_items-total">${item.totalPrice} đ</div>
                <i class="fa-solid fa-trash cart_items-trash cart_items-deleteBtn"></i>
            </div>
            `;
            cart_list.appendChild(cart_item);
        })
        document.querySelector(".cart_nofi").innerHTML = `<div class="cart_confirm-btn">Xác nhận đặt hàng</div>`;
        deleteProductCart(cart_list);
        decreaseQuantity();
        increaseQuantity();
        createBuyForm();     // hàm chỉ dc gọi sau khi đã render ra cartbox hoàn chỉnh (có btn để querySelector)
    }
}

function decreaseQuantity() {
    const increaseBtns = document.querySelectorAll(".decrease");
    increaseBtns.forEach(function(item) {
        item.onclick = function() {
            const cartItem = getParentElement(item, ".cart_items");
            const productID = cartItem.getAttribute("data-id");
            const index = cart_products.findIndex(function(i) {return i.id === productID});
            if(cart_products[index].quantity > 0) {
                cart_products[index].quantity -=1;
                cart_products[index].totalPrice = cart_products[index].quantity*cart_products[index].price;
            }
            else {
                cart_products[index].quantity = 0;
                cart_products[index].totalPrice = cart_products[index].quantity*cart_products[index].price;
            }
            item.parentElement.children[1].innerText = cart_products[index].quantity;
            cartItem.children[1].children[2].innerText = cart_products[index].totalPrice + " đ";
            localStorage.setItem("cart_products", JSON.stringify(cart_products));
        }
    })
}

function increaseQuantity() {
    const decreaseBtns = document.querySelectorAll(".increase");
    decreaseBtns.forEach(function(item) {
        item.onclick = function() {
            const cartItem = getParentElement(item, ".cart_items");
            const productID = cartItem.getAttribute("data-id");
            const index = cart_products.findIndex(function(i) {return i.id === productID});
            const productQuantity = products.find(function(i) {return i.id === productID}).quantity;
            if((cart_products[index].quantity + 1) > productQuantity) {
                alert("Out of order!")
            }
            else {
                cart_products[index].quantity +=1;
                cart_products[index].totalPrice = cart_products[index].quantity*cart_products[index].price;
                item.parentElement.children[1].innerText = cart_products[index].quantity;
                cartItem.children[1].children[2].innerText = cart_products[index].totalPrice + " đ";
                localStorage.setItem("cart_products", JSON.stringify(cart_products));
            }
        }
    })
}

// ============================================================ //
// ------------------------ SEARCHING ------------------------- //
// ============================================================ //

function search() {
    const searchInput = document.querySelector(".header_searchbar-input");
    const searchBtn = document.querySelector(".search_btn");

    searchBtn.onclick = function() {
        let searchValue = searchInput.value;
        let searchResultProducts = products.filter(function(item) {
            return item.name.includes(searchValue);
        })
        start = 0;
        end = itemPerPage;
        totalPages = Math.ceil(searchResultProducts.length / itemPerPage);
        renderPagesList(totalPages);
        renderProduct(searchResultProducts, start, end);
        changePage(searchResultProducts);
        filterByPrice(searchResultProducts, ".price_items");
        filterByPrice(searchResultProducts, ".filter_item-priceOption");
        productDetailNaviagte()
    }
}

// search();


// ============================================================ //
// ------------------------- FILTERS -------------------------- //
// ============================================================ //

function filterByPrice(arrProducts, options) {
    const priceOptions = document.querySelectorAll(options);
    priceOptions[0].onclick = function() {
        let filterPriceProducts = arrProducts.filter(function(item) {return parseInt(item.price.replace(/[ .đ]/gm,'')) < 1000000})
        start = 0;
        end = itemPerPage;
        totalPages = Math.ceil(filterPriceProducts.length / itemPerPage);
        renderPagesList(totalPages);
        renderProduct(filterPriceProducts, start, end);
        changePage(filterPriceProducts);
        productDetailNaviagte();
    }
    priceOptions[1].onclick = function() {
        let filterPriceProducts = arrProducts.filter(function(item) {
            const value = parseInt(item.price.replace(/[ .đ]/gm,''));
            return value > 1000000 && value < 3000000 
        });
        start = 0;
        end = itemPerPage;
        totalPages = Math.ceil(filterPriceProducts.length / itemPerPage);
        renderPagesList(totalPages);
        renderProduct(filterPriceProducts, start, end);
        changePage(filterPriceProducts);
        productDetailNaviagte();
    }
    priceOptions[2].onclick = function() {
        let filterPriceProducts = arrProducts.filter(function(item) {
            const value = parseInt(item.price.replace(/[ .đ]/gm,''));
            return value > 3000000 && value < 5000000
        });
        start = 0;
        end = itemPerPage;
        totalPages = Math.ceil(filterPriceProducts.length / itemPerPage);
        renderPagesList(totalPages);
        renderProduct(filterPriceProducts, start, end);
        changePage(filterPriceProducts);
        productDetailNaviagte();
    }
    priceOptions[3].onclick = function() {
        let filterPriceProducts = arrProducts.filter(function(item) {return parseInt(item.price.replace(/[ .đ]/gm,'')) > 5000000})
        start = 0;
        end = itemPerPage;
        totalPages = Math.ceil(filterPriceProducts.length / itemPerPage);
        renderPagesList(totalPages);
        renderProduct(filterPriceProducts, start, end);
        changePage(filterPriceProducts);
        productDetailNaviagte();
    }
}

// filterByPrice(products);


// ================================================================================== //
// ----------------------- Sign up: Stored User account ---------------------------- //
// --------------------- Login: render account's view ----------------------------- //
// -------------------------- Logout: render view --------------------------------- //
// =============================================================================== //


signUpForm.onsubmit = function(e) {
    e.preventDefault();
    const check1 = usernameValid();
    const check2 = emailValid();
    const check3 = passwordValid();
    const check4 = confirmPassWordValid();
    if (check1 && check2 && check3 && check4) {
        userAccounts = localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")) : [];
        let flag = userAccounts.some(function(item) {
            return item.username === username.value
        })
        // push vào mảng users để lưu tài khoản
        if (!flag) {
            let user = {
                userID: userAccounts.length + 1,
                username: username.value,
                password: password.value,
            }
            desc.innerHTML = "Tạo tài khoản thành công!";
            desc.style.color = "#1dbfaf";
            userAccounts.push(user);
            localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
        }
        else {
            desc.innerHTML = "Đã có username tồn tại!";
            desc.style.color = "red";
        }
    
    }
    
}

logInFrom.onsubmit = function(e) {
    e.preventDefault();
    userAccounts = localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")) : [];
    let admin = (username_login.value === "admin" && username_pass.value === "admin");
    let acc = userAccounts.find(function(item) {
        return (item.username === username_login.value && item.password === username_pass.value);
    });
    if(admin) {
        // chuyen den trang cho admin
        window.location.href = "./admin/admin_page.html"
    }
    else if(acc) {   // trang cho user
        accountState = acc.userID;
        desc.innerHTML = "Đăng nhập thành công!";
        desc.style.color = "#1dbfaf";
        setTimeout(() => {
            signUpModal.classList.add("signUp_modal-hide");
        }, 1000);
        loginBtns.forEach(function(item) {item.classList.add("loginSuccess")});
        renderAccountOnPC(acc);
        renderAccountOnMobile(acc);
    }
    else {
        desc.innerHTML = "Tài khoản hoặc mật khẩu sai, Đăng ký mới?";
        desc.style.color = "red";
    }
}

function renderAccountOnPC(userAcc) {
    const headerList2 = getParentElement(loginBtns[0], ".header_list");
    const userDiv = headerList2.querySelector(".user_account-pc");
    userDiv.classList.remove("loginSuccess");
    userDiv.children[1].innerText = `${userAcc.username}`
}

function renderAccountOnMobile(userAcc) {
    const moblieModalList = document.querySelector(".hambugerlist_modal-list");
    const userDivs = moblieModalList.querySelectorAll(".user_account-mobile");
    userDivs.forEach(function(item) {item.classList.remove("loginSuccess")});
    userDivs[0].children[1].innerText = `${userAcc.username}`
}

const logOutBtns = document.querySelectorAll(".logout_btn");
logOutBtns.forEach(function(item) {
    item.onclick = function() {
        if(accountState !== -1){
            accountState = -1;
            const userDiv = document.querySelector(".user_account-pc");
            const userDivs = document.querySelectorAll(".user_account-mobile");
            userDiv.classList.add("loginSuccess");
            userDivs.forEach(function(item) {item.classList.add("loginSuccess")});
            loginBtns.forEach(function(item) {item.classList.remove("loginSuccess")});
        }

    }
})


// =========================================================== //
// -------------------- Tạo đơn đặt hàng -------------------- //
// ========================================================= //

orderNoteList = localStorage.getItem("orderNoteList") ? JSON.parse(localStorage.getItem("orderNoteList")) : [];

const confirmBuyFormModal = document.querySelector(".confirmBuy_form-modal");
const confirmBuyFormCloseBtn = document.querySelector(".confirmBuy_form-closebtn");
const confirmBuyForm = document.querySelector(".confirmBuy_form-info");
const customername = document.querySelector("#hovaten");
const phoneNum = document.querySelector("#sdt");
const address = document.querySelector("#address");

confirmBuyFormCloseBtn.onclick = function() {
    confirmBuyFormModal.classList.add("confirmBuy_modal-hide");
}

function createBuyForm() {
    const confirmBuyBtn = document.querySelector(".cart_confirm-btn");
    confirmBuyBtn.onclick = function() {
        if(accountState == -1) {
            // chua dang nhap
            renderSignUpForm();
        }
        else {
            confirmBuyFormModal.classList.remove("confirmBuy_modal-hide");
            const confirmProductsList = confirmBuyFormModal.querySelector(".buy_product-list");
            const totalPrice = confirmBuyFormModal.querySelector(".buy_product-totalAll");
            confirmProductsList.innerHTML = "";
            let total = 0;
            cart_products.forEach(function(item) {
                total += item.totalPrice;
                let buyItem = document.createElement("div");
                buyItem.classList.add("buy_product-items");
                buyItem.setAttribute("data-id", `${item.id}`)
                buyItem.innerHTML = `
                    <div class="buy_product-img" style="background-image: url(${item.img})"></div>
                    <div class="buy_product-body">
                        <div class="buy_product-info">
                            <div class="buy_product-name">${item.name}</div>
                            <div class="buy_product-price">${item.price} đ</div>
                        </div>
                        <span style="font-size: 1.5rem;">SL: </span>
                        <span class="buy_product-quantity">${item.quantity}</span>
                        <span class="buy_product-total">${item.totalPrice} đ</span>
                    </div>
                `;
                confirmProductsList.appendChild(buyItem);
            })
            totalPrice.innerHTML = `Tổng tiền: <span style="color:red;">${total} đ</span>`
        }
    }
}

phoneNum.onblur = function() {checkPhoneInput()};
address.onblur = function() {checkAddressInput()};

confirmBuyForm.onsubmit = function(e) {
    e.preventDefault();
    let check1 = checkPhoneInput();
    let check2 = checkAddressInput();
    if(check1 && check2) {
        let orderNote = {
            userID: accountState,
            customerName: customername.value,
            phoneNumber: phoneNum.value,
            address: address.value,
            date: new Date().toLocaleString(),
            buyItems: cart_products
        }
        orderNoteList.push(orderNote);
        localStorage.setItem("orderNoteList", JSON.stringify(orderNoteList));
        const buyProducts = document.querySelectorAll(".buy_product-items");
        buyProducts.forEach(function(item) {
            const productID  = item.getAttribute("data-id");
            const index = products.findIndex(function(i) {return i.id === productID});
            products[index].quantity -= parseInt(item.children[1].children[2].innerText, 10);
        })
        document.querySelector(".cart_list").innerHTML = "";
        document.querySelector(".cart_nofi").innerText = "Không tìm thấy sản phẩm";
        confirmBuyFormModal.classList.add("confirmBuy_modal-hide");
        alert("Cảm ơn bạn đã mua hàng tại shop chúng tôi <3");
        localStorage.setItem("products", JSON.stringify(products));
        cart_products = [];
        localStorage.setItem("cart_products", JSON.stringify(cart_products));
    }
}

function checkPhoneInput() {
    const form_group = getParentElement(phoneNum, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    let data = phoneNum.value;
    let check1 = data ? true:false;
    let regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let check2 = regex.test(data) ? true:false;
    if(!check1) {
        errorSpan.innerText = "Đây là thông tin bắt buộc";
        phoneNum.classList.add("invalid");
        return false;
    }
    else if(!check2) {
        errorSpan.innerText = "Vui lòng cung cấp sđt thật";
        phoneNum.classList.add("invalid");
        return false;
    }
    else {
        errorSpan.innerText = "";
        phoneNum.classList.remove("invalid");
        return true;
    }
    
}

function checkAddressInput() {
    const form_group = getParentElement(address, ".form-group");
    const errorSpan = form_group.querySelector(".form-messege");
    let data = address.value;
    let check1 = data ? true:false;
    if(!check1) {
        errorSpan.innerText = "Đây là thông tin bắt buộc";
        address.classList.add("invalid");
        return false;
    }
    else {
        errorSpan.innerText = "";
        address.classList.remove("invalid");
        return true;
    }
}


// ==================================================== //
// ------------ NAVIGATE PRODUCT DETAILS -------------- //
// ==================================================== //

function productDetailNaviagte() {
    const productDetailBtns = document.querySelectorAll(".product_item-detailBtn");
    console.log(productDetailBtns)
    productDetailBtns.forEach(function(item) {
        item.onclick = function() {
            console.log("clicked")
            const productItem = getParentElement(item, ".product_items");
            const productID = productItem.getAttribute("data-id");
            window.location.href = `./product_details/product_details.html?product_id=${productID}`;
        }
    })
}

// const productDetailBtns = document.querySelectorAll(".product_item-detailBtn");
// console.log(productDetailBtns)
// productDetailBtns.forEach(function(item) {
//     item.onclick = function() {
//         console.log("clicked")
//         const productItem = getParentElement(item, ".product_items");
//         const productID = productItem.getAttribute("data-id");
//         window.location.href = `./product_details/product_details.html?product_id=${productID}`;
//     }
// })  