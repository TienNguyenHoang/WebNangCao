let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let userAccounts = localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")) : [];
let orderNoteList = localStorage.getItem("orderNoteList") ? JSON.parse(localStorage.getItem("orderNoteList")) : [];
let categories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [];

function getParentElement(element, parent) {
    while(element.parentElement) {
        if(element.parentElement.matches(parent)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    renderOrderNotes()
    changeOrderNoteStatus()
    renderProducts()
    renderProductCategory()
    renderCategories()
    renderAccount()
});


// ============================================ //
// ---------------- SIDEBAR ------------------- //
// =========================================== //

const sideBarMenuItems = document.querySelectorAll(".sidebar_menu-items")
const tabs = document.querySelectorAll(".tabs")
sideBarMenuItems.forEach((item) => {
    item.onclick = () => {
        document.querySelector(".menu_active").classList.remove("menu_active")
        const id = item.classList[1]
        tabs.forEach((i) => {
            i.classList.add("tab_hide")
            if(i.classList.contains(id)) {
                i.classList.remove("tab_hide")
            }
        })
        item.classList.add("menu_active")
    }
})


// =========================================== //
// ---------------- ORDERNOTE ---------------- //
// =========================================== //


function renderOrderNotes() {
    const orderNoteListContent = document.querySelector(".orderNote_list_content")
    orderNoteList.forEach((item) => {
        const tt = (item.status === "Chưa xử lý") ? "Chưa xử lý" : "Đã xử lý"
        const tt2 = (item.status === "Chưa xử lý") ? "Đã xử lý" : "Chưa xử lý"
        const orderDivOverview = document.createElement("div")
        const orderDivDetail = document.createElement("div")
        orderDivOverview.classList.add("orderNote_overView")
        if(tt === "Chưa xử lý") orderDivOverview.classList.add("background_red")
        else orderDivOverview.classList.add("background_blue")
        orderDivDetail.classList.add("orderNote_details", "orderNote_details-hide");
        orderDivOverview.innerHTML = `
            <div class="orderNote_list_items">${item.orderNoteID}</div>
            <div class="orderNote_list_items">${item.date}</div>
            <div class="orderNote_list_items">
                <select class="orderNote_selection">
                    <option value="${tt}" selected>${tt}</option>
                    <option value="${tt2}">${tt2}</option>
                </select>
            </div>
            <div class="orderNote_list_items">${item.totalPrice} đ</div>
            <div class="orderNote_list_items orderNote_viewDetails">Chi tiết</div>
        ` 
        let str = ""
        let str1  = `
                <div class="orderNote_customerInfo">
                    <div>Tên khách hàng: ${item.customerName}</div>
                    <div>Địa chỉ: ${item.address}</div>
                    <div>Số điện thoại: ${item.phoneNumber}</div>
                </div>
            `
        item.buyItems.forEach((i) => {
            str += `
                <div class="orderNote_products">
                    <div class="orderNote_product_img" style="background-image: url(.${i.img})"></div>
                    <div class="orderNote_product_title">
                        <div class="orderNote_products_id">Mã sp: ${i.id}</div>
                        <div class="orderNote_products_name">${i.name}</div>
                    </div>
                    <div class="orderNote_products_price">Đơn giá: <span style="color: var(--theme-color)">${i.price} đ</span></div>
                    <div class="orderNote_products_quantity">SL: ${i.quantity}</div>
                </div>
                `
        })
        str1 += str
        orderDivDetail.innerHTML = str1
        orderNoteListContent.append(orderDivOverview, orderDivDetail)
    });
    orderNoteListContent.querySelectorAll(".orderNote_viewDetails").forEach((item) => {
        const orderNoteDetail = getParentElement(item, ".orderNote_overView").nextElementSibling;
        item.onclick = () => {
            if(orderNoteDetail.classList.contains("orderNote_details-hide")) {
                item.innerHTML = "Ẩn bớt"
            }
            else {
                item.innerHTML = "Chi tiết"
            }
            orderNoteDetail.classList.toggle("orderNote_details-hide")
        }
    })
}

// renderOrderNotes()

function changeOrderNoteStatus() {
    const orderNoteSelects = document.querySelectorAll(".orderNote_selection")
    orderNoteSelects.forEach((item) => {
        item.onchange = function() {
            const tt = item.value
            const orderNoteoverView = getParentElement(item, ".orderNote_overView")
            if(tt === "Chưa xử lý") {
                orderNoteoverView.classList.remove("background_blue")
                orderNoteoverView.classList.add("background_red")
            }
            else {
                orderNoteoverView.classList.remove("background_red")
                orderNoteoverView.classList.add("background_blue")
            }
            const index = orderNoteList.findIndex((i) => {return i.orderNoteID === parseInt(orderNoteoverView.children[0].innerText)})
            if(index !== -1) orderNoteList[index].status = tt
            localStorage.setItem("orderNoteList", JSON.stringify(orderNoteList))
        }
    })
}
// changeOrderNoteStatus()


// ============================================ //
// ---------------- CATEGORY ------------------ //
// ============================================ //


function renderCategories() {
    const categoryList = document.querySelector(".category_list")
    categoryList.innerHTML = ""
    let str = ""
    categories.forEach((item) => {
        str += `
            <div class="category_list_content">
                <div class="category_list_items category_id">${item.categoryID}</div>
                <div class="category_list_items">${item.categoryName}</div>
                <div class="category_list_items">
                    <i class="fa-solid fa-trash category_delelte_btn"></i>
                    <i class="fa-solid fa-pen-to-square category_update_btn"></i>
                </div>
            </div>
        `
    })
    categoryList.innerHTML = str;
    deleteCategory()
}
// renderCategories()

const categoryModal = document.querySelector(".category_modal")
const categoryAddBtn = document.querySelector("#category_add_btn")
const categoryCancelBtn = categoryModal.querySelector("#category_cancel_btn")
const categorySubmitBtn = categoryModal.querySelector("#category_confirm_btn")

categoryAddBtn.onclick = () => {
    categoryModal.classList.remove("category_modal_hide")
    document.querySelector("#category_id").value=""
    document.querySelector("#category_name").value=""
    document.querySelector(".messege").innerText = ""
}

categoryCancelBtn.onclick = () => {
    categoryModal.classList.add("category_modal_hide")
}

categorySubmitBtn.onclick = () => {
    let categoryId = document.querySelector("#category_id").value
    let categoryName = document.querySelector("#category_name").value
    let flag = true
    if(categoryId === "" || categoryName === "") {
        document.querySelector(".messege").innerText = "Không được để trống"
    }
    else {
        categories.forEach((item) => {
            if(item.categoryID === categoryId) {
                document.querySelector(".messege").innerText = "Mã id bị trùng"
                flag = false
            }
        })
        if(flag === true) {
            let categoryItem = {
                categoryID : categoryId,
                categoryName : categoryName
            }
            categories.push(categoryItem)
            localStorage.setItem("categories", JSON.stringify(categories))
            alert("Thêm danh mục mới thành công!")
            setTimeout(() => {
                categoryModal.classList.add("category_modal_hide")
            }, 1000);
        }
        renderCategories()
        renderProductCategory()
    }
}

function deleteCategory() {
    const categoryDeleteBtns = document.querySelectorAll(".category_delelte_btn")
    categoryDeleteBtns.forEach((item) => {
        item.onclick = () => {
            if(confirm("Bạn có chắc muốn xóa category này?") == true) {
                const categoryId = getParentElement(item, ".category_list_content").children[0].innerText
                const index = categories.findIndex((item)=>{return item.categoryID === categoryId})
                const deletedCate = categories.splice(index, 1)
                localStorage.setItem("categories", JSON.stringify(categories))
                if(deletedCate!=null) alert("Xóa danh mục thành công!")
                renderCategories()
            }
        }
    })

}


function updateCategory() {
    const categoryUpdateBtns = document.querySelectorAll(".category_update_btn")
    categoryUpdateBtns.forEach((item) => {
        item.onclick = () => {
            
        }
    })
}

// ======================================== //
// -------------- PRODUCT ----------------- //
// ======================================== //


function renderProducts() {
    const productList = document.querySelector(".product_list")
    productList.innerHTML = ""
    let str = ""
    products.forEach((item) => {
        str += `
            <div class="product_list_content" data-id="${item.id}">
                <div class="product_list_items">
                    <div class="product_bgImg" style="background-image: url(.${item.background_image})"></div>
                </div>
                <div class="product_list_items">${item.name}</div>
                <div class="product_list_items"><span style="color:var(--theme-color)">${item.price}</span></div>
                <div class="product_list_items">${item.quantity}</div>
                <div class="product_list_items">
                    <i class="fa-solid fa-trash product_delete_btn"></i>
                    <i class="fa-solid fa-pen-to-square product_update_btn"></i>
                </div>
            </div>
        `
    })
    productList.innerHTML = str
    deleteProduct()
    updateProduct()
}

// ------------ add product -------------- //

const productModal = document.querySelector(".product_modal")
const productModalForm = document.querySelector(".product_modal_form")
const productAddBtn = document.querySelector("#product_add_btn")
const productConfirmBtn = document.querySelector("#product_confirm_btn")
const productCancelBtn = document.querySelector("#product_cancel_btn")
const productCategory = document.querySelector("#product_category_selection")
const productFile = document.querySelector("#product_img")
const productName = document.querySelector("#product_name")
const productPrice = document.querySelector("#product_price")
const productQuantity = document.querySelector("#product_quantity")
const productDesc = document.querySelector("#product_description")
let product_form_action = ""

productFile.onchange = () => {
    let reader = new FileReader();
    reader.onload = (e) => {
        let str = e.target.result;
        let img = document.querySelector(".img_review")
        img.style.backgroundImage = `url(${str})`
    }
    reader.readAsDataURL(productFile.files[0]);
}

productAddBtn.onclick = () => {
    product_form_action = "add"
    productModal.classList.remove("product_modal_hide")
    document.querySelector("#product_id").innerText = `${autoGenerateProductId()}`
}

productCancelBtn.onclick = (e) => {
    e.preventDefault()
    productModal.classList.add("product_modal_hide")
    clearProductForm();
}

productModalForm.onsubmit = (e) => {
    // check required input fields
    // add to products arr in first index(for render)
    let flag = true
    let img=""
    let regex=/[!@#$%^&*(),.?":{}|<>]/gm
    e.preventDefault()
    if(regex.test(productName.value)){
        flag = false
        alert("Tên sản phẩm không chứa ký tự đặc biệt!")
        return
    }
    if(productPrice.value<0){
        flag = false
        alert("Giá sản phẩm phải >0")
        return
    }
    if(productQuantity.value<0){
        flag = false
        alert("Số lượng sản phẩm không hợp lệ")
        return
    }
    if(productCategory.value == "Chọn danh mục"){
        flag = false
        alert("Vui lòng chọn danh mục cho sản phẩm")
        return
    }
    if(productFile.value != "") {
        console.log(productFile.value)
        let fileName = productFile.files[0].name
        idxDot = fileName.lastIndexOf(".") + 1,
        extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            img = `./assets/products_img/${fileName}`
        } 
        else{
            alert("Only jpg/jpeg and png files are allowed!");
            file.value = "";  // Reset the input so no files are uploaded
            flag = false
            return
        }
    }
    else {
        img = "./assets/products_img/default.jpg"
    }
    if(flag == true) {
        switch (product_form_action) {
            case "add":
                product = {
                    id : autoGenerateProductId(),
                    name : productName.value,
                    price : productPrice.value + " đ",
                    quantity : productQuantity.value,
                    background_image : img,
                    categoryID : productCategory.value,
                    description : productDesc.value,
                }
                products.unshift(product)
                localStorage.setItem("products", JSON.stringify(products))
                renderProducts()
                alert("Tạo sản phẩm mới thành công!")
                setTimeout(() => {
                    productModal.classList.add("product_modal_hide")
                    clearProductForm();
                }, 1000);
                break;
            case "update":
                const index = products.findIndex((item)=>{return item.id == document.querySelector("#product_id").innerText})
                products[index].name = productName.value
                products[index].quantity = productQuantity.value
                products[index].price = productPrice.value
                products[index].description = productDesc.value
                products[index].categoryID = productCategory.value
                if(`url(.${products[index].background_image})` != document.querySelector(".img_review").style.backgroundImage){
                    products[index].background_image = productFile.value != "" ?
                     `./assets/products_img/${productFile.files[0].name}` : "./assets/products_img/default.jpg"
                }
                localStorage.setItem("products", JSON.stringify(products))
                renderProducts()
                alert("Cập nhật sản phẩm thành công!")
                setTimeout(() => {
                    productModal.classList.add("product_modal_hide")
                    clearProductForm();
                }, 1000);
                break;
            default:
                break;
        }
    }
}

function renderProductCategory() {
    let str = "<option value='Chọn danh mục'>Chọn danh mục</option>"
    categories.forEach((item) => {
        str += `
            <option value="${item.categoryID}">${item.categoryName}</option>
        `
    })
    productCategory.innerHTML = str;
}

function clearProductForm(){
    productFile.value = null
    document.querySelector(".img_review").removeAttribute("style")
    productName.value = ""
    productPrice.value = null
    productCategory.value = "Chọn danh mục"
    productQuantity.value = null
    productDesc.value = ""
}

function renderProductForm(productId){
    let product = products.find((item)=>{return item.id == productId})
    console.log(product)
    productName.value = product.name
    productPrice.value = parseInt(product.price.replace(/[ .đ]/gm,''))
    productQuantity.value = product.quantity
    productDesc.value = product.description
    productCategory.value = product.categoryID
    document.querySelector(".img_review").style.backgroundImage = `url(.${product.background_image})`
}

function autoGenerateProductId() {
    let num = 1
    let productId = ""
    let checkId
    const productIdArr = products.map((item) => {
        return item.id
    })
    products.forEach((item)=>{
        checkId = ""
        checkId += num
        if(productIdArr.includes(checkId)) num++
    })
    productId += num
    return productId
}

// --------- delete product ---------- //
function deleteProduct(){
    const deleteBtns = document.querySelectorAll(".product_delete_btn")
    deleteBtns.forEach((item)=> {
        item.onclick = () => {
            if(confirm("Bạn có chắc muốn xóa sản phẩm này?")==true){
                const productID = getParentElement(item, ".product_list_content").getAttribute("data-id")
                const deletedProduct = products.splice(products.findIndex(function(i) {return i.id === productID}),1)
                localStorage.setItem("products", JSON.stringify(products))
                renderProducts()
                if(deletedProduct!=null) alert("Xóa sản phẩm thành công!")
            }
        }
    })
}


// ------------ update product --------------- //
function updateProduct() {
    const updateBtns = document.querySelectorAll(".product_update_btn")
    updateBtns.forEach((item)=>{
        item.onclick=()=>{
            product_form_action = "update"
            const productId = getParentElement(item, ".product_list_content").getAttribute("data-id")
            productModal.classList.remove("product_modal_hide")
            document.querySelector("#product_id").innerText = productId
            renderProductForm(productId)
        }
    })
}

// =========================================//
// --------------- Account ---------------- //
// =========================================//

const accountModal = document.querySelector(".account_modal")
const accountForm = document.querySelector(".account_modal_form")
const accountAddBtn = document.querySelector("#account_add_btn")
const accountCancelBtn = document.querySelector("#account_cancel_btn")
const userName = document.querySelector("#account_id")
const Email = document.querySelector("#account_email")
const Pass = document.querySelector("#account_pass")
const accountType = document.querySelector("#account_type_selection")
let accountFormAction = ""

function renderAccount() {
    const accList = document.querySelector(".account_list")
    accList.innerHTML = ""
    let str = ""
    userAccounts.forEach((item) => {
        if(item.username == "admin") return
         // kiểm tra admin gốc=>không cho chỉnh sửa
        str += `
            <div class="account_list_content" data-id="${item.username}">
                <div class="account_list_items">${item.username}</div>
                <div class="account_list_items">${item.type == 1 ? "Quản trị":"Khách hàng"}</div>
                <div class="account_list_items"><span style="text-decoration: underline; cursor:pointer">Xem chi tiết</span></div>
                <div class="account_list_items">
                    <i class="fa-solid fa-trash account_delete_btn"></i>
                    <i class="fa-solid fa-pen-to-square account_update_btn"></i>
                </div>
            </div>
        `
    })
    accList.innerHTML = str;
    deleteAccount()
    updateAccount()
}

function deleteAccount(){
    const deleteBtns = document.querySelectorAll(".account_delete_btn")
    deleteBtns.forEach((item)=>{
        item.onclick = ()=>{
            if(confirm("Bạn có chắc muốn xóa sản phẩm này?")==true){
                const accId = getParentElement(item, ".account_list_content").getAttribute("data-id")
                const deletedAccount = userAccounts.splice(userAccounts.findIndex(function(i) {return i.username === accId}),1)
                localStorage.setItem("userAccounts", JSON.stringify(userAccounts))
                renderAccount()
                if(deletedAccount!=null) alert("Xóa tài khoản thành công!")
            }
        }
    })
}
function updateAccount(){
    const updateBtns = document.querySelectorAll(".account_update_btn")
    updateBtns.forEach((item)=>{
        item.onclick=()=>{
            accountFormAction = "update"
            const accId = getParentElement(item, ".account_list_content").getAttribute("data-id")
            userName.value = accId
            userName.readOnly = true
            createAccountForm(accId)
            accountModal.classList.remove("account_modal_hide")
        }
    })
}

accountAddBtn.onclick=()=>{
    accountModal.classList.remove("account_modal_hide")
    accountFormAction = "add"
}
accountCancelBtn.onclick=(e)=>{
    e.preventDefault()
    accountModal.classList.add("account_modal_hide")
    clearAccountForm()
}

function clearAccountForm(){
    userName.value=""
    userName.readOnly = false
    Email.value=""
    Pass.value=""
    accountType.value=0
}

function createAccountForm(accId){
    const acc = userAccounts.find((item)=>{return item.username == accId})
    Email.value = acc.email
    Pass.value = acc.password
    accountType.value = acc.type
}

function checkExitsAccId(accId){
    return userAccounts.some((item)=>{return item.username == accId})
}

accountForm.onsubmit=(e)=>{
    e.preventDefault()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regex.test(Email.value)){
        alert("Vui lòng nhập đúng định dạng email!")
        return
    }
    if(Pass.value.length<6){
        alert("Mật khẩu có độ dài từ 6 ký tự trở lên!")
        return
    }
    switch (accountFormAction) {
        case "add":
            if(checkExitsAccId(userName.value)){
                alert("Đã tồn tại một tên tài khoản như vậy!")
                return
            }
            let acc = {
                username: userName.value,
                password: Pass.value,
                type: accountType.value,
                email: Email.value
            }
            userAccounts.unshift(acc)
            localStorage.setItem("userAccounts", JSON.stringify(userAccounts))
            renderAccount()
            alert("Thêm tài khoản mới thành công!")
            setTimeout(() => {
                accountModal.classList.add("account_modal_hide")
                clearAccountForm()
            }, 1000);
            break;
        case "update":
            const index = userAccounts.findIndex((item)=>{return item.username == userName.value})
            userAccounts[index].email = Email.value
            userAccounts[index].password = Pass.value
            userAccounts[index].type = accountType.value
            localStorage.setItem("userAccounts", JSON.stringify(userAccounts))
            renderAccount()
            alert("Cập nhật tài khoản thành công!")
            setTimeout(() => {
                accountModal.classList.add("account_modal_hide")
                clearAccountForm()
            }, 1000);
            break;
        default:
            break;
    }
}