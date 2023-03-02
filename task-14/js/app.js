let submitBtn = document.querySelector("#submit-btn");
let firstNameError = document.querySelector("#first-name-error");
let lastNameError = document.querySelector("#last-name-error");
let emailError = document.querySelector("#email-error");
let contactError = document.querySelector("#contact-error");
let pincodeError = document.querySelector("#pincode-error");
let cardNumberError = document.querySelector("#card-number-error");
let cardExpiryYearError = document.querySelector("#card-expiry-year-error");
let cvvError = document.querySelector("#cvv-error");

// Regex Patterns
let firstNamePattern = /^[A-Z]{1,30}$/i;
let lastNamePattern = /^[A-Z]{1,30}$/i;
let emailPattern = /^\S+@\S+\.\S+$/i;
let contactPattern = /^[6-9]\d{9}$/;
let pincodePattern = /^\d{6}$/;
let cardNumberPattern = /^\d{16}$/;
let cardExpiryYearPattern = /^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/;
let cvvPattern = /^\d{3,4}$/;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let email = document.querySelector("#email");
    let contact = document.querySelector("#contact");
    let pincode = document.querySelector("#pincode");
    let cardNumber = document.querySelector("#card-number");
    let cardExpiryYear = document.querySelector("#card-expiry-year");
    let cvv = document.querySelector("#cvv");

    // First Name Validation   
    if (firstName.value === "") {
        firstName.classList.add("form-input-error");
        firstNameError.innerText = "First Name is required";
    } else if (!firstNamePattern.test(firstName.value)) {
        firstName.classList.add("form-input-error");
        firstNameError.innerText = "First Name is not valid";
    } else {
        firstName.classList.remove("form-input-error");
        firstNameError.innerText = "";
    }

    // Last Name Validation  
    if (lastName.value === "") {
        lastName.classList.add("form-input-error");
        lastNameError.innerText = "Last Name is required";
    } else if (!lastNamePattern.test(lastName.value)) {
        lastName.classList.add("form-input-error");
        lastNameError.innerText = "Last Name is not valid";
    } else {
        lastName.classList.remove("form-input-error");
        lastNameError.innerText = "";
    }

    // Email Validation  
    if (email.value === "") {
        email.classList.add("form-input-error");
        emailError.innerText = "Email Address is required";
    } else if (!emailPattern.test(email.value)) {
        email.classList.add("form-input-error");
        emailError.innerText = "Email Address is not valid";
    } else {
        email.classList.remove("form-input-error");
        emailError.innerText = "";
    }

    // Contact Validation  
    if (contact.value === "") {
        contact.classList.add("form-input-error");
        contactError.innerText = "Contact Number is required";
    } else if (!contactPattern.test(contact.value)) {
        contact.classList.add("form-input-error");
        contactError.innerText = "Contact Number is not valid";
    } else {
        contact.classList.remove("form-input-error");
        contactError.innerText = "";
    }

    // Pincode Validation  
    if (pincode.value === "") {
        pincode.classList.add("form-input-error");
        pincodeError.innerText = "Pin Code is required";
    } else if (!pincodePattern.test(pincode.value)) {
        pincode.classList.add("form-input-error");
        pincodeError.innerText = "PIN Code is not valid";
    } else {
        pincode.classList.remove("form-input-error");
        pincodeError.innerText = "";
    }

    // Card Number Validation  
    if (cardNumber.value === "") {
        cardNumber.classList.add("form-input-error");
        cardNumberError.innerText = "Card Number is required";
    } else if (!cardNumberPattern.test(cardNumber.value)) {
        cardNumber.classList.add("form-input-error");
        cardNumberError.innerText = "Card Number is not valid";
    } else {
        cardNumber.classList.remove("form-input-error");
        cardNumberError.innerText = "";
    }

    // Card Expiry Year Validation  
    if (cardExpiryYear.value === "") {
        cardExpiryYear.classList.add("form-input-error");
        cardExpiryYearError.innerText = "Card Expiry is required";
    } else if (!cardExpiryYearPattern.test(cardExpiryYear.value)) {
        cardExpiryYear.classList.add("form-input-error");
        cardExpiryYearError.innerText = "Card Expiry is not valid";
    } else {
        cardExpiryYear.classList.remove("form-input-error");
        cardExpiryYearError.innerText = "";
    }

    // CVV Validation  
    if (cvv.value === "") {
        cvv.classList.add("form-input-error");
        cvvError.innerText = "CVV is required";
    } else if (!cvvPattern.test(cvv.value)) {
        cvv.classList.add("form-input-error");
        cvvError.innerText = "CVV is not valid";
    } else {
        cvv.classList.remove("form-input-error");
        cvvError.innerText = "";
    }
});
