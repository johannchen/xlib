Template.mybooksLended.helpers({
  myLendedBooks: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      borrowedAt: {$exists: true}
    }, {sort: {borrowedAt: -1}});
  }
});
