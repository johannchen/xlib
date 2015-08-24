Template.borrowedBooks.helpers({
  borrowedBooks: function() {
    return MyBooks.find({
      borrowerId: Meteor.userId(),
      borrowedAt: {$exists: true, $ne: null}
    }, {sort: {borrowedAt: -1}});
  }
});
