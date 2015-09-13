Template.googleBook.events({
  'click button.add-book': function() {
    Meteor.call('addBook', this);
    Session.set('query', null);
  }
});
