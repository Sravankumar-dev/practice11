let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let calculateButtonEl = document.getElementById("calculateButton");

let errorMsgElement = document.getElementById("errorMessage");
let errorMessage = "Enter A Valid Value";

function calculateTotal() {
    let billAmountValue = billAmountElement.value;
    let percentageTipValue = percentageTipElement.value;
    if (billAmountValue === "") {
        errorMsgElement.innerHTML = errorMessage;
    } else if (percentageTipValue === "") {
        errorMsgElement.innerHTML = errorMessage;
    } else {
        errorMsgElement.innerHTML = "";
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentageTipValue);
        let percentageTipAmount = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + percentageTipAmount;
        tipAmountElement.value = percentageTipAmount;
        totalAmountElement.value = totalAmount;
    }
}

calculateButtonEl.addEventListener("click",calculateTotal);
