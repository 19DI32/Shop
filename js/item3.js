function resize(){
    replaceLogo();
    redactTextFooter();
    replaceItemImages();
    responsiveSearch();
    replaceMenu();
}
resize();
window.addEventListener("resize",resize);
let btn = document.querySelector("#menu");
console.log(btn);
btn.addEventListener("click",responsiveMenu);
function responsiveMenu() {
    let img = document.querySelector("#menu");
    let search = document.querySelector("#search");
    let menu = document.querySelector(".header_nav");
    if(menu.className == "header_nav clearfix") {
        menu.className +=" responsive";
        search.style.display = "block";
        img.src =img.src.slice(0,img.src.length-8)+"clos.png";
    }
    else {
        menu.className = "header_nav clearfix";
        search.style.display = "none";
        img.src =img.src.slice(0,img.src.length-8)+"menu.png";
    }

    console.log(menu.className);
}

function responsiveSearch() {
    let search = document.querySelector("#search");
    //console.log(search);
    if (window.innerWidth >= 768 && window.innerWidth< 1024) {
        search.placeholder = "";
        search.className = "search";
        search.style.display = "block";
        // search.style.position = "static";
        let searchCheack = true;
        // let searchImg = document.querySelector("#search img");
        search.onclick = function () {
            if(searchCheack) {
                console.log("works1234");
                search.className = "search2";
                search.placeholder = "Style Name";
                searchCheack = false
            }
            else {
                console.log("wo");
                search.className = "search";
                search.placeholder = "";
                searchCheack = true;
            }
        }
    }
    else if (window.innerWidth < 768) {
        let menu = document.querySelector("#menu");
        let src = menu.src.slice(menu.src.length-8);
        console.log(src);
        if(src =="clos.png") {
            search.style.display = "block";
            search.className = "";
            search.placeholder = "Style Name";
            search.onclick = function () {
                search.placeholder = "";
            }

        }
        else {
            console.log("search");
            search.style.display = "none";
            search.className = "";
            search.onclick = function () {
                search.placeholder = "";
            }
        }
    }
    else {
        search.style.display = "block";
        search.className = "search3";
        search.onclick = function () {
            search.placeholder = "";
        }
    }
}

function replaceMenu() {
    let img = document.querySelector("#menu");
    let search = document.querySelector("#search");
    let menu = document.querySelector(".header_nav");
    if(window.innerWidth >=768 && window.innerWidth <1024) {
        menu.className = "header_nav clearfix";
        search.style.display = "none";
        img.src =img.src.slice(0,img.src.length-8)+"menu.png";
        return false
    }
}

function replaceItemImages() {
    let images = document.querySelectorAll(".container_img img")
    console.log(images);
    for(let i =0;i<images.length;i++) {
        if(window.innerWidth >768 && window.innerWidth <1024) {
            let img = images[i];
            // console.log(img);
            img.src = img.src.slice(0,img.src.length-7)+"768.png";
        }
        else if( window.innerWidth>375 && window.innerWidth<768) {
            let img = images[i];
            img.src = img.src.slice(0,img.src.length-7)+"375.png";

        }
        else {
            let img = images[i];
            img.src = img.src.slice(0,img.src.length-7)+"130.png";
        }
    }


}



function redactTextFooter() {
    if (window.innerWidth > 768 && window.innerWidth< 1024) {
        let text2 = document.querySelector(".for_mobile");
        text2.innerHTML = "";
        let text1 = document.querySelector(".social_text");
        //console.log(text1);
        text1.innerHTML = "";
        let phone = document.querySelector(".footer_container_phone");
        text1.innerHTML = phone.innerHTML;
    }
    else if(window.innerWidth > 375 && window.innerWidth< 768) {
        let text2 = document.querySelector(".for_mobile");
        if(text2.innerHTML === "") {
            let a1 = document.createElement("a");
            a1.innerHTML = "Legal notice";
            text2.appendChild(a1);
            let a2 = document.createElement("a");
            a2.innerHTML = "Privacy policy";
            text2.appendChild(a2);
            let a3 = document.createElement("a");
            a3.innerHTML = "Site map";
            text2.appendChild(a3);
            let twi = document.createElement("img");
            twi.src = "img/twi.png";
            text2.appendChild(twi);

            let fb = document.createElement("img");
            fb.src = "img/fb.png";
            text2.appendChild(fb);
        }
        else {
            console.log(text2);
        }


    }
    else {
        let text1 = document.querySelector(".social_text");
        let text2 = document.querySelector(".for_mobile");
        text2.innerHTML = "";
        //console.log(text1);
        text1.innerHTML = "";
        text1.innerHTML = "We have our own delivery service which operates in 23 major European cities.Delivery time-3-5 days";

    }
}

