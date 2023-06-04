import { sidebar, logo, container, bookNumberDisplay } from "./DOMref.js";
import { renderBookCard, buttonHandlers } from "./BookCard.js";

function application() {
  loadDataFromLocalStorage();
  sidebarHeightResize();
  formSubmit();
}

function loadDataFromLocalStorage() {
  // localStorage.clear();
  let savedBookCards = localStorage.getItem("cards");
  if (savedBookCards) {
    container.innerHTML = savedBookCards;
    activateBookCardButtons();
    renderNumberOfBooksRead();
  }
}

function activateBookCardButtons() {
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((bookCard) => {
    bookCard.addEventListener("click", buttonHandlersLocalStorage(bookCard));
  });
}

function buttonHandlersLocalStorage(bookCard) {
  const check = bookCard.querySelector(".check");
  const minus = bookCard.querySelector(".minus");
  const deleteBtn = bookCard.querySelector(".delete-btn");
  buttonHandlers(bookCard, check, minus, deleteBtn);
}

function renderNumberOfBooksRead() {
  let savedNumberOfBooksRead = localStorage.getItem("booksRead");
  if (savedNumberOfBooksRead)
    library.numberOfBooksRead = savedNumberOfBooksRead;
  bookNumberDisplay.innerHTML =
    "Number of Books Read: " + savedNumberOfBooksRead;
}

function sidebarHeightResize() {
  window.addEventListener("resize", function () {
    const logoHeight = logo.offsetHeight;
    const viewportHeight = window.innerHeight;
    const remainingHeight = viewportHeight - logoHeight * 1.31;
    sidebar.style.height = `${remainingHeight}px`;
    // Logo Width Resize
    const viewportWidth = window.innerWidth;
    const remainingWidth = viewportWidth;
    logo.style.width = `${remainingWidth}px`;
  });
  // Trigger the resize event initially to set the sidebar height on page load
  window.dispatchEvent(new Event("resize"));
}

export let library = (function () {
  let numberOfBooksRead = 0;
  let newestBookCardChecked = false;
  return { numberOfBooksRead, newestBookCardChecked };
})();

function Book(bookTitle, bookAuthor, bookPages) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
}

function formSubmit() {
  const form = document.querySelector(".form");
  const bookPages = document.getElementById("book-pages");
  bookPagesErrorHandler(bookPages);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const bookTitle = document.getElementById("book-title");
    const bookAuthor = document.getElementById("book-author");
    library.newestBookCardChecked = checkResultBox();

    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);

    this.reset(); // Reset the form

    renderBookCard(book);
    refreshCounter();
  });
}

function bookPagesErrorHandler(bookPages) {
  bookPages.oninvalid = function (e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Please enter only positive numbers.");
    }
  };
}

function checkResultBox() {
  const checkbox = document.getElementById("book-question");
  if (checkbox.checked) {
    library.numberOfBooksRead++;
    localStorage.setItem("booksRead", library.numberOfBooksRead);
    return true;
  }
  return false;
}

export function refreshCounter() {
  const booksReadDisplay = document.getElementsByClassName(
    "book-number-display"
  );
  booksReadDisplay[0].innerText =
    "Number of Books Read: " + library.numberOfBooksRead;
}

document.addEventListener("DOMContentLoaded", application);
