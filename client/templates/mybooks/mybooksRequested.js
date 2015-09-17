Template.mybooksRequested.helpers({
  mybookRequests: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      requestedAt: {$exists: true},
      borrowedAt: {$exists: false}
    }, {sort: {requestedAt: -1}});
  }
});

Template.mybooksRequested.events({
  'click button.accept-request': function() {
    Meteor.call('acceptRequest', this._id);
  },
  'click button.deny-request': function() {
    Meteor.call('denyRequest', this._id);
  }
});
