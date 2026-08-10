const navButton = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__site-nav');

const mainNav = document.querySelector('.main-nav');
const isAvailableJS = mainNav.classList.contains('main-nav--nojs');

const checkAvailableJS = () => {
  if (isAvailableJS) {
    mainNav.classList.remove('main-nav--nojs');
    mainNav.querySelector('.main-nav__site-nav').classList.remove('site-nav--opened');
  }
};

checkAvailableJS();

const TOGGLE_TEXT = {
  OPENED: 'Открыть меню',
  CLOSED: 'Закрыть меню',
};

const toggleMenu = () => {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('toggle-button--opened');
    navButton.ariaLabel = navButton.ariaLabel === TOGGLE_TEXT.OPENED ? TOGGLE_TEXT.CLOSED : TOGGLE_TEXT.OPENED;

    const isExpanded = navButton.ariaExpanded === 'true';
    navButton.ariaExpanded = !isExpanded;

    navList.classList.toggle('site-nav--opened');
  });
};

export const initToggleMenu = () => toggleMenu();


const DESKTOP_WIDTH = 1260;
const PAGE_TYPE = 'index';

const pageType = document.documentElement.dataset.pageType;
const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_WIDTH}px)  `);

const handleScreenChange = (evt) => {
  if (pageType === PAGE_TYPE) {
    if (evt.matches) {
      navList.classList.add('site-nav--theme-accent');

      return;
    }

    navList.classList.remove('site-nav--theme-accent');
  }

};

const changeSiteNavTheme = () => {
  if (!navList) {
    return;
  }

  mediaQuery.addEventListener('change', handleScreenChange);
  handleScreenChange(mediaQuery);
};

export const initCangeSiteNavTheme = () => changeSiteNavTheme();
