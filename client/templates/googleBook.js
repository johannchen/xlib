Template.googleBook.events({
  'click .add-book': function() {
    Meteor.call('addBook', this);
    Session.set('query', null);
  }
});