function replaceLogo() {
    if (window.innerWidth > 375 && window.innerWidth < 768) {
        let logo = document.querySelector("#logo");
        //console.log(logo);
        logo.src = logo.src.slice(0,logo.src.length-7)+"375.png";
    }
    else {
        let logo = document.querySelector("#logo");
        logo.src = logo.src.slice(0,logo.src.length-7)+"130.png";
    }
}


let imageGallery = document.querySelector(".flex_container");
console.log(imageGallery);

imageGallery.onclick = function (e) {
    let target = e.target;
    console.log("works");
    let colors = document.querySelectorAll(".item_color span");
    for(let i =0;i<colors.length;i++) {
        colors[i].dataId = i;
    }
    if(target.className == "item_color_variant") {

        for (let i = 0; i < colors.length; i++) {
            if (colors[i].dataId == target.dataId) {
                colors[i].className = "item_color_variant_active";
            }
            else {
                colors[i].className = "item_color_variant";
            }

        }
    }

    let sizes = document.querySelectorAll(".item_size span");
    for(let i =0;i<sizes.length;i++) {
        sizes[i].dataId = i;
    }
    if(target.className == "item_size_variant") {

        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i].dataId == target.dataId) {
                sizes[i].className ="item_size_variant_active";
            }
            else {
                sizes[i].className ="item_size_variant";
            }

        }
    }
    if(target.className == "list_images_img") {
        let images = document.querySelectorAll(".list_images img");
        console.log(images);
        for(let i = 0;i<images.length;i++) {
            images[i].dataId = i;
        }
        let listDiv = document.querySelectorAll(".div_to_active");
        for (let i =0;i<listDiv.length;i++) {
            listDiv[i].dataId = i;
        }
        for(let i = 0;i<images.length;i++) {
            console.log(images[i].dataId);
            console.log(target.dataId);
            if(images[i].dataId == target.dataId) {
                listDiv[i].className = "div_to_active active";
                // listDiv[i].classList+=" active";
                console.log(target.src);
                document.querySelector(".main_img img").src = target.src;
            }
            else {
                //console.log("k232jl");
                listDiv[i].className = "div_to_active";
            }
        }

    }

};
// Записываем данные в LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('item1'));
}
function setCartData(o){
    localStorage.setItem('item1', JSON.stringify(o));
    return false;
}

let btnItem = document.querySelector(".add_to_bag");
btnItem.onclick =function () {
    let arr = getCartData()||[];
    let item = {};
    //console.log(getCartData());
    let size = document.querySelector(".item_size_variant_active").innerHTML;
    let color = document.querySelector(".item_color_variant_active").innerHTML;
    let price = document.querySelector(".item_price").innerHTML;
    let src = document.querySelector(".main_img img").src;
    let name = document.querySelector(".item_name").innerHTML;
    item.name = name;
    item.size = size;
    item.color = color;
    item.price = price;
    item.src = src;
    item.num = 1;
    //let x = true;
    //console.log(item);
    if(arr.length>0){
        let check =function (arr,item,name,size,color) {
            for(let i =0;i<arr.length;i++) {
                if(arr[i].name == name && arr[i].size == size && arr[i].color == color) {
                    let x = arr[i].num++;
                    item.num = x;
                    return true;
                }
            }
            return false;
        };
        if(!check(arr,item,name,size,color)) {
            arr.push(item);
        }
    }
    else {
        arr.push(item);
    }
    setCartData(arr);
    redactBagForShopping();

};

//End

function redactBagForShopping() {
    let shopBag = document.querySelector(".total_price");
    let shopCounter = document.querySelector(".shop_counter");
    console.log(shopCounter.innerHTML);
    let totalPrice = getCartData() || 0;
    if(totalPrice == 0){
        shopBag.innerHTML = "Bag";
    }
    else {
        let sum = 0;
        let counter = 0;
        for(let key in totalPrice) {
            sum=sum +parseFloat(totalPrice[key].price.slice(1))*totalPrice[key].num || 0;
            counter=counter+parseInt(totalPrice[key].num) || 0;
        }
        console.log(counter);
        shopBag.innerHTML = "Bag $"+sum;
        shopCounter.innerHTML = "("+counter+")";
    }

    //let counter = getCounter() || 0;
    //let shopCounter = document.querySelector(".shop_counter");
//console.log(getCounter());
    //shopCounter.innerHTML = "("+counter+")";
}
redactBagForShopping();