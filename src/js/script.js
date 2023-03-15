'use strict';

const frontLinks = document.querySelectorAll('#front-link');
const backLinks = document.querySelectorAll('#back-link');
const catalogUpperContent = document.querySelectorAll('.catalog-upper');

function catalogLinks(linkArray) {
  linkArray.forEach((link, i) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      catalogUpperContent[i].classList.toggle('front-translate');
    });
  });
}

catalogLinks(frontLinks);
catalogLinks(backLinks);
