function reset_animation() {
  var el = document.getElementById("typed-out");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; // reset animation
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* * Typewriter effect for a list of phrases*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "Database Rules Admin",
  "Aspiring Web Developer",
  "Tech Enthusiast",
];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();
