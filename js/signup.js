document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click"(), e =>{
        e.preventDefault();
        loginForm.classListist.add("form--hidden");
        createAccountForm.classListist.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click"(), e =>{
      e.preventDefault();
      loginForm.classListist.remove("form--hidden");
      createAccountForm.classListist.add("form--hidden"); 
  });
});