Books = new Mongo.Collection('books');

Meteor.methods({
  addBook: function(book) {
    // TODO: avoid duplicate in Books
    Books.insert(book, function(err, id) {
      MyBooks.insert({
        bookId: id,
        ownerId: Meteor.userId(),
        title: book.title,
        authors: book.authors,
        thumb: book.thumb,
        createdAt: Date.now()
      })
    });

  }
});
