Meteor.publish("mybooks", function() {
  return MyBooks.find({$or: [{ownerId: this.userId}, {borrowerId: this.userId}]});
});

Meteor.publish("books", function() {
  return Books.find();
})
