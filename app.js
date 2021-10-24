const article = document.querySelector(".article");
const progressBar = document.querySelector(".progress-bar");

const animateProgressBar = () => {
  let scrollDistance = Math.abs(article.getBoundingClientRect().top); // Article page height (- viewport height)
  let progressWidth =
    (scrollDistance /
      (article.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  progressBar.style.width = progressWidth + "%"; // Set progressBar style to progressWidth value;
};

window.addEventListener("scroll", animateProgressBar); // Enables animation on scroll
