let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let mountains = document.getElementById("mountains");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  stars.style.top = value * 0.5 + "px";
  moon.style.top = 10 + value * 0.3 + "%";
  text.style.marginLeft = value * 1.2 + "px";
  mountains.style.top = value * 0.15 + "px";
});
