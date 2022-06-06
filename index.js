import * as menu from './modules/menu.js';
import { Book } from './modules/storage.js';
import { DateTime } from "./modules/luxon.min.js";

menu.navigationMenu();

const now = DateTime.now();
let dateTime = document.querySelector('.datetime time');
dateTime.setAttribute('datetime', now);
dateTime.innerHTML = now.toString();

const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');

const bk = new Book(titleInput, authorInput);

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  bk.addbook();
  Book.clearfields();
  Book.fetchbooks();
});

Book.fetchbooks();

document.querySelectorAll('#remove-book').forEach((button, id) => {
  button.addEventListener('click', () => {
    Book.removebook(id);
    Book.fetchbooks();
  });
});
