const tabs = document.querySelectorAll('.catalog__tab');
const tabsParent = document.querySelector('.catalog__tabs');
const catalogItem = document.querySelectorAll('.catalog__list-item');

tabsParent.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('.catalog__tab')) {
    tabs.forEach((tab) => {
      tab.classList.remove('catalog__tab-active');
    });
    e.target.closest('.catalog__tab').classList.add('catalog__tab-active');
    showTabs(0, 'fitness');
    showTabs(1, 'run');
    showTabs(2, 'triatlon');
  }
});

function showTabs(num, attr) {
  if (tabs[num].classList.contains('catalog__tab-active')) {
    catalogItem.forEach((item) => {
      item.style.display = 'flex';
      const attributeValue = item.getAttribute('data-filter');
      if (!attributeValue.includes(attr)) {
        item.style.display = 'none';
      }
    });
  }
}
showTabs(0, 'fitness');
