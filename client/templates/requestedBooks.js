Template.requestedBooks.helpers({
  requestedBooks: function() {
    return MyBooks.find({
      borrowerId: Meteor.userId(),
      requestedAt: {$exists: true},
      borrowedAt: {$exists: false}
    }, {sort: {requestedAt: -1}});
  }
});
