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

function show(element) {
  if (element.style.display != 'block') {
    element.style.display = 'block';
  }
  element.classList.add('active');
  element.classList.add('animate__animated');
  element.classList.add('animate__fadeIn');
  element.style.zIndex = '1';
  setTimeout(() => {
    element.style.opacity = '1';
  }, 0);
}

function hide(element) {
  element.classList.remove('animate__fadeIn');
  element.classList.remove('animate__animated');

  setTimeout(() => {
    element.style.opacity = '0';
    setTimeout(() => {
      element.classList.remove('active');
      element.style.display = 'none';
      element.style.zIndex = '-1';
    }, 400);
  }, 10);
}

function openModal(buttons, form, formParent) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      body.style.overflow = 'hidden';
      formParent.style.opacity = '1';
      form.style.opacity = '1';
      show(formParent);
      closeModal(formParent, form);
    });
  });
}

function closeModal(modal, elem) {
  if (modal.classList.contains('active')) {
    closeButton.forEach((item) => {
      modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target === item || !target.closest('.modal-block')) {
          elem.style.opacity = '0';
          hide(modal);
          body.style.overflow = 'auto';
          body.style.overflowX = 'hidden';
        }
      });
    });
  }
}

function showFeedback(formParent) {
  feedback.style.opacity = '1';
  hide(formParent);
  show(feedback.parentElement);
  closeModal(feedback.parentElement, formParent);
}

// const postForm = (url, data) => {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: data,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// };

function handleFormSubmit(formElem) {
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // const formData = new FormData(form);
      // const jsonData = {};
      // formData.forEach((value, key) => {
      //   jsonData[key] = value;
      // });
      // postForm('http://localhost:3000/people', JSON.stringify(jsonData));

      body.style.overflow = 'hidden';
      hide(formElem.parentElement);
      formElem.style.opacity = '0';
      showFeedback(formElem.parentElement);
      closeModal(feedback.parentElement, feedback);
    });
  });
}

function handleOrderClick() {
  beforeOrderElements.forEach((element) => {
    element.addEventListener('click', () => {
      body.style.overflow = 'hidden';
      document
        .querySelectorAll('#order_section .modal-subtitle')
        .forEach((el) => el.remove());
      document
        .querySelectorAll('#order_section .modal-title')
        .forEach((el) => el.remove());
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
        hide(modalOrder.parentElement);
      });
    });
  });
}

function init() {
  openModal(beforeFormElements, modalForm, modalForm.parentElement);
  handleFormSubmit(modalForm);
  handleOrderClick();
}

init();
