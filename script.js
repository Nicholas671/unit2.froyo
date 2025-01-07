const inputFlavor = prompt("Please enter the Froyo flavors once per each that you want, separated by commas.").split(",");



function calculateOrder(flavorArray) {

    const flavorCount = {};
    for (const flavors of flavorArray) {
        if (flavors in flavorCount) { flavorCount[flavors] += 1; }
        else { flavorCount[flavors] = 1; }
    }
    return flavorCount;
}

froyoOrder = calculateOrder(inputFlavor);
let message = "You have ordered these Frogurt flavors:\n";
for (const key in froyoOrder) {
    message += `${key}: ${froyoOrder[key]}\n`;
};

message += "Unfortunately, the Froygurt is cursed.";



alert(message);
console.log(message);

setTimeout(() => {
    window.location.href = "https://youtu.be/i73-lpVV-Jo?si=7ujQZNejyjL0typU";
}, 5000);