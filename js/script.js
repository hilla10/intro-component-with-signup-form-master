const inputs = document.querySelectorAll('.input-control');
const email = document.querySelector('.email-input');
const error_email = document.querySelector('.email');
const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const errors = document.querySelectorAll('.error');
const formGroups = document.querySelectorAll('.form-group');

btn.addEventListener('click', submitForm);

function submitForm() {
  inputs.forEach((input, index) => {
    const placeholderValue = input.placeholder;
    const value = input.value.trim();

    // Check if the field is empty
    if (value === '') {
      errors[index].textContent = `${placeholderValue} cannot be empty`;
    } else {
      errors[index].textContent = '';
    }

    // Email validation, assuming 'email' input has a specific identifier or index
    if (input.type === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValidate = emailRegex.test(value);
      if (!emailValidate) {
        error_email.textContent = 'Looks like this is not an email';
      } else {
        error_email.textContent = '';
      }
    }
  });

  // Show success message if all inputs are valid (no errors displayed)
  errors.forEach((error) => {
    if (error.textContent === '') {
      message.classList.add('active');
      setTimeout(() => {
        message.classList.remove('active');
      }, 2000);
    }
  });
}
