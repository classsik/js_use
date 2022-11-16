const linkItem = document.querySelector(".header__burger");
linkItem.addEventListener("click", function (e) {
  linkItem.classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("active");
  document.body.classList.toggle("lock");
});
