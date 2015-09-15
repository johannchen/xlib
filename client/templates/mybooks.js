Meteor.subscribe("mybooks");

Template.mybooks.helpers({
  mybooks: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      borrowerId: {$exists: false}
    }, {sort: {createdAt: -1}});
  },
  mybookRequests: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      requestedAt: {$exists: true},
      borrowedAt: {$exists: false}
    }, {sort: {requestedAt: -1}});
  },
  myLendedBooks: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      borrowedAt: {$exists: true}
    }, {sort: {borrowedAt: -1}});
  }
});

Template.mybooks.events({
  'click button.accept-request': function() {
    Meteor.call('acceptRequest', this._id);
  },
  'click button.deny-request': function() {
    Meteor.call('denyRequest', this._id);
  }
});
