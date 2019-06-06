
function resize(){
    replaceLogo();
    redactTextFooter();
    replaceItemImages();
    responsiveSearch();
    replaceMenu();
}
resize();

redactBagForShopping();
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
        console.log(parent);
       // parent.remove();
        let price = parent.querySelector(".item_price").innerHTML;
        let name  =parent.querySelector(".item_name").innerHTML;
        let color = parent.querySelector(".item_color").innerHTML.slice(7);
        //console.log(color);
        let size = parent.querySelector(".item_size").innerHTML.slice(6);
        //console.log(size);
        let arr = getCartData();
        let numItems = parent.querySelector(".num_of_item").innerHTML.slice(10);
       // console.log(numItems);
       // console.log(arr);
        for(let i = 0;i<arr.length;i++) {
            if(arr[i].name == name && arr[i].color == color && arr[i].size == size) {
                let shopCounter = document.querySelector(".shop_counter");
                let rez = shopCounter.innerHTML.slice(1,shopCounter.innerHTML.length-1)-arr[i].num;
                console.log(rez);
                numItems--;
             //   arr.splice(i,1);
                shopCounter.innerHTML ="("+rez+")";
                console.log(numItems);
                if(parseInt(numItems) === 0) {
                    arr.splice(i,1);
                    parent.remove();
                    console.log("WHGHGHF");
                } else {
                    arr[i].num--;
                    parent.querySelector(".num_of_item").innerHTML = "Quantity: "+numItems;
                }

            }
        }

        setCartData(arr);
      //  parent.remove();
        checkShop();
        redactBagForShopping();

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
        let shopCounter = document.querySelector(".shop_counter");
        shopCounter.innerHTML = "(0)";
       // shopBag();
        redactBagForShopping();
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
        redactBagForShopping();
        let totalSum = document.querySelector(".info_price p:nth-of-type(2)");
        totalSum.innerHTML = "£0";
        let shopCounter = document.querySelector(".shop_counter");
        shopCounter.innerHTML = "(0)";
        //shopBag();
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
    return JSON.parse(localStorage.getItem('item1'));
}

function setCartData(o){
    localStorage.setItem('item1', JSON.stringify(o));
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


function redactBagForShopping() {
    let shopBag = document.querySelector(".total_price");
    let shopCounter = document.querySelector(".shop_counter");
    console.log(shopCounter.innerHTML);
    let totalPrice = getCartData() || 0;
    let bottomTotalPrice = document.querySelector(".info_price p:nth-of-type(2)");
    if(totalPrice == 0 ){
        shopBag.innerHTML = "Bag";
        if(bottomTotalPrice !=null) {
            bottomTotalPrice.innerHTML ="£0"
        }
    }
    else {
        let sum = 0;
        let counter = 0;
        for(let key in totalPrice) {
            sum=sum +parseFloat(totalPrice[key].price.slice(1))*totalPrice[key].num || 0;
            //sum = sum.toFixed(2);
            //sum = Math.round((sum*10)/10);
            counter=counter+parseInt(totalPrice[key].num) || 0;
        }
        console.log(counter);
        shopBag.innerHTML = "Bag £"+sum;
        shopCounter.innerHTML = "("+counter+")";
        console.log(bottomTotalPrice);
        bottomTotalPrice.innerHTML= "£"+sum;
    }

    //let counter = getCounter() || 0;
    //let shopCounter = document.querySelector(".shop_counter");
//console.log(getCounter());
    //shopCounter.innerHTML = "("+counter+")";
}



let dataArr = getCartData() || [];
let mainContainer = document.querySelector(".main_container");
console.log(dataArr);
for(let i = 0;i<dataArr.length;i++) {
    let bagItem = document.createElement("div");
    bagItem.className ="bag_item";
    let divForImg = document.createElement("div");
    divForImg.className = "for_img";
    bagItem.appendChild(divForImg);
    let img = document.createElement("img");
    img.src = dataArr[i].src;
    let divSelected = document.createElement("div");
    divSelected.className = "selected";
    divForImg.appendChild(img);
    divForImg.appendChild(divSelected);
    let p =document.createElement("p");
    p.innerHTML = "View item";
    divSelected.appendChild(p);
    let divForInform = document.createElement("div");
    divForInform.className = "for_inform";
    bagItem.appendChild(divForInform);
    let itemName = document.createElement("p");
    itemName.className = "item_name";
    itemName.innerHTML = dataArr[i].name;
    divForInform.appendChild(itemName);
    let itemPrice = document.createElement("p");
    itemPrice.className = "item_price";
    itemPrice.innerHTML = dataArr[i].price;
    divForInform.appendChild(itemPrice);
    let itemColor = document.createElement("p");
    itemColor.className = "item_color";
    itemColor.innerHTML ="Color: "+dataArr[i].color;
    divForInform.appendChild(itemColor);
    let itemSize = document.createElement("p");
    itemSize.className = "item_size";
    itemSize.innerHTML ="Size: "+dataArr[i].size;
    divForInform.appendChild(itemSize);
    let itemNum = document.createElement("p");
    itemNum.className = "num_of_item";
    itemNum.innerHTML ="Quantity: "+dataArr[i].num;
    divForInform.appendChild(itemNum);
    let btnRemove= document.createElement("p");
    btnRemove.className = "to_remove";
    btnRemove.innerHTML ="Remove item";
    divForInform.appendChild(btnRemove);
    mainContainer.appendChild(bagItem);
    }
//End for localStore
//console.log(items);
checkShop();
