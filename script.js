let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        eyeicon.src ="eye-open.jpeg";
    } else {
        password.type = "password";
        eyeicon.src ="eye-close.jpeg";
    }
})
