const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const firstNameError = firstNameInput.nextElementSibling;
const errorClass = 'error-state';
const lastNameInput = document.getElementById('lastName');
const lastNameError = lastNameInput.nextElementSibling;
const emailInput = document.getElementById('email_address');
const emailError = emailInput.nextElementSibling;
const queryTypeRadios = document.querySelectorAll('input[name="queryType"]');
const queryError = document.querySelector('.form-group:nth-child(3) .error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isQueryTypeValid = validateQueryType();

    if (isFirstNameValid && isLastNameValid && isEmailValid && isQueryTypeValid) {
        console.log('First four fields are valid! Ready for the next stapes.');
    } else {
        console.log('Validation failed. Check required fields.');
    }
});

function validateFirstName() {
    const value = firstNameInput.value.trim();

    if (value === '') {
        firstNameError.style.display = 'block';
        firstNameInput.classList.add(errorClass);

        return false;
    } else {
        firstNameError.style.display = 'none';
        firstNameInput.classList.remove(errorClass);
        return true;
    }
}

function validateLastName() {
    const value = lastNameInput.value.trim();

    if (value === '') {
        lastNameError.style.display = 'block';
        lastNameInput.classList.add(errorClass);
        return false;
    } else {
        lastNameError.style.display = 'none';
        lastNameInput.classList.remove(errorClass);
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
        emailError.textContent = 'This field ids required.';
        emailError.style.display = 'block';
        emailInput.classList.add(errorClass);
        return false;
    } else if (!emailPattern.test(value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        emailInput.classList.add(errorClass);
        return false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove(errorClass);
        return true;
    }   
}

function validateQueryType() {
    const isChecked = document.querySelector('input[name="queryType"]:checked');

    if (isChecked === null) {
        queryError.style.display = 'block';
        return false;
    } else {
        queryError.style.display = 'none';
        return true;
    }
}