const getTotalBooksCount = (books) => books.length;

function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
 const borrowedBooks = books.filter(book => !book.borrows[0].returned);
 return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  const genres = books.map(book => book.genre);
 const genreCounts = genres.reduce((acc, genre) => {
   if (!acc[genre]) {
     acc[genre] = 1;
   } else {
     acc[genre]++;
   }
   return acc;
 }, {});
 const sortedGenres = Object.keys(genreCounts).sort((a, b) => genreCounts[b] - genreCounts[a]);
 return sortedGenres.map(genre => ({ name: genre, count: genreCounts[genre] })).slice(0, 5);
}

function getMostPopularBooks(books) {
 const bookCounts = books.map(book => {
   return {
     name: book.title,
     count: book.borrows.length
   }
 }).sort((a, b) => b.count - a.count).slice(0, 5);
 return bookCounts;
}

function getMostPopularAuthors(books, authors) {
 const authorCounts = books.reduce((acc, book) => {
   const author = authors.find(author => author.id === book.authorId);
   const name = `${author.name.first} ${author.name.last}`;
   if (!acc[name]) {
     acc[name] = book.borrows.length;
   } else {
     acc[name] += book.borrows.length;
   }
   return acc;
 }, {});
 const sortedAuthors = Object.keys(authorCounts).map(name => {
   return {
     name: name,
     count: authorCounts[name]
   }
 }).sort((a, b) => b.count - a.count).slice(0, 5);
 return sortedAuthors;
}

module.exports = {
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
 getMostCommonGenres,
 getMostPopularBooks,
 getMostPopularAuthors,
};
