r = function (i, a, l) {
  let n = Math.floor(Math.random() * (a - i + 1) + i);
  return n === l ? r(i, a, l) : n;
};

function animate(e, t) {
  setInterval(() => {
    e.style.animation = "fade-out 1s forwards";
    setTimeout(() => {
      last = r(0, t.length - 1, last);
      e.textContent = t[last];
      e.style.animation = "fade-in 1s forwards";
    }, 1000);
  }, 3000);
}

function process() {
  const items = document.getElementsByClassName("txt-morph");
  Array.from(items).forEach((element) => {
    animate(
      element,
      element
        .getAttribute("data-rotate")
        .split(",")
        .map((e) => e.trim())
    );
  });
}

function insertStyle() {
  const s = document.createElement("style");
  s.innerHTML =
    "@keyframes fade-out {0% {opacity: 1;} 100% {opacity: 0;}} @keyframes fade-in {0% {opacity: 0;} 100% {opacity: 1;}}";
  document.head.appendChild(s);
}

let last;
insertStyle();
process();
