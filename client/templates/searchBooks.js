Session.setDefault('searching', false);

Tracker.autorun(function() {
   if (Session.get('query')) {
     Meteor.subscribe('books', Session.get('query'));
     var searchHandle = Meteor.subscribe('booksSearch', Session.get('query'));
     Session.set('searching', ! searchHandle.ready());
   }
 });

Template.searchBooks.helpers({
  books: function() {
    return Books.find();
  },
  googleBooks: function() {
    return GoogleBooks.find();
  },
  searching: function() {
    return Session.get('searching');
  },
  query: function() {
    return Session.get('query');
  }

});
