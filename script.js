const inputFlavor = prompt("Please enter the Froyo flavors once per each that you want, separated by commas.");
const flavorArray = inputFlavor.split(",");


// Loop through the array and trim the values
for (let i = 0; i < flavorArray.length; i++) {
    console.log(`Flavor : ${flavorArray[i].trim()}`);
}

// create an object to store the flavors

const froyoFlavors = {
    flavors: flavorArray.map(function (flavor) {
        return flavor.trim();
    })
};
// count the number of each flavor

const flavorCount = {};

froyoFlavors.flavors.forEach(function (flavor) {
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
});

let message = "You have ordered these Frogurt flavors:\n";
for (const flavor in flavorCount) {
    message += `${flavor}: ${flavorCount[flavor]}\n`;
};
message += "Unfortunately, the Froygurt is cursed.";



alert(message);
console.log(message);

setTimeout(() => {
    window.location.href = "https://youtu.be/i73-lpVV-Jo?si=7ujQZNejyjL0typU";
}, 5000);