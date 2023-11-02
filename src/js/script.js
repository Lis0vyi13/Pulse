const frontLinks = document.querySelectorAll("#front-link");
const backLinks = document.querySelectorAll("#back-link");
const catalogUpperContent = document.querySelectorAll(".catalog-upper");
const btnUp = document.querySelector(".button-up");

function catalogLinks(linkArray) {
  linkArray.forEach((link, i) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      catalogUpperContent[i].classList.toggle("front-translate");
    });
  });
}

catalogLinks(frontLinks);
catalogLinks(backLinks);

document.addEventListener("scroll", function () {
  if (scrollY < document.documentElement.clientHeight) {
    btnUp.style.opacity = "0";
    btnUp.style.pointerEvents = "none";
  } else {
    btnUp.style.pointerEvents = "all";
    btnUp.style.opacity = "1";
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
