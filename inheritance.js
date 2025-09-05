var myPromise = new Promise(function (resolve, reject) {
    var success = true;
    if (success) {
        resolve("Data mil gaya");
    }
    else {
        reject("Kuch error ho gaya");
    }
});
myPromise
    .then(function (res) { return console.log("✔", res); })
    .catch(function (err) { return console.log("❌", err); });
