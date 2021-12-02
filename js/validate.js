$('#submitbtn').click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPasswrd();
    validateEmail();
    if ((usernameError == true) &&
        (passwordError == true) &&
        (confirmPasswordError == true) &&
        (emailError == true)) {
        return true;
    } else {
        return false;
    }
});
