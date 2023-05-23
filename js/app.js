document.addEventListener("click", function (event) {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();
    var scroll = document.querySelector(event.target.getAttribute("href"));
    window.scrollTo({
      top: scroll.offsetTop,
      behavior: "smooth",
    });
  }
});
