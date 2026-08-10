const oldButton = document.querySelector('.product-empty__button');

const template = '<button class="product-empty__button button button--secondary button--size-m" type="button" aria-label="Загрузить больше товаров">показать все</button>';
const newButton = document.createRange().createContextualFragment(template);

export const replaceButton = () => {
  if (!oldButton) {
    return;
  }

  oldButton.replaceWith(newButton);
};
