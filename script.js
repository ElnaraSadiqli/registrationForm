let register = document.querySelector(".register-btn");
let username = document.querySelector("#username");
let surname = document.querySelector("#surname");
let mail = document.querySelector("#email");
let password = document.querySelector("#password");
let repassword = document.querySelector("#repassword");
let input = document.getElementsByTagName("input");
let errorTxt = document.querySelector(".error-txt");
// console.log(input.nextElementSibling)
let message = `Zəhmət olmasa xanalari boş qoymayin`;
console.log(register);

register.addEventListener("click", function (e) {

    if (e && e.preventDefault) {
        e.preventDefault();
    }
// When input is empty >>
    if (username.value === '') {
        // Adding  class for red alert frame
        username.className = 'form-control is-invalid';
        // Adding  class for red alert message
        errorTxt.className = 'error-text invalid-feedback';
        errorTxt.textContent = message;

    } else {
        username.className = 'form-control is-valid'
    }

});