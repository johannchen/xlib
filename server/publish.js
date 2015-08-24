Meteor.publish("mybooks", function() {
  return MyBooks.find({ownerId: this.userId});
});
