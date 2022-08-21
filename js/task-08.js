const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === "" || password === "") {
        alert("заполните пожалуйста все поля!");
    }
    console.log({ email: email, password: password }) 
    event.currentTarget.reset();
});