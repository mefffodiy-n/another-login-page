const close = document.querySelector('.close'),
    open = document.querySelector('.open'),
    eyeWrapper = document.querySelector('.eye-wrapper'),
    password = document.querySelector('.password');

let showHide = () => {
    if (password.type == "password") {
        password.setAttribute("type", "text");
        open.style.display = "block";
        close.style.display = "none"
    } else {
        password.setAttribute("type", "password");
        open.style.display = "none";
        close.style.display = "block";
    }
};

eyeWrapper.addEventListener("click", showHide);