const button = document.querySelector('.hero__button');
const formButton = document.querySelector('.checkout-form__button');

const TABLET_WIDTH = 748;

const mediaQuery = window.matchMedia(`(min-width: ${TABLET_WIDTH}px)  `);

const handleScreenChange = (evt) => {
  if (evt.matches) {
    if (button) {
      button.classList.remove('button--size-m');
      button.classList.add('button--size-l');
    }

    if (formButton) {
      formButton.classList.remove('button--size-m');
      formButton.classList.add('button--size-l');
    }
    return;
  }

  if (button) {
    button.classList.remove('button--size-l');
    button.classList.add('button--size-m');
  }

  if (formButton) {
    formButton.classList.remove('button--size-l');
    formButton.classList.add('button--size-m');
  }
};

const responsiveButton = () => {
  if (button) {
    mediaQuery.addEventListener('change', handleScreenChange);
    handleScreenChange(mediaQuery);
  }

  if (formButton) {
    mediaQuery.addEventListener('change', handleScreenChange);
    handleScreenChange(mediaQuery);
  }
};

export const initResponsiveButton = () => responsiveButton();
