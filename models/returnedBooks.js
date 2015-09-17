ReturnedBooks = new Mongo.Collection("returnedBooks");

Meteor.methods({
  bookReturned: function(book) {
    book.returnedAt = Date.now();
    ReturnedBooks.insert(book);
    MyBooks.update(book._id, {
      $unset: {
        borrowerId:"",
        borrowerName:"",
        borrowedAt:"",
        requestedAt:""
      }
    });
  }
});
