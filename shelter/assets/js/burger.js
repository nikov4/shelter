// Burger menu

const burger = document.querySelector(".burger-button");
const burgerContainer = document.querySelector(".burger-container");
const html = document.getElementsByTagName("html")[0];
const container = document.querySelector(".container");
const modalWrapper = document.querySelector(".modal-wrapper");

// interactions with button
burger.addEventListener("click", function () {
  burger.classList.toggle("burger__active");
  burgerContainer.classList.toggle("burger-container__open");
  html.classList.toggle("no-scroll");
  modalWrapper.classList.toggle("no-display");
  event.stopPropagation();
});

// interactions with menu
burgerContainer.addEventListener("click", function () {
  burger.classList.remove("burger__active");
  burgerContainer.classList.remove("burger-container__open");
  html.classList.remove("no-scroll");
  modalWrapper.classList.add("no-display");
});

// close menu when container click
container.addEventListener("click", (event) => {
  if (burgerContainer.classList.contains("burger-container__open")) {
    burger.classList.remove("burger__active");
    burgerContainer.classList.remove("burger-container__open");
    html.classList.remove("no-scroll");
    modalWrapper.classList.add("no-display");
  }
});
