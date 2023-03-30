const closeButton = document.querySelectorAll('.modal-img img');
const modal = document.querySelectorAll('.modal');
const beforeFormElements = document.querySelectorAll('#before-form');
const modalForm = document.querySelector('#modal-form');
const modalBlocks = document.querySelectorAll('.modal-block');
const beforeFeedbackElements = document.querySelectorAll('#before-feedback');
const feedback = document.querySelector('#feedback');

modal.forEach((element) => {
  element.classList.remove('active');
});

openModal(beforeFormElements, modalForm);

function show(element) {
  element.classList.add('active');
  setTimeout(function () {
    element.style.opacity = '1';
  }, 100);
}

function hidden(element) {
  element.style.opacity = '0';
  setTimeout(() => {
    element.classList.remove('active');
  }, 100);
}

function openModal(button, form) {
  button.forEach((item) => {
    item.addEventListener('click', (e) => {
      show(form);
      closeModal(modalForm);
      showFeedback(form);
    });
  });
}

function closeModal(modal) {
  if (modal.classList.contains('active')) {
    closeButton.forEach(function (item) {
      modal.addEventListener('click', function (e) {
        const target = e.target;
        if (target === item || !target.closest('.modal-block')) {
          hidden(modal);
        }
      });
    });
  }
}

function showFeedback(form) {
  if (form.classList.contains('active')) {
    beforeFeedbackElements.forEach(function (item) {
      item.addEventListener('click', () => {
        hidden(form);
        show(feedback);
        closeModal(feedback);
      });
    });
  }
}
