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
    var self = this;
    var book = {
      _id: self._id,
      title: self.title,
      authors: self.authors,
      thumb: self.thumb
    };
    Meteor.call('addBook', book);
    Session.set('query', null);
    FlowRouter.go('/mybooks');
  }
});
