"use strict";


window.onload = function () {
    console.log("onload");
    const coneBox = document.getElementById("Cone");
    coneBox.onclick = onHideOrShowToppings;
    const cupBox = document.getElementById("Cup");
    cupBox.onclick = onHideOrShowToppings;
    const calculateOrder = document.getElementById("calculateOrder");
    //calculateOrder.onclick = calculateTotal;
    calculateOrder.addEventListener("click", calculateTotal);
}

function calculateTotal() {
    console.log("calculateTotal")
    let toppingCharges = 0;
    let topping1 = document.getElementById("topping1").checked;
    if (topping1 == true) {
        toppingCharges += 0.50;
    }
    let topping2 = document.getElementById("topping2").checked;
    if (topping2 == true) {
        toppingCharges += 0.25;
    }
    let topping3 = document.getElementById("topping3").checked;
    if (topping3 == true) {
        toppingCharges += 1.25;
    }
    let topping4 = document.getElementById("topping4").checked;
    if (topping4 == true) {
        toppingCharges += 0.25;
    }

    const numberOfScoops = document.getElementById("numberOfScoops");
    let numOfScoops = numberOfScoops.value;
    let numOfScoopsPrice = numOfScoops * 2.25;
    let coneBox = document.getElementById("Cone");
    if (coneBox.checked) {
        toppingCharges = 0;
    }
    let toppingsAndScoopsTotal = numOfScoopsPrice + toppingCharges;
    const basePrice = document.getElementById("basePrice");
    basePrice.value = toppingsAndScoopsTotal.toFixed(2);
    let taxAmount = toppingsAndScoopsTotal * (4 / 100);
    const tax = document.getElementById("tax");
    tax.value = taxAmount;
    let totalDue = toppingsAndScoopsTotal + taxAmount;
    const totalAmount = document.getElementById("totalAmount")
    totalAmount.value = totalDue.toFixed(2);
}

function onHideOrShowToppings() {
    let coneBox = document.getElementById("Cone");
    let toppings = document.getElementById("toppings");
    if (coneBox.checked) {
        toppings.style.display = "none";
    }
    else {
        toppings.style.display = "block";
    }
    calculateTotal();
}