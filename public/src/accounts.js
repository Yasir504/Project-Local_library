function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++);
  return accounts.find(account => account.id === id);
  
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const lastNameA = a.name.last.toUpperCase();
    const lastNameB = b.name.last.toUpperCase();

    if (lastNameA < lastNameB) {
      return -1;
    }

    if (lastNameA > lastNameB) {
      return 1;
    }

   return 0;
  
  });
}

function getTotalNumberOfBorrows(account, books) {
 return books.reduce((acc, book) => {
    const isBorrowed = book.borrows.every(borrow => borrow.id !== account.id);
    return acc + (isBorrowed ? 0 : 1);
  }, 0);
  /*let count = 0;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id) {
        count++;
      }
    });
  });
  
  return count;*/
  
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const latestBorrow = book.borrows.some(borrow => borrow.id === account.id && !borrow.returned);
    return latestBorrow;
  }).map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {...book, author};
  
  } );

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};