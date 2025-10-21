# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://oluwabukunmi07.github.io/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

This project was a great practice for client-side form validation using JavaScript. I focused on checking required fields and specific formats like email addresses.

```js
// Example: Email validation logic
function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email format

    if (value === '') {
        emailError.textContent = 'This field is required.';
        emailError.style.display = 'block';
        emailInput.classList.add(errorClass);
        return false;
    } else if (!emailPattern.test(value)) { // Check against the pattern
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
```




## Author
- Name - Oluwabukunmi Akinbisola
- Frontend Mentor - [@Oluwabukunmi07](https://www.frontendmentor.io/profile/Oluwabukunmi07)
- Twitter - [@Oluwabukunmi07](https://www.twitter.com/Oluwabukunmi07)



## Acknowledgments

- Gemini (Google AI): provoded assistance with code review and suggestions for improvements


