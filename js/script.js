document.addEventListener("DOMContentLoaded", function(event) {

  var link = document.querySelector(".map-feedback-button");
  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".cross");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var overlay = document.querySelector(".modal-overlay");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
    overlay.classList.add("modal-overlay-open");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-overlay-open");

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }

    login.focus();
  });

  popup.addEventListener("submit", function(evt) { // выдает ошибку
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
        popup.classList.remove("modal-error");
      }
    }
  });
});