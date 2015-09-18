Meteor.subscribe("mybooks");

Template.mybooks.helpers({
  mybooks: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      borrowerId: {$exists: false}
    }, {sort: {createdAt: -1}});
  }
});
Template.mybooks.events({
  'click button.remove': function() {
    Meteor.call('removeBook', this._id);
  }
});
