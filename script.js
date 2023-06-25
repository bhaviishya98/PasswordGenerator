const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const plength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-numbers");
const pSymbol = document.getElementById("p-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("Password");

submit.addEventListener("click", () => {
        let initialPassword = empty;
        (upperCase.checked) ? initialPassword += uCase : "";
        (lowerCase.checked) ? initialPassword += lCase : "";
        (pNumber.checked) ? initialPassword += number : "";
        (pSymbol.checked) ? initialPassword += symbol : "";

        password.value = generatePassword(plength.value, initialPassword);
    });

function generatePassword(len, initialPassword){
    let pass = "";

    for (let i = 0; i < len; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// copy password to clipboard

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if(password.value == ""){
        alert("Please! Generate a Password");
    }
    else{
        password.select();
        document.execCommand("copy");
        alert("Password copied to Clipboard");
    }
});