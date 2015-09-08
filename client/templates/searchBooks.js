Session.setDefault('searching', false);

Tracker.autorun(function() {
   if (Session.get('query')) {
     var searchHandle = Meteor.subscribe('booksSearch', Session.get('query'));
     Session.set('searching', ! searchHandle.ready());
   }
 });

Template.searchBooks.helpers({
  books: function() {
    /*
    let query = Session.get('query');
    if (query) {
      return Books.find({title: new RegExp(query, 'i')});
    }
    */
    return GoogleBooks.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});
