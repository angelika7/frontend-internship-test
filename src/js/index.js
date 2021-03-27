const checkbox = document.getElementById('checkbox');
const email = document.getElementById('email');
const form = document.querySelector('.form');
const hidePopup = document.getElementById('hide-popup-form');
const message = document.getElementById('message');
const password = document.getElementById('password');
const popup = document.querySelector('.popup');
const showPopup = document.getElementById('show-popup-form');
const submitBtn = document.getElementById('submit-form');

// Popup appearing
showPopup.addEventListener('click', () => {
  popup.classList.add('show-popup');
  popup.classList.remove('hide-popup');
});

// Popup hiding
hidePopup.addEventListener('click', () => {
  popup.classList.remove('show-popup');
  popup.classList.add('hide-popup');
});

// Validate form
const validate = (e) => {
  e.preventDefault();
  
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
  
  setTimeout(() => {
    popup.classList.add('hide-popup');
    showPopup.style.display = "none"
    message.style.display = "block";
  }, 3000)

  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const passwordIsValid = password => {
  return password.length >= 8
}

form.addEventListener('submit', validate);
