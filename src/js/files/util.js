const searchCon = document.querySelector('.search');
const searchInput = document.querySelector('.search__box');
const searchIcon = document.querySelector('.search__icon');
const searchResults = document.querySelector('.search__results');
const closeIcon = document.querySelector('.close');

closeIcon.addEventListener('click', () => {
  searchInput.value = '';
  searchResults.classList.remove('active');
  searchCon.classList.remove('focus');
  closeIcon.style.opacity = '0';
});

searchInput.addEventListener('focus', () => {
  searchIcon.classList.add('hide');
  searchInput.classList.add('hide');
  closeIcon.style.opacity = '1';
});

searchInput.addEventListener('blur', (e) => {
  searchIcon.classList.remove('hide');
  searchInput.classList.remove('hide');
  inputCheck(e);
});

searchInput.addEventListener('input', (e) => {
  inputCheck(e);
});

const inputCheck = (e) => {
  if (e.target.value.length >= 2) {
    searchResults.classList.add('active');
    searchCon.classList.add('focus');
  } else if (e.target.value.length >= 1) {
    closeIcon.style.opacity = '1';
  } else {
    searchResults.classList.remove('active');
    searchCon.classList.remove('focus');
    closeIcon.style.opacity = '0';
  }
};

const text = document.querySelector('.earn .copy__text');
if (text) {
  const textValue = text.innerHTML;
  const compon = document.querySelector('.copy__component');
  const copyBtn = document.querySelector('.earn #copyText');
  copyBtn.addEventListener('click', () => {
    copyContent(textValue, compon);
  });
}

const text2 = document.querySelector('.pocket .copy__text');
if (text2) {
  const textValue = text2.value;
  const copyBtn2 = document.querySelector('.pocket #copyText');
  const compon2 = document.querySelector('.pocket .current');
  copyBtn2.addEventListener('click', () => {
    copyContent(textValue, compon2);
  });
}

const copyContent = (text, component) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('copy__tooltip');
  tooltip.innerHTML = `
  <svg class="icon-20">
            <use xlink:href="../img/sprite.svg#check" />
          </svg>
          <span>Скопировано</span>
  `;
  tooltip.classList.add('active');
  const textArea = document.createElement('textarea');
  textArea.textContent = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
  component.appendChild(tooltip);
  setTimeout(() => {
    removeTooltip(tooltip);
  }, 2000);
};

const removeTooltip = (tooltip) => {
  tooltip.classList.remove('active');
  tooltip.remove();
};

const toggle = document.querySelector('.toggle-categories');

if (toggle) {
  const buttons = toggle.querySelectorAll('button');

  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      buttons.forEach((item) => {
        item.classList.remove('active');
        item.classList.add('not-active');
      });
      buttons[i].classList.remove('not-active');
      buttons[i].classList.add('active');
    });
  });
}

// const contactsForm = document.querySelector('.contacts__form');
// if (contactsForm) {
//   const submitBtn = contactsForm.querySelector('button:last-child');
//   submitBtn.addEventListener('click', () => {
//     console.log(1);
//     const errors = document.querySelectorAll('._form-error');
//     if (errors.length) {
//       submitBtn.disabled;
//     }
//   });
// }

const complaintItems = document.querySelectorAll('.complaint-item');
if (complaintItems) {
  complaintItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      complaintItems.forEach((item) => {
        item.style.opacity = 0.4;
      });
      complaintItems[i].style.opacity = 1;
    });
  });
}
