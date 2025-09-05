"use strict";
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data mil gaya");
    }
    else {
        reject("Kuch error ho gaya");
    }
});
myPromise
    .then((res) => console.log("✔", res))
    .catch((err) => console.log("❌", err));
