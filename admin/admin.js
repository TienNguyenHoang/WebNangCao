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
                categories.splice(index, 1)
                localStorage.setItem("categories", JSON.stringify(categories))
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
            <div class="product_list_content data-id="${item.id}">
                <div class="product_list_items">
                ${item.name}
                </div>
                <div class="product_list_items"><span style="color:var(--theme-color)">${item.price}</span></div>
                <div class="product_list_items">${item.quantity}</div>
                <div class="product_list_items">
                    <i class="fa-solid fa-trash product_delelte_btn"></i>
                    <i class="fa-solid fa-pen-to-square product_update_btn"></i>
                </div>
            </div>
        `
    })
    productList.innerHTML = str;
}

const productModal = document.querySelector(".product_modal")
const productAddBtn = document.querySelector("#product_add_btn")
const productConfirmBtn = document.querySelector("#product_confirm_btn")
const productCancelBtn = document.querySelector("#product_cancel_btn")
const productCategory = document.querySelector("#product_category_selection")
const productFile = document.querySelector("#product_img")


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
    productModal.classList.remove("product_modal_hide")
    document.querySelector("#product_id").innerText = `ID sản phẩm: ${autoGenerateProductId()}`
    productFile.value = null
    document.querySelector(".img_review").removeAttribute("style")
}

productCancelBtn.onclick = () => {
    productModal.classList.add("product_modal_hide")
}

productConfirmBtn.onclick = () => {
    // check required input fields
    // add to products arr in first index(for render)
}


function renderProductCategory() {
    let str = ""
    categories.forEach((item) => {
        str += `
            <option value="${item.categoryID}">${item.categoryName}</option>
        `
    })
    productCategory.innerHTML = str;
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

