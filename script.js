// 各レイヤーを取得
let stars = document.getElementById("stars");
let planet1 = document.getElementById("planet1");
let planet2 = document.getElementById("planet2");
let meteor = document.getElementById("meteor");
let spaceship = document.getElementById("spaceship");
let astronaut = document.getElementById("astronaut");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // 奥行きのある動き（値が小さいほど奥に見える）
  stars.style.top = value * 0.1 + "px";
  planet1.style.top = 30 + value * 0.15 + "%";
  planet2.style.top = 10 + value * 0.25 + "%";

  // 隕石と宇宙船は横にスライド
  meteor.style.left = -20 + value * 1.2 + "%";
  spaceship.style.left = -25 + value * 0.8 + "%";

  // 宇宙飛行士はふわっと上下に
  astronaut.style.bottom = 5 + Math.sin(value * 0.01) * 2 + "%";

  // タイトルテキストは横に流れる
  text.style.marginLeft = value * 1 + "px";
});
