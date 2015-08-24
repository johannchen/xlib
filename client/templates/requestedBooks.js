Template.requestedBooks.helpers({
  requestedBooks: function() {
    return MyBooks.find({borrowerId: Meteor.userId()}, {sort: {requestedAt: -1}});
  }
});
