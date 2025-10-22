const loginform = document.querySelector("form");
loginform.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;
    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("All form fields must be filled in");        
    };
    const data = {
    email: email.value.trim(),
    password: password.value.trim()
    }
    console.log(data);
    form.reset()
}

