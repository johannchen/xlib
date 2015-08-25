Meteor.subscribe('books');
Session.setDefault('query', null);

Template.searchBooks.helpers({
  books: function() {
    var query = Session.get('query');
    if (query) {
      return Books.find({title: new RegExp(query, 'i')});
    }
  }
});

Template.searchBooks.events({
  'click #search': function(event, template) {
    event.preventDefault();
    var query = template.find('#query').value;
    Session.set('query', query);
    template.find('#query').value = null;
  }
});
