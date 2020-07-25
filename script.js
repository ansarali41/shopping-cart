// phone card event handler minus-btn
const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function () {
    var valueNumber = getValue('numbers-of-phone');

    if (valueNumber > 0) {
        valueNumber--;
    }
    setValue('numbers-of-phone', valueNumber);
    PriceSet('phone-price', valueNumber);

})

// phone card event handler plus-btn
const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click', function () {
    var valueNumber = getValue('numbers-of-phone');
    valueNumber++;
    setValue('numbers-of-phone', valueNumber);
    // phone price
    PriceSet('phone-price', valueNumber);
})

function getValue(id) {
    const numbersOfPhone = document.getElementById(id).value;
    var numbersOfPhoneValue = parseFloat(numbersOfPhone);
    return numbersOfPhoneValue;
}
function setValue(id, valueNumber) {
    document.getElementById(id).value = valueNumber;
}

// phone price set function
function PriceSet(id, valueNumber) {
    const phonePriceValue = document.getElementById(id).innerText;
    phonePriceNumber = parseFloat(phonePriceValue);

    if (id == 'phone-price') {
        document.getElementById(id).innerText = 1219 * valueNumber;
    }
    else if (id == 'case-price') {
        document.getElementById(id).innerText = 59 * valueNumber;
    }
    const caseSubTotal=parseInt(document.getElementById('case-price').innerText);
    const phoneSubTotal =parseInt(document.getElementById('phone-price').innerText);
    const subTotal = caseSubTotal + phoneSubTotal;
    document.getElementById('subTotal').innerText=subTotal;
    // tax  
    const tax =(caseSubTotal/59)*1 +(phoneSubTotal/1219)*1;
    document.getElementById('tax').innerText=tax;

    // grand Total 
    const grandTotal=subTotal+tax;
    document.getElementById('grand-total').innerText=grandTotal;


}
// case card section
//case event handler minus btn
const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click', function () {
    var caseValueNumber = getValue('case-value');
    if (caseValueNumber > 0) {
        caseValueNumber--;
    }
    setValue('case-value', caseValueNumber);
    PriceSet('case-price', caseValueNumber);

})
// case event handler plus btn
const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click', function () {
    var caseValueNumber = getValue('case-value');
    caseValueNumber++;
    setValue('case-value', caseValueNumber);
    PriceSet('case-price', caseValueNumber);
})

