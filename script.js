let library = (function () {
  let bookList = [];
  return { bookList };
})();

function Book(book) {
  this.book = book;
}

function addBookToLibrary(book) {
  //import
  let book = new Book("");
  library.bookList.push("oj");
}

let boo = new Book("dog");

library.bookList.push(boo.book);
console.log(library.bookList);
