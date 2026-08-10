/* в этот файл добавляет скрипты*/
import {initToggleMenu, initCangeSiteNavTheme} from './nav';
import { initResponsiveButton } from './responsive-button';
import { replaceButton } from './replace-button';

const init = () => {
  initToggleMenu();
  initResponsiveButton();
  initCangeSiteNavTheme();
  replaceButton();
};

init();
