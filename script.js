import { body, sidebar, logo } from "./DOMref.js";
import { renderBookCard } from "./BookCard.js";

function application() {
  sidebarHeightResize();
  formSubmit();
}

function sidebarHeightResize() {
  window.addEventListener("resize", function () {
    const logoHeight = logo.offsetHeight;
    const viewportHeight = window.innerHeight;
    const remainingHeight = viewportHeight - logoHeight * 1.31;
    sidebar.style.height = `${remainingHeight}px`;
  });
  // Trigger the resize event initially to set the sidebar height on page load
  window.dispatchEvent(new Event("resize"));
}

export let library = (function () {
  // let bookList = [];
  let numberOfBooksRead = 0;
  let newestBookCardChecked = false;
  return { numberOfBooksRead };
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

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const numberOfBookPages = bookPages.value;
    library.newestBookCardChecked = checkResultBox();

    const book = new Book(bookTitle, bookAuthor, numberOfBookPages);

    // addBookToLibrary(book);
    this.reset(); // Reset the form
    renderBookCard(book);
    // library.bookList.forEach((book) => {
    // renderBookCard(book);
    // });
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
    return true;
  }
  return false;
}

// function addBookToLibrary(book) {
//   library.bookList.push(book);
// }

export function refreshCounter() {
  const booksReadDisplay = document.getElementsByClassName(
    "book-number-display"
  );
  const booksReadDisplayText = "Number of Books Read: ";
  booksReadDisplay[0].innerText =
    booksReadDisplayText + library.numberOfBooksRead;
}

document.addEventListener("DOMContentLoaded", application);
