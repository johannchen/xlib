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
  'click #search': function(evt) {
    evt.preventDefault();
    var query = $('#query').val();
    Session.set('query', query);
  }
});
