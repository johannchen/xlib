MyBooks = new Mongo.Collection("mybooks");

Meteor.methods({
  requestBook: function(bookId, ownerId) {
    MyBooks.update({bookId: bookId, ownerId: ownerId},
      {
        $set: {
          borrowerId: Meteor.userId(),
          requestedAt: Date.now()
        }
      }
    )
  }
});
