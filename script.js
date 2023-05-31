import { body, sidebar, logo } from "./DOMref.js";

function application() {
  sidebarHeightResize();
  formSubmit();
}

let library = (function () {
  let bookList = [];
  return { bookList };
})();

function Book(bookName, bookAuthor, bookPages) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
}

function addBookToLibrary(book) {
  library.bookList.push(book);
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

function formSubmit() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const bookName = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;

    addBookToLibrary(new Book(bookName, bookAuthor, bookPages));
    // library.bookList.forEach((book) => {
    //   console.log("Title: " + book.bookName);
    //   console.log("Author: " + book.bookAuthor);
    //   console.log("Pages: " + book.bookPages);
    // });
    this.reset(); // Reset the form
  });
}

// TODO make inputs have patterns

// TODO make cards for books

document.addEventListener("DOMContentLoaded", application);
