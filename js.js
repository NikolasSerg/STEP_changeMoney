window.onload = function () {
    var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    Request(url, test);
};
 var usdBuy = 0;
 var usdSale = 0;
 var eurBuy = 0;
 var eurSale = 0;
 var rubBuy = 0;
var rubSale = 0;
var btcBuy = 0;
var btcSale = 0;
var table = document.getElementsByClassName('kurs');
var send = document.querySelector('input[type="submit"]');
var sale = document.getElementById('sale');

send.addEventListener('onclick', function(){

});

function Request(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            callback(data);
        }
    };
    xhr.send();
}

function test(data){
    usdBuy = data[0].buy;
    console.log(usdBuy);
    table[0].firstElementChild.firstElementChild.children[1].children[1].textContent = usdBuy;
    usdSale = data[0].sale;
    table[0].firstElementChild.firstElementChild.children[1].children[2].textContent = usdSale;
    console.log(usdSale); 
    eurBuy = data[1].buy;
    table[0].firstElementChild.firstElementChild.children[2].children[1].textContent = eurBuy;
    console.log(eurBuy);
    eurSale = data[1].sale;
    table[0].firstElementChild.firstElementChild.children[2].children[2].textContent = eurSale;
    console.log(eurSale);
    rubBuy = data[2].buy;
    console.log(rubBuy);
    table[0].firstElementChild.firstElementChild.children[3].children[1].textContent = rubBuy;
    rubSale = data[2].sale;
    console.log(rubSale);
    table[0].firstElementChild.firstElementChild.children[3].children[2].textContent = rubSale;
    btcBuy = data[3].buy;
    console.log(btcBuy);
    table[0].firstElementChild.firstElementChild.children[4].children[1].textContent = btcBuy;
    btcSale = data[3].sale;
    console.log(btcSale);
    table[0].firstElementChild.firstElementChild.children[4].children[2].textContent = btcSale;
}