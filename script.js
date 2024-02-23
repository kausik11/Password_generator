let inputLength = document.getElementById("InputLength");
let inputValue = document.getElementById("InputValue");
let generate = document.getElementById("generate");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let icon = document.getElementById("icon");
let icon_container = document.getElementById("icon_container");



//change inputValue value
let value = inputLength.value;
inputValue.innerText = value;
inputLength.addEventListener('input',()=>{inputValue.textContent = inputLength.value});

//generate password
generate.addEventListener("click",()=>{
    passBox.value = generatePass();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

//Function to generate password
function generatePass() {
    let password = "";
    let allchar = "";

    allchar += lowercase.checked ? lowerChars : "";
    allchar += uppercase.checked ? upperChars : "";
    allchar += numbers.checked ? allNumbers : "";
    allchar += symbols.checked? allSymbols : "";
    
    
    if(allchar.length == "" || allchar.length == 0){
        return "something went wrong..."
    }
    let i =1;
    while (i<=inputLength.value) {
        password += allchar.charAt(Math.floor(Math.random()*allchar.length));
        i++;
    }
    return password;
}
icon.addEventListener("click",()=>{
    if(passBox.value != "" || passBox.value.length >1){
        navigator.clipboard.writeText(passBox.value);
        icon_container.innerHTML = `<i id="icon" class="fa-solid fa-check"></i>`;
        icon_container.title = "password copied";

        setTimeout(() => {
            icon_container.innerHTML = `<i id="icon" class="fa-solid fa-copy"></i>`;
            icon_container.title = "click to copy password";
        }, 2000);
    }
    
})