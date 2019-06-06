localStorage.clear();
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

function redactTextFooter() {
    if (window.innerWidth >= 768 && window.innerWidth< 1024) {
        let text2 = document.querySelector(".for_mobile");
        text2.innerHTML = "";
        let text1 = document.querySelector(".social_text");
        //console.log(text1);
        text1.innerHTML = "";
        let phone = document.querySelector(".footer_container_phone");
        text1.innerHTML = phone.innerHTML;
    }
    else if(window.innerWidth< 768) {
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
           // console.log(text2);
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
    if  (window.innerWidth < 768) {
        let logo = document.querySelector("#logo");
        //console.log(logo);
        logo.src = logo.src.slice(0,logo.src.length-7)+"375.png";
    }
    else {
        let logo = document.querySelector("#logo");
        logo.src = logo.src.slice(0,logo.src.length-7)+"130.png";
    }
}
function replaceItemImages() {
    let images = document.querySelectorAll(".for_img img");
    // console.log(images);
    for(let i =0;i<images.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = images[i];
             console.log(img);
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

let main = document.querySelector(".main_container");
main.onclick = function (e) {
    let target = e.target;
    if(target.className == "to_remove") {
        let parent = target.parentNode.parentNode;
        parent.remove();
        checkShop();
        let price = parent.querySelector(".item_price").innerHTML.slice(1);
        let totalSum = document.querySelector(".info_price p:nth-of-type(2)");
        let reg =/([\s])/g;
        let num= totalSum.innerHTML.slice(1).replace(reg,"");
        let rez = +num - +price;
        totalSum.innerHTML = "£" +rez;
        document.querySelector(".total_price").innerHTML = "Bag "+"£" +rez;
        let bagCounter = document.querySelector(".shop_counter").innerHTML;
        bagCounter = bagCounter.slice(1,bagCounter.length-1);
        rez = bagCounter-1;
        console.log(rez);
        document.querySelector(".shop_counter").innerHTML = "("+rez+")";
    }
};

let container = document.querySelector(".flex_container");
container.onclick = function (e) {
    let target = e.target;
    //console.log(target);
    let div = document.querySelector(".text_for_clear");
    if(target.className == 'btn_to_clear' && div == null) {
        let items = document.querySelectorAll(".bag_item");
        for(let i =0;i<items.length;i++) {
            items[i].remove();
        }
        localStorage.clear();
        shopBag();
        createTextForClear();
        let totalSum = document.querySelector(".info_price p:nth-of-type(2)");
        totalSum.innerHTML = "£0";

    }
    else if(target.tagName == "BUTTON" && div == null) {
        let items = document.querySelectorAll(".bag_item");
        for(let i =0;i<items.length;i++) {
            items[i].remove();
        }
        localStorage.clear();
        shopBag();
        createTextForBuy();
    }
};
function checkShop() {
    if(document.querySelector(".bag_item") == null) {
        createTextForClear();
    }
}

function createTextForBuy() {
    let div = document.createElement("div");
    div.className = "text_for_clear";
    let p = document.createElement("p");
    p.innerHTML = "Thank you for your purchase";
    div.appendChild(p);
    document.querySelector(".main_container").appendChild(div);
}

function createTextForClear() {
    let div = document.createElement("div");
    div.className = "text_for_clear";
    let p = document.createElement("p");
    p.innerHTML = "Your shopping bag is empty. Use Catalog to add new items";
    div.appendChild(p);
    document.querySelector(".main_container").appendChild(div);
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

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
function getCounter() {
    return JSON.parse(localStorage.getItem("counter"));
}
function setCounter(num) {
    localStorage.setItem("counter", JSON.stringify(num));
    return false;
}
function setCartData(o){
    localStorage.setItem("cart", JSON.stringify(o));
    return false;
}

//let counter = document.querySelector(".shop_counter");
//let numOfItem = document.querySelectorAll(".num_of_item");
//console.log(numOfItem);
//let sum = 0;
//for(let i = 0;i<numOfItem.length;i++) {
//    sum+= parseInt(numOfItem[i].innerHTML.slice(9));
//    console.log(sum);
//}
//counter.innerHTML = "("+sum+")";
//let bagCounter = getCounter() || 0;
//setCounter(bagCounter+sum);
//counter.innerHTML = getCounter();
let items = document.querySelectorAll(".for_inform");
for(let i =0;i<items.length;i++) {
    let item = getCartData() || {};
    let arr = [];
    let name = items[i].querySelector(".item_name").innerHTML;
    let price = items[i].querySelector(".item_price").innerHTML;
    let color = items[i].querySelector(".item_color").innerHTML;
    let size = items[i].querySelector(".item_size").innerHTML;
    let num = items[i].querySelector(".num_of_item").innerHTML;
    if(item.hasOwnProperty(name)){

    }
    else {
        item[name] = [price,color,size,num];
        setCartData(item);
    }
}
function shopBag() {
    let counter = document.querySelector(".shop_counter");
    let totalSum = document.querySelector(".total_price");
    let data = getCartData();
    let sum = 0;
    let countBag = 0;
    for(let key in data) {
        let arr = data[key];
        console.log(arr);
        sum += parseFloat(arr[0].slice(1));
        countBag += parseInt(arr[3].slice(9));
    }
    counter.innerHTML = "("+countBag +")";
    totalSum.innerHTML = "Bag £"+sum;
}
shopBag();
//End for localStore
//console.log(items);


