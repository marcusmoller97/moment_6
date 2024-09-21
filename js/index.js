/**
 * @main
 * @author Marcus Möller
 */

import { formBtnInput, clickEvent } from './modules.js';

formBtnInput();
const btn = document.querySelector("button");
btn.addEventListener("click", clickEvent);
