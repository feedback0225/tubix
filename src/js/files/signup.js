const signupForm = document.querySelector('.signup__form');
if (signupForm) {
  const nameInput = signupForm.querySelector('#name');
  const emailInput = signupForm.querySelector('#email');
  const passwordInput = signupForm.querySelector('#password');
  const confirmPasswordInput = signupForm.querySelector('#confirm-password');
  const checkbox = signupForm.querySelector('#checkbox');
  const submitBtn = document.querySelector('.signup__submit');
  signupForm.addEventListener('change', () =>
    isDisabled(
      [
        nameInput.value.trim(),
        emailInput.value.trim(),
        passwordInput.value.trim(),
        confirmPasswordInput.value.trim(),
        checkbox.checked,
      ],
      submitBtn
    )
  );
}

const signupPopupForm = document.querySelector('.popup__form.signup');

if (signupPopupForm) {
  const namePopInput = signupPopupForm.querySelector('#name');
  const emailPopInput = signupPopupForm.querySelector('#email');
  const passwordPopInput = signupPopupForm.querySelector('#password');
  const confirmPasswordPopInput = signupPopupForm.querySelector('#confirm-password');
  const checkbox = signupPopupForm.querySelector('.checkbox input');
  const submitPopBtn = signupPopupForm.querySelector('.popup__submit');
  signupPopupForm.addEventListener('change', () =>
    isDisabled(
      [
        namePopInput.value.trim(),
        emailPopInput.value.trim(),
        passwordPopInput.value.trim(),
        confirmPasswordPopInput.value.trim(),
        checkbox.checked,
      ],
      submitPopBtn
    )
  );
}

const loginForm = document.querySelector('.popup__form.login');

if (loginForm) {
  const emailPopInput = loginForm.querySelector('#email');
  const passwordPopInput = loginForm.querySelector('#password');
  const submitPopBtn = loginForm.querySelector('.popup__submit');
  loginForm.addEventListener('change', () =>
    isDisabled([emailPopInput.value.trim(), passwordPopInput.value.trim()], submitPopBtn)
  );
}

function isDisabled(arr, btn) {
  setTimeout(() => {
    const filteredArr = arr.filter((item) => item);
    const errors = document.querySelectorAll('.form__error');
    if (filteredArr.length === arr.length && !errors.length) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }, 0);
}

const createChannelForm = document.querySelector('.create-channel-form');

if (createChannelForm) {
  const submitPopBtn = createChannelForm.querySelector('button:last-child');
  const nameInput = createChannelForm.querySelector('#name');
  createChannelForm.addEventListener('change', () =>
    isDisabled([nameInput.value.trim()], submitPopBtn)
  );
}

const contactsForm = document.querySelector('.contacts__form');
if (contactsForm) {
  const submitPopBtn = contactsForm.querySelector('button:last-child');
  const nameInput = contactsForm.querySelector('#name');
  const emailInput = contactsForm.querySelector('#email');

  contactsForm.addEventListener('change', () =>
    isDisabled([nameInput.value.trim(), emailInput.value.trim()], submitPopBtn)
  );
}
