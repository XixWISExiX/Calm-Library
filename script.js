import { body, sidebar, logo } from "./DOMref.js";

function application() {
  sidebarHeightResize();
}

let library = (function () {
  let bookList = [];
  return { bookList };
})();

// EXTRA CODE WHICH CAN BE BUILT UPON, BUT NOT CURRENTLY NEEDED
// function Book(book) {
//   this.book = book;
// }

// function addBookToLibrary(book) {
//   //import
//   let book = new Book("");
//   library.bookList.push("oj");
// }

// let boo = new Book("dog");

// library.bookList.push(boo.book);
// console.log(library.bookList);

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

document.addEventListener("DOMContentLoaded", application);
