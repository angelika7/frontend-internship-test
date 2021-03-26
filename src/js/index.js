const showPopup = document.getElementById('show-popup-form');
const hidePopup = document.getElementById('hide-popup-form');
const submitBtn = document.getElementById('submit-form');
const popup = document.querySelector(".popup");

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
