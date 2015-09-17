Meteor.subscribe("mybooks");

Template.mybooks.helpers({
  mybooks: function() {
    return MyBooks.find({
      ownerId: Meteor.userId(),
      borrowerId: {$exists: false}
    }, {sort: {createdAt: -1}});
  }
});
