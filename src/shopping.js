import './js/mobile-menu';
import './js/support';
import './js/render-photo-card-footer';
import './js/shopingList';

import refs from './js/refs';
import { changeTheme } from './js/togle-theme';

refs.checkboxEl.addEventListener('change', changeTheme);

// функціонал зміни теми
changeTheme();
