import './js/mobile-menu';
import './js/support';
import './js/render-photo-card-footer';
import './js/shopingList';

// !!! функціонал відкриття вікна регістрації
import './js/authentication-service/auth-formdata';

import refs from './js/refs';
import { changeTheme } from './js/togle-theme';

refs.checkboxEl.addEventListener('change', changeTheme);

// функціонал зміни теми
changeTheme();
