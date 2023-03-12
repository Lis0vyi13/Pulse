'use strict';
const tabs = document.querySelectorAll('.catalog__tab');
const tabsParent = document.querySelector('.catalog__tabs');
const cardLinks = document.querySelectorAll('.catalog__list-item-link a');
const cards = document.querySelectorAll('.catalog__list-item');
const descr = document.querySelectorAll('.catalog__list-item-description');

tabsParent.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('.catalog__tab')) {
    tabs.forEach((tab) => {
      tab.classList.remove('catalog__tab-active');
    });
    e.target.closest('.catalog__tab').classList.add('catalog__tab-active');
  }
});
