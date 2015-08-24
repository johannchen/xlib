Meteor.subscribe("mybooks");

Template.mybooks.helpers({
  mybooks: function() {
    return MyBooks.find({ownerId: Meteor.userId()}, {sort: {createdAt: -1}});
  }
})
