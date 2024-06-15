let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeIcon.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    } else {
        password.type ="password";
        this.classList.add("fa-eye-slash");
        this.classList.remove("fa-eye");
    }
}