
const sliderContainer = document.querySelector('.slider');
const sliderButton = sliderContainer.querySelector('.slider__button');

const KEY_CODE = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

const MAX_STEP = 100;
const MIN_STEP = 0;
const SHIFT_STEP = 5;

let isDragging = false;
let currentPercentage = 50;

const calculatePercentage = (mouseCoordX) => {
  const rect = sliderContainer.getBoundingClientRect();

  const containerWidth = rect.width;
  const containerCoordX = rect.left;

  const shiftX = mouseCoordX - containerCoordX;
  const percentage = (shiftX / containerWidth) * 100;

  return percentage;
};

const updateSlidePosition = (percentage) => {
  currentPercentage = Math.max(MIN_STEP, Math.min(MAX_STEP, percentage));

  sliderContainer.style.setProperty('--slide-pos', `${currentPercentage}%`);
};

const moveSlideByKeyboard = (key) => {
  switch (key) {
    case KEY_CODE.LEFT:
      updateSlidePosition(currentPercentage - SHIFT_STEP);
      break;
    case KEY_CODE.RIGHT:
      updateSlidePosition(currentPercentage + SHIFT_STEP);
      break;
  }
};

const onKeyDown = (evt) => {
  const isArrowKey = Object.values(KEY_CODE).includes(evt.key);

  if (isArrowKey) {
    evt.preventDefault();
    moveSlideByKeyboard(evt.key);
  }
};

const moveSlide = (mouseCoordX) => {
  if (!isDragging) {
    return;
  }

  const percentage = calculatePercentage(mouseCoordX);
  updateSlidePosition(percentage);
};

sliderButton.addEventListener('pointerdown', (evt) => {
  isDragging = true;
  moveSlide(evt.clientX);
});

window.addEventListener('pointerup', () => (isDragging = false));

window.addEventListener('pointermove', (evt) => {
  moveSlide(evt.clientX);
});

sliderButton.addEventListener('keydown', onKeyDown);
