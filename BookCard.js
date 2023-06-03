// TODO make card stay upon refresh

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
  addSvgsToCard(bookCard, cardOptions);
  bookCard.appendChild(cardOptions);
}

function addBookCard(bookCard) {
  const container = document.querySelector(".main-container");
  container.appendChild(bookCard);
}

function addSvgsToCard(bookCard, cardOptions) {
  const check = checkConstruction();
  cardOptions.appendChild(check);

  const minus = minusConstruction();
  cardOptions.appendChild(minus);

  const deleteBtn = deleteBtnConstruction();
  cardOptions.appendChild(deleteBtn);

  bookCardDisplayCheck(check, minus);
  bookCardDeleteCheck(bookCard, deleteBtn);
}

function checkConstruction() {
  const check = setSvgAttributes("check");

  const titleCheck = setSvgTitle("Book is Read");
  check.appendChild(titleCheck);

  const pathCheck = setSvgPath(
    "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9"
  );
  check.appendChild(pathCheck);
  return check;
}

function minusConstruction() {
  const minus = setSvgAttributes("minus");

  const titleMinus = setSvgTitle("Book is not Read");
  minus.appendChild(titleMinus);

  const pathMinus = setSvgPath(
    "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z"
  );
  minus.appendChild(pathMinus);
  return minus;
}

function deleteBtnConstruction() {
  const deleteBtn = setSvgAttributes("delete-btn");

  const titleDelete = setSvgTitle("Delete Book");
  deleteBtn.appendChild(titleDelete);

  const pathDelete = setSvgPath(
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  );
  deleteBtn.appendChild(pathDelete);
  return deleteBtn;
}

function setSvgAttributes(className) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", className);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  return svg;
}

function setSvgTitle(title) {
  const svgTitle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  svgTitle.textContent = title;
  return svgTitle;
}

function setSvgPath(attributeFunction) {
  const svgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  svgPath.setAttribute("d", attributeFunction);
  return svgPath;
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

function bookCardDeleteCheck(bookCard, deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    bookCard.remove();
  });
}
