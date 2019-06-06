function resize(){
    responsiveFilters();
    replaceLogo();
    redactTextFooter();
    replaceItemImages();
    replaceImages();
   // redactMain();
    responsiveSearch();
    replaceMenu();
    responsiveFilters();
}
resize();
window.addEventListener("resize",resize);

let btn = document.querySelector("#menu");
//console.log(btn);
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


function replaceItemImages() {
    let images = document.querySelectorAll(".row img");
   // console.log(images);
    for(let i =0;i<images.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = images[i];
            // console.log(img);
            img.src = img.src.slice(0,img.src.length-7)+"768.png";
        }
        else if(window.innerWidth<768) {
            let img = images[i];
            img.src = img.src.slice(0,img.src.length-7)+"375.png";

        }
        else {
            let img = images[i];
            img.src = img.src.slice(0,img.src.length-7)+"130.png";
        }
    }

    let images2 = document.querySelectorAll(".row2 img");
   // console.log("works");
    for(let i =0;i<images2.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = images2[i];
           // console.log(img);
            img.src = img.src.slice(0,img.src.length-7)+"768.png";
        }
        else if(window.innerWidth<768) {
            let img = images2[i];
            img.src = img.src.slice(0,img.src.length-7)+"375.png";

        }
        else {
            let img = images2[i];
            img.src = img.src.slice(0,img.src.length-7)+"130.png";
        }
    }

}

