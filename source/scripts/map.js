document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.querySelector('.contacts__map-container');
  const imageContainer = document.querySelector('.contacts__image-container');

  if (!mapContainer) {
    return;
  }

  const ymaps = window.ymaps;

  ymaps.ready(() => {
    const yaMapContainer = document.createElement('div');
    yaMapContainer.classList.add('contacts__ya-map');
    yaMapContainer.id = 'map';

    imageContainer.replaceWith(yaMapContainer);

    const myMap = new ymaps.Map('map', {
      center: [59.938679, 30.3230044],
      zoom: 14,
      controls: []
    });

    const isTablet = window.innerWidth >= 768;

    const iconSize = isTablet ? [113, 106] : [57, 53];
    const iconOffset = isTablet ? [-56, -95] : [-26, -42];

    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '../icons/stack.svg#icon-pin',
      iconImageSize: iconSize,
      iconImageOffset: iconOffset
    });

    myMap.geoObjects.add(myPlacemark);

    const yaLink = document.querySelector('.ymaps-2-1-79-copyright__logo');
    yaLink.ariaLabel = 'Янедкс.Карты';
  });
});
