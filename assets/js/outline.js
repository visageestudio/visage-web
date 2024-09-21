const outline = document.querySelectorAll(".out");

function toggleClass(outline) {
  outline.classList.toggle("outline");

  /*const randomI = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

        setTimeout(() => toggleClass(outline), randomI);*/
}

outline.forEach((outline) => {
  setInterval(() => toggleClass(outline), getRandomInterval(1000, 5000));
});

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}