function replaceImages() {
    let images = document.querySelectorAll(".container_img img");
    //console.log(images);
    for(let i =0;i<images.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = images[i];
            // console.log(img);
            img.src = img.src.slice(0,img.src.length-7)+"768.png";
        }
        else if(window.innerWidth<768) {
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
    if (window.innerWidth >=768 && window.innerWidth< 1024) {
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
    if (window.innerWidth < 768) {
        let logo = document.querySelector("#logo");
        //console.log(logo);
        logo.src = logo.src.slice(0,logo.src.length-7)+"375.png";
    }
    else {
        let logo = document.querySelector("#logo");
        logo.src = logo.src.slice(0,logo.src.length-7)+"130.png";
    }
}

//для создания div уже не нужно
function redactMain() {
    if (window.innerWidth >= 768 && window.innerWidth< 1024) {
        let row2 = document.querySelector(".row2");
        if(row2.children.length<9) {
        //console.log(row2.children.length>8);
        let div = document.createElement("div");
        let img = document.createElement("img");
        let article = document.createElement("article");
        img.src = "img/katalog/fon_4_768.png";
        article.appendChild(img);
        let span = document.createElement("span");
        article.appendChild(span);
        let a = document.createElement("a");
        a.innerHTML = "View item";
        a.href = "item.html";
        span.appendChild(a);
        div.appendChild(article);
        let p = document.createElement("p");
        p.className = "item_name";
        p.innerHTML = "Only Skinny Jeans";
        div.appendChild(p);
        let p2 = document.createElement("p");
        p2.className = "item_price";
        p2.innerHTML = "£65.50";
        div.appendChild(p2);
        row2.prepend(div);}
        else if(row2.children.length >9) {
            row2.children[0].remove();
        }
    }
    else if (window.innerWidth< 768)  {
        let row2 = document.querySelector(".row2");
        if(row2.children.length<9) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = "img/katalog/fon_4_768.png";
        let article = document.createElement("article");
        img.src = "img/katalog/fon_4_768.png";
        article.appendChild(img);
        let span = document.createElement("span");
        article.appendChild(span);
        let a = document.createElement("a");
        a.innerHTML = "View item";
        a.href = "item.html";
        span.appendChild(a);
        div.appendChild(article);
        let p = document.createElement("p");
        p.className = "item_name";
        p.innerHTML = "Only Skinny Jeans";
        div.appendChild(p);
        let p2 = document.createElement("p");
        p2.className = "item_price";
        p2.innerHTML = "£65.50";
        div.appendChild(p2);
        row2.prepend(div);
        let div2 = document.createElement("div");
        let img2 = document.createElement("img");
        img2.src = "img/katalog/fon_3_768.png";
        let article2 = document.createElement("article");
        article2.appendChild(img2);
        let span2 = document.createElement("span");
        article2.appendChild(span2);
        let a2 = document.createElement("a");
        a2.innerHTML = "View item";
        a2.href = "item.html";
        span2.appendChild(a2);
        div2.appendChild(article2);
        let p3 = document.createElement("p");
        p3.className = "item_name";
        p3.innerHTML = "Turtle Neck Jumper in Rib";
        div2.appendChild(p3);
        let p4 = document.createElement("p");
        p2.className = "item_price";
        p2.innerHTML = "£130.25";
        div2.appendChild(p4);
        row2.prepend(div2);
        }
    }
    else {
        let row2 = document.querySelector(".row2");
        if(row2.children.length==9) {
            row2.children[0].remove();
        }
        else if(row2.children.length == 10) {
            row2.children[0].remove();
            row2.children[1].remove();
        }
    }
}

let filter = document.querySelector(".filter");
filter.onclick = function (e) {
    let target = e.target;
    //console.log(target);
    if(target.tagName == "A") {
        let divList = document.querySelectorAll(".row2 div");
        for(let i =0;i<divList.length;i++) {

            if(divList[i].getAttribute("data-color")) {
                let divList = document.querySelectorAll(".row2 div");
                for(let i =0;i<divList.length;i++) {
                    if(divList[i].getAttribute("data-color")!=target.innerHTML && target.innerHTML !="Not selected") {
                        divList[i].style.display ="none";
                        }
                        else {
                            divList[i].style.display = "block";
                        }
                    }
                }
            }


        let str = target.innerHTML;
        //console.log(str);
        let p = document.createElement("p");
        p.className = "selected";
        p.innerHTML = str;
        let parent = target.parentNode.parentNode.parentNode;
        if(parent.className == "dropDown_Category"){
            parent.appendChild(p);
            parent.style.backgroundColor = "#f7f7f7";
            let list = parent.querySelector("ul");
            list.className = "droDown_list2";
            let name =parent.querySelector(".category_name");
            name.className = "category_name_selected";
            let btn = parent.querySelector("img");
            btn.onclick =function () {
                list.className = "droDown_list";
                name.className = "category_name";
                parent.removeChild(p);
            }
        }

    }
};

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
        //console.log(src);
        if(src =="clos.png") {
            search.style.display = "block";
            search.className = "";
            search.placeholder = "Style Name";
            search.onclick = function () {
                search.placeholder = "";
            }

        }
        else {
            //console.log("search");
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

function responsiveFilters() {
    let oldMenu = document.querySelector(".filter");
    if(window.innerWidth< 1024) {

        if(document.querySelector(".filter_name") == null) {
            console.log("1");
        oldMenu.style.display = "none";
        let nav = document.createElement("nav");
        let div =document.createElement("div");
        div.className = "filter_name";
        let p =document.createElement("p");
        let nameList = document.querySelectorAll(".category_name a");
        for(let i =0;i<nameList.length;i++) {
            let a =document.createElement("a");
            a.className = "kat_name";
            a.dataId = i;
            a.innerHTML =nameList[i].innerHTML +", ";
            p.appendChild(a);
        }
        let img = document.createElement("img");
        let img2 =document.createElement("img");
        img2.style.float = "right";
        img2.src = document.querySelector("#menu").src.slice(0,img.src.length-8)+"clos.png";
        img.src = document.querySelector(".category_name img").src;
        p.className = "clearfix";
        p.appendChild(img);
        p.appendChild(img2);
        div.appendChild(p);
        let div2 = document.createElement('div');
        div2.className = "drop_list";
        div.appendChild(div2);
        div2.style.display = "none";
        img2.style.display = "none";
        let list = document.querySelectorAll(".droDown_list");

        for(let i =0;i<list.length;i++) {
            let ul =document.createElement("ul");
            ul.className = "drop_ul";
            ul.dataId = i;
            let p =document.createElement("p");
            p.className = "ul_p_name";
            p.innerHTML = list[i].previousElementSibling.querySelector("a").innerHTML;
            ul.appendChild(p);
            let aList = list[i].querySelectorAll(".dropDown_a");
            for(let i =0;i<aList.length;i++) {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.className = "drop_a";
                a.innerHTML = aList[i].innerHTML;
                a.onclick =function() {
                    let nameList = document.querySelectorAll(".kat_name");
                    for(let i =0;i<nameList.length;i++) {
                           if(nameList[i].dataId == ul.dataId) {
                               nameList[i].innerHTML = a.innerHTML;
                               nameList[i].style.color = "#f14a58";
                           }
                    }
                    let divList = document.querySelectorAll(".row2 div");
                    for(let i =0;i<divList.length;i++) {
                        if(divList[i].getAttribute("data-color")) {
                            let divList = document.querySelectorAll(".row2 div");
                            for(let i =0;i<divList.length;i++) {
                                if(divList[i].getAttribute("data-color")!=a.innerHTML && a.innerHTML !="Not selected") {
                                    divList[i].style.display ="none";
                                }else {
                                    divList[i].style.display = "block";
                                }
                            }
                        }
                    }


                };
                li.appendChild(a);
                ul.appendChild(li);
            }
            div2.appendChild(ul);
        }


        //console.log(div2);
        document.querySelector("main>header").appendChild(div);
            img.onclick =function () {
                img.style.display = "none";
                img2.style.display = "block";
                div2.style.display = "flex";
            };
            img2.onclick = function () {
                img2.style.display = "none";
                img.style.display = "inline";
                div2.style.display = "none";
            }
    }
    }
    else {
        if(document.querySelector(".filter_name") != null) {
            document.querySelector(".filter_name").remove();
            document.querySelector(".filter").style.display = "block";
        }
    }
}

function getCartData(){
    return JSON.parse(localStorage.getItem('item1'));
}
function setCartData(o){
    localStorage.setItem('item1', JSON.stringify(o));
    return false;
}

function redactBagForShopping() {
    let shopBag = document.querySelector(".total_price");
    let shopCounter = document.querySelector(".shop_counter");
    //console.log(shopCounter.innerHTML);
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
        //console.log(counter);
        shopBag.innerHTML = "Bag $"+sum;
        shopCounter.innerHTML = "("+counter+")";
    }
}
redactBagForShopping();
