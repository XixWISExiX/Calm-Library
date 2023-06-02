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

let library = (function () {
  let bookList = [];
  return { bookList };
})();

function Book(bookTitle, bookAuthor, bookPages) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
}

function formSubmit() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;

    const book = new Book(bookTitle, bookAuthor, bookPages);

    addBookToLibrary(book);
    this.reset(); // Reset the form
    renderBookCard(book);
    // library.bookList.forEach((book) => {
    // renderBookCard(book);
    // });
  });
}

function addBookToLibrary(book) {
  library.bookList.push(book);
}

document.addEventListener("DOMContentLoaded", application);
