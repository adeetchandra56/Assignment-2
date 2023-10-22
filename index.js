let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    reversingString();
});

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    checkingPalindrome();
});

btn3.addEventListener('click', (e) => {
    e.preventDefault();
    finalTotal();
});

function reversingString() {
    let inputString = document.getElementById("enteredString").value;
    let splitString = inputString.split('');
    let reversedStrings = splitString.reverse();
    let joinedString = reversedStrings.join('');
    document.getElementById("reversedString").innerText = "Reversed String: " + joinedString;
}


function checkingPalindrome() {
    let inputtedNumber = document.getElementById("enteredNumber").value;
    let splitNumber = inputtedNumber.split('');
    let reversedNumber = splitNumber.reverse();
    let joinedNumber = reversedNumber.join('');

    console.log

    if (joinedNumber === inputtedNumber) {
        document.getElementById("palindromeAnswer").innerText = inputtedNumber + " is a palindrome";
    } else {
        document.getElementById("palindromeAnswer").innerText = inputtedNumber + " is not a palindrome";
    }
}

function finalTotal() {
        let subtotal = parseFloat(document.getElementById('subtotal').value);
        let tipPercentage = parseFloat(document.getElementById('tip').value);
        let tipAmount =  tipPercentage / 100;
        let totalAmount = subtotal + (subtotal * tipAmount);
        document.getElementById('finalTotal').textContent = "Total Amount= $" + totalAmount;
    
}