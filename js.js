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
    usdSale = data[0].sale;
    console.log(usdSale); 
    eurBuy = data[1].buy;
    console.log(eurBuy);
    eurSale = data[1].sale;
    console.log(eurSale);
    rubBuy = data[2].buy;
    console.log(rubBuy);
    rubSale = data[2].sale;
    console.log(rubSale);
    btcBuy = data[3].buy;
    console.log(btcBuy)
    btcSale = data[3].sale;
    console.log(btcSale)
}