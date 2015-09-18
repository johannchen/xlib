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
    // do not return my books
    /*
    var myBookIds = MyBooks.find({ownerId: Meteor.userId()},
      {fields: {bookId:1}}).map(function(book) {
        return book.bookId;
    });
    return Books.find({}, {$nin: myBookIds});
    */
    return Books.find();
  },
  booksFound: function() {
    return Books.find().count() > 0;
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
