window.onload = function () {
    var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    Request(url, test);


};


function Request(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhr.responseText);
            // console.log(data);
            callback(data);
        }
    };
    xhr.send();
}

function test(data){
    console.log("test" + data[0].ccy);
    
}