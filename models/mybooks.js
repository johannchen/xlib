MyBooks = new Mongo.Collection("mybooks");

Meteor.methods({
  //TODO: send email upon request
  requestBook: function(bookId, ownerId) {
    MyBooks.update({bookId: bookId, ownerId: ownerId},
      {
        $set: {
          borrowerId: Meteor.userId(),
          borrowerName: Meteor.user().username,
          requestedAt: Date.now()
        }
      }
    )
  },
  acceptRequest: function(id) {
    MyBooks.update(id, {
      $set: {borrowedAt: Date.now()}
    });
  },  
  denyRequest: function(id) {
    MyBooks.update(id, {
      $unset: {requestedAt:"", borrowerId:"", borrowerName:""}
    });
  }
});
