Template.book.onRendered(function() {
  this.$('.ui.dropdown').dropdown();
});

Template.book.events({
  'click .request-book': function(event, template) {
    event.preventDefault();
    //TODO: cannot borrosw book from myself
    var ownerId = template.find('select').value;
    console.log("ownerId: " + ownerId);
    if (ownerId) {
      Meteor.call('requestBook', this._id, ownerId)
    }
  },
  'click .add-book': function() {
    console.log(this);
    Meteor.call('addBook', this);
    Session.set('query', null);
    FlowRouter.go('/mybooks');
  }
});
