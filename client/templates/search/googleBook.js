Template.googleBook.events({
  'click .add-google-book': function() {
    Meteor.call('addGoogleBook', this);
    Session.set('query', null);
    FlowRouter.go('/mybooks');
  }
});
