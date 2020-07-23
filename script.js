// phone card event handler minus-btn
const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function () {
    var valueNumber = getValue('numbers-of-phone');

    if (valueNumber > 1) {
        valueNumber--;
    }
    setValue('numbers-of-phone',valueNumber);
    console.log(valueNumber);
    PriceSet('phone-price',valueNumber,1219);

})

// phone card event handler plus-btn
const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click', function () {
    var valueNumber = getValue('numbers-of-phone');
    valueNumber++;
    setValue('numbers-of-phone',valueNumber);
    // phone price
    PriceSet('phone-price',valueNumber,1219);
})

function getValue(id) {
    const numbersOfPhone = document.getElementById(id).value;
    var numbersOfPhoneValue = parseFloat(numbersOfPhone);
    return numbersOfPhoneValue;
}
function setValue(id,valueNumber) {
    document.getElementById(id).value = valueNumber;
}

// phone price set function
function PriceSet(id,valueNumber,basePrice) {
    const phonePriceValue=document.getElementById(id).innerText;
    phonePriceNumber=parseFloat(phonePriceValue);
    document.getElementById(id).innerText=basePrice*valueNumber;
}
             // case card section
//case event handler minus btn
const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click',function(){
    var caseValueNumber = getValue('case-value');
    if (caseValueNumber>1) {
        caseValueNumber--;
    }
    setValue('case-value',caseValueNumber);
    PriceSet('case-price',caseValueNumber,59);

})
// case event handler plus btn
const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click',function(){
    var caseValueNumber=getValue('case-value');
    caseValueNumber++;
    setValue('case-value',caseValueNumber);
    PriceSet('case-price',caseValueNumber,59);
})

