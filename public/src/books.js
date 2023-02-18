function findAuthorById(authors, id) {
  const foundAuthor = authors.find(author => author.id === id);

  return foundAuthor;
}

function findBookById(books, id) {
   const foundBook = books.find(book => book.id === id);

  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
   const borrowedBooks = [];
  const returnedBooks = [];
  books.forEach(book => {
    const [mostRecent] = book.borrows;
    if (mostRecent.returned) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
  });
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const result = [];
  borrows.forEach(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    if (account) {
      const { returned } = borrow;
      result.push({ ...borrow, ...account });
      result[result.length - 1].returned = returned;
    }
  });
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
