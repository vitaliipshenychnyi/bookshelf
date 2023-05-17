import './js/mobile-menu';
import './js/support';
import './js/render-photo-card-footer';
import './js/shopingList';

// !!! функціонал відкриття вікна регістрації
import './js/authentication-service/auth-service';
import './js/authentication-service/auth-form-toggle';
import './js/authentication-service/auth-formdata';
import './js/firebase-service/firebase-service';

import refs from './js/refs';
import { changeTheme } from './js/togle-theme';

refs.checkboxEl.addEventListener('change', changeTheme);

// функціонал зміни теми
changeTheme();
