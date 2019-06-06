

// Slider

let slides = document.querySelectorAll('.slide');
let slideCount = 0;
let playing = true;
let slider = setInterval(nextSlide,10000);
//let next  =document.querySelector(".arrow_right");
//next.addEventListener("click",nextSlide);
//let previous = document.querySelector(".arrow_left");
//previous.addEventListener("click",previousSlide);
let dotList = document.querySelectorAll(".dot");
for(let i = 0;i<dotList.length;i++) {
    dotList[i].dataId = i;
}
let slideList = document.querySelectorAll(".slide");
for(let i = 0; i<slideList.length;i++) {
    slideList[i].dataId = i;
}
let slide = document.querySelector('.slide.show');
for(let i = 0;i<dotList.length;i++) {
    if(slide.dataId == dotList[i].dataId) {
        dotList[i].style.backgroundColor ="#f14a58";
    }
    else {
        dotList[i].style.backgroundColor = "#d2d2d2";
    }
}


let main = document.getElementById("slider");

main.onclick = function(e) {
  let target = e.target;
  //console.log(target);
    if(target.className == "arrow_right") {
        target.addEventListener("click",nextSlide);
    }
    else if(target.className == "arrow_left") {
        target.addEventListener("click",previousSlide);
    }

    if(target.className =="dot") {
        let dataId = target.dataId;
        let dotList = document.querySelectorAll(".dot");
        for(let i = 0;i<dotList.length;i++) {
            if(target.dataId == dotList[i].dataId) {
                dotList[i].style.backgroundColor = "#f14a58";
            }
            else {
                dotList[i].style.backgroundColor = "#d2d2d2";
            }
        }
        pauseSlide();
        slideShow(dataId);
        runSlide();
    }
};



function slideShow(n) {
    slides[slideCount].className = "slide";
    slideCount = (n+slides.length)%slides.length;
    slides[slideCount].className = "slide show";
    let slide = slides[slideCount];
    for(let i = 0;i<dotList.length;i++) {
        if(slide.dataId == dotList[i].dataId) {
            dotList[i].style.backgroundColor ="#f14a58";
        }
        else {
            dotList[i].style.backgroundColor = "#d2d2d2";
        }
    }
}
function nextSlide() {
    pauseSlide();
    slideShow(slideCount+1);
    runSlide()
}
function previousSlide() {
    pauseSlide();
    slideShow(slideCount-1);
    runSlide();
}
function runSlide() {
    playing =true;
    slider = setInterval(nextSlide,10000);
}

function pauseSlide() {
    playing = false;
    clearInterval(slider);
}




// Slider END

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
        return true;
    }
    else {
        menu.className = "header_nav clearfix";
        search.style.display = "none";
        img.src =img.src.slice(0,img.src.length-8)+"menu.png";
        return false
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

function replaceArrivals() {
    let nikeRed = document.querySelector(".nike_red img");
    if(window.innerWidth >=768 && window.innerWidth <1024) {
        let img = nikeRed;
        img.src = img.src.slice(0,img.src.length-7)+"768.png";
    }
    else if(window.innerWidth<768) {
        let img = nikeRed;
        img.src = img.src.slice(0,img.src.length-7)+"375.png";

    }
    else {
        let img = nikeRed;
        img.src = img.src.slice(0,img.src.length-7)+"130.png";
    }
    let hat = document.querySelector(".hat_caps img");

    if(window.innerWidth >=768 && window.innerWidth <1024) {
        let img = hat;
        img.src = img.src.slice(0,img.src.length-7)+"768.png";
    }
    else if(window.innerWidth<768) {
        let img = hat;
        img.src = img.src.slice(0,img.src.length-7)+"375.png";

    }
    else {
        let img = hat;
        img.src = img.src.slice(0,img.src.length-7)+"130.png";
    }
}

function replaceNewArrivals() {
    let arrivals = document.querySelectorAll(".new_arrivals_container img");
   // console.log(arrivals);
    for(let i =0;i<arrivals.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = arrivals[i];
            // console.log(img);
            img.src = img.src.slice(0,img.src.length-7)+"768.png";
        }
        else if(window.innerWidth<768) {
            let img = arrivals[i];
            img.src = img.src.slice(0,img.src.length-7)+"375.png";

        }
        else {
            let img = arrivals[i];
            img.src = img.src.slice(0,img.src.length-7)+"130.png";
        }
    }
}

function responsiveSlider() {
    let slides = document.querySelectorAll(".slide img");
    //console.log(slides);
    for(let i =0;i<slides.length;i++) {
        if(window.innerWidth >=768 && window.innerWidth <1024) {
            let img = slides[i];
           // console.log(img.src);
            img.src = img.src.slice(0,img.src.length-7)+"768.jpg";
        }
        else if(window.innerWidth<768) {
            let img = slides[i];
            img.src = img.src.slice(0,img.src.length-7)+"375.jpg";

        }
        else {
            let img = slides[i];
            img.src = img.src.slice(0,img.src.length-7)+"130.jpg";
        }
    }
}
//console.log(slides);
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
    else if( window.innerWidth< 768) {
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
    if ( window.innerWidth < 768) {
        let logo = document.querySelector("#logo");
        //console.log(logo);
        logo.src = logo.src.slice(0,logo.src.length-7)+"375.png";
    }
    else {
        let logo = document.querySelector("#logo");
        logo.src = logo.src.slice(0,logo.src.length-7)+"130.png";
    }
}
function getCartData(){
    return JSON.parse(localStorage.getItem('item1'));
}
function setCartData(o){
    localStorage.setItem('item1', JSON.stringify(o));
    return false;
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




function resize(){
    replaceLogo();
    responsiveSlider();
    replaceArrivals();
    replaceNewArrivals();
    redactTextFooter();
    responsiveSearch();
    replaceMenu();
}
resize();
window.addEventListener("resize",resize);

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

    //let counter = getCounter() || 0;
    //let shopCounter = document.querySelector(".shop_counter");
//console.log(getCounter());
    //shopCounter.innerHTML = "("+counter+")";
}
redactBagForShopping();