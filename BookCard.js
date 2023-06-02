// TODO Abstract Construction into multiple functions
// TODO make card stay upon refresh (maybe)

export function renderBookCard(book) {
  const bookCard = bookCardConstruction();
  addBookCardTitle(book, bookCard);
  addBookCardAuthor(book, bookCard);
  addBookCardPages(book, bookCard);
  const cardOptions = cardOptionsConstruction();
  addBookCardSvgs(bookCard, cardOptions);
  addBookCard(bookCard);
}

function bookCardConstruction() {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  return bookCard;
}

function addBookCardTitle(book, bookCard) {
  const bookCardTitle = document.createElement("div");
  bookCardTitle.className = "book-card-title";
  bookCardTitle.innerHTML = book.bookTitle;
  bookCard.appendChild(bookCardTitle);
}

function addBookCardAuthor(book, bookCard) {
  const bookCardAuthor = document.createElement("div");
  bookCardAuthor.className = "book-card-author";
  bookCardAuthor.innerHTML = "By: " + book.bookAuthor;
  bookCard.appendChild(bookCardAuthor);
}

function addBookCardPages(book, bookCard) {
  const bookCardPages = document.createElement("div");
  bookCardPages.className = "book-card-pages";
  bookCardPages.innerHTML = book.bookPages + " pages";
  bookCard.appendChild(bookCardPages);
}

function cardOptionsConstruction() {
  const cardOptions = document.createElement("div");
  cardOptions.className = "card-options";
  return cardOptions;
}

function addBookCardSvgs(bookCard, cardOptions) {
  addSvgsToCard(cardOptions);
  bookCard.appendChild(cardOptions);
}

function addSvgsToCard(readBtn) {
  const check = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  check.setAttribute("class", "check");
  check.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  check.setAttribute("viewBox", "0 0 24 24");

  const titleCheck = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  titleCheck.textContent = "Book is Read";
  check.appendChild(titleCheck);

  const pathCheck = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathCheck.setAttribute(
    "d",
    "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9"
  );
  check.appendChild(pathCheck);
  readBtn.appendChild(check);
  // split this
  const minus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  minus.setAttribute("class", "minus");
  minus.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  minus.setAttribute("viewBox", "0 0 24 24");

  const titleMinus = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  titleMinus.textContent = "Book is not Read";
  minus.appendChild(titleMinus);

  const pathMinus = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathMinus.setAttribute(
    "d",
    "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z"
  );
  minus.appendChild(pathMinus);
  readBtn.appendChild(minus);
  // split this
  const deleteBtn = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  deleteBtn.setAttribute("class", "delete-btn");
  deleteBtn.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  deleteBtn.setAttribute("viewBox", "0 0 24 24");

  const titleDelete = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  titleDelete.textContent = "Delete Book";
  deleteBtn.appendChild(titleDelete);

  const pathDelete = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathDelete.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  );
  deleteBtn.appendChild(pathDelete);

  bookCardDisplayCheck(check, minus);
  readBtn.appendChild(deleteBtn);
}

function addBookCard(bookCard) {
  const container = document.querySelector(".main-container");
  container.appendChild(bookCard);
}

function bookCardDisplayCheck(check, minus) {
  check.addEventListener("click", function () {
    check.style.display = "none";
    minus.style.display = "block";
  });

  minus.addEventListener("click", function () {
    minus.style.display = "none";
    check.style.display = "block";
  });
}
