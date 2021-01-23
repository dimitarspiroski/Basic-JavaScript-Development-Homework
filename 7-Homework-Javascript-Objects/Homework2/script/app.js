// SELECTORS
let bookTitleInput = document.querySelector("#book-title");
let authorNameInput = document.querySelector("#author-name");
let isBookRead = document.querySelector("#is-book-read");
let submitBtn = document.querySelector("#submit-btn");
let displayMsg = document.querySelector("#display-msg");

// CONSTRUCTOR
function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
  this.readingStatusPrint = function () {
    if (this.readingStatus) {
      return `You have read ${this.title} by ${this.author}.`;
    } else {
      return `You still need to read ${this.title} by ${this.author}.`;
    }
  };
}

// FUNCTIONS
function validateInput(title, author, readingStatus) {
  if (title && author) {
    let book = new Book(title, author, readingStatus);
    displayMsg.innerText = book.readingStatusPrint();
  } else {
    displayMsg.innerText = `Error! Check your inputs!`;
  }
}
// EVENT HANDLER
submitBtn.addEventListener("click", function () {
  validateInput(
    bookTitleInput.value,
    authorNameInput.value,
    isBookRead.checked
  );
});
