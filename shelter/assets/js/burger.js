// Burger menu

let burger = document.querySelector(".burger-button");

// interactions with button
burger.addEventListener("click", function () {
  burger.classList.toggle("burger__active");
});
