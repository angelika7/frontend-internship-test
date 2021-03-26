const form = document.querySelector('.form');
const hidePopup = document.getElementById('hide-popup-form');
const showPopup = document.getElementById('show-popup-form');
const submitBtn = document.getElementById('submit-form');
const popup = document.querySelector('.popup');

// Popup appearing
showPopup.addEventListener('click', () => {
  popup.classList.add('show-form');
  popup.classList.remove('hide-form');
});

// Popup hiding
hidePopup.addEventListener('click', () => {
  popup.classList.remove('show-form');
  popup.classList.add('hide-form');
});

// Validate form
const validate = (e) => {
  e.preventDefault();
  const password = document.getElementById('password');
  const email = document.getElementById('email');
  const checkbox = document.getElementById('checkbox');

  if (email.value === "") {
    alert("Wprowadź adres email");
    email.focus();
    return false;
  }

  if (!emailIsValid(email.value)) {
    alert("Wprowadź poprawny adres email");
    email.focus();
    return false;
  }

  if (password.value === "") {
    alert("Wprowadź hasło");
    password.focus();
    return false;
  }

  if (!passwordIsValid(password.value)) {
    alert("Hasło musi mieć minimum 8 znaków");
    password.focus();
    return false;
  }

  if (!checkbox.checked) {
    alert("Zaakceptuj warunki");
    checkbox.focus();
    return false;
  } 

  email.value = '';
  password.value = '';
  checkbox.checked = false;

  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const passwordIsValid = password => {
  return password.length >= 8
}

form.addEventListener('submit', validate);
