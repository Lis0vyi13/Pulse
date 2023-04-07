const closeButton = document.querySelectorAll('.modal-img img');
const beforeFormElements = document.querySelectorAll('#before-form');
const modalForm = document.querySelector('#modal-form');
const modalOrder = document.querySelector('#modal-order');
const feedback = document.querySelector('#feedback');
const body = document.querySelector('body');
const modal = document.querySelectorAll('.modal');
const forms = document.querySelectorAll('.form');
const beforeOrderElements = document.querySelectorAll('#before-order');
const formOrder = document.querySelector('.form-order');
const orderSection = document.querySelector('#order_section');

openModal(beforeFormElements, modalForm, modalForm.parentElement);
formsSubmit(modalForm);
order();

function show(element) {
  element.classList.add('active');
}

function hidden(element) {
  element.classList.remove('active');
}

function openModal(button, form, formParent) {
  button.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      body.style.overflow = 'hidden';
      body.style.marginRight = 'calc(-1 * (100vw - 100%))';
      if (formParent.style.opacity != '1') {
        formParent.style.opacity = 1;
      }
      form.style.opacity = '1';
      show(formParent);
      closeModal(formParent, form);
    });
  });
}

function closeModal(modal, elem) {
  if (modal.classList.contains('active')) {
    closeButton.forEach(function (item) {
      modal.addEventListener('click', function (e) {
        const target = e.target;
        if (target === item || !target.closest('.modal-block')) {
          elem.style.opacity = '0';
          hidden(modal);
          body.style.overflow = 'auto';
          body.style.overflowX = 'hidden';
        }
      });
    });
  }
}

function showFeedback(formParent) {
  feedback.style.opacity = '1';
  hidden(formParent);
  show(feedback.parentElement);
  closeModal(feedback.parentElement, formParent);
}

function formsSubmit(formElem) {
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      body.style.overflow = 'hidden';
      hidden(formElem.parentElement);
      formElem.style.opacity = '0';
      showFeedback(formElem.parentElement);
      closeModal(feedback.parentElement, feedback);
      console.log(123);
    });
  });
}

function order() {
  beforeOrderElements.forEach(function (element) {
    element.addEventListener('click', () => {
      document
        .querySelectorAll('#order_section .modal-subtitle')
        .forEach(function (el) {
          el.remove();
        });
      document
        .querySelectorAll('#order_section .modal-title')
        .forEach(function (el) {
          el.remove();
        });

      const name = element.getAttribute('data-value');
      orderSection.insertAdjacentHTML(
        'afterbegin',
        `<p class="modal-title">Ваш заказ:</p>
         <p class="modal-subtitle">Пульсометр ${name}</p>`,
      );
      modalOrder.style.opacity = '1';
      show(modalOrder.parentElement);
      closeModal(modalOrder.parentElement, modalOrder);
      formOrder.addEventListener('submit', () => {
        modalOrder.style.opacity = '0';
        hidden(modalOrder.parentElement);
      });
    });
  });
}
