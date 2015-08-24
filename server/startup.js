Meteor.startup( function() {
  // setup fixtures
  // reset fixtures

  Fixtures.flush(MyBooks);
  Fixtures.flush(Books);
  Fixtures.flush(Meteor.users);
  /**/
  if (Meteor.users.find().count() === 0) {
    // TODO: user fullname
    Fixtures.insert(Meteor.users, 'johann', {
      email: 'johann@mail.com',
      username: 'johann',
      password: 'johann'
    }, Accounts.createUser);
    Fixtures.insert(Meteor.users, 'raymond', {
      email: 'raymond@mail.com',
      username: 'raymond',
      password: 'raymond'
    }, Accounts.createUser);

    // Books
    Fixtures.insert(Books, 'bible', {
      title: 'ESV Bible',
      authors: 'Scholars',
      description: "God's words"
    });
    Fixtures.insert(Books, 'love', {
      title: 'Four Loves',
      authors: 'C.S. Lewis',
      description: 'Four kinds of loves'
    });
    Fixtures.insert(Books, 'joy', {
      title: 'Surprised By Joy',
      authors: 'C.S. Lewis',
      description: 'How Lewis became a Christian'
    });
    Fixtures.insert(Books, 'marriage', {
      title: 'You and Me Forever',
      authors: 'Francis Chan',
      description: 'Marriage for eternity'
    });
    Fixtures.insert(Books, 'pray', {
      title: 'Too busy not to pray',
      authors: 'Bill Hybels',
      description: 'Book about prayer'
    });

    // MyBooks
    Fixtures.create(MyBooks, function(api) {
      var johann = Fixtures.get(Meteor.users, 'johann');
      var raymond = Fixtures.get(Meteor.users, 'raymond');
      var bible = Fixtures.get(Books, 'bible');
      var love = Fixtures.get(Books, 'love');
      var joy = Fixtures.get(Books, 'joy');
      var marriage = Fixtures.get(Books, 'marriage');
      var pray = Fixtures.get(Books, 'pray');

      // my available book
      api.insert('johannbook1', {
        ownerId: johann._id,
        bookId: bible._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: bible.title,
        bookAuthors: bible.authors,
        createdAt: moment()
      });
      // my book got requested
      api.insert('johannbook2', {
        ownerId: johann._id,
        bookId: love._id,
        borrowerId: raymond._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: love.title,
        bookAuthors: love.authors,
        borrowerName: raymond.username,
        requestedAt: moment(),
        createdAt: moment().subtract(1, 'days')
      });
      // my lended books
      api.insert('johannbook3', {
        ownerId: johann._id,
        bookId: joy._id,
        borrowerId: raymond._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: joy.title,
        bookAuthors: joy.authors,
        borrowerName: raymond.username,
        requestedAt: moment().subtract(1, 'days'),
        borrowedAt: moment(),
        createdAt: moment().subtract(2, 'days')
      });
      // my requested books
      api.insert('raymondbook1', {
        ownerId: raymond._id,
        bookId: marriage._id,
        borrowerId: johann._id,
        ownerName: raymond.username,
        ownerEmail: raymond.email,
        bookTitle: marriage.title,
        bookAuthors: marriage.authors,
        requestedAt: moment(),
        createdAt: moment().subtract(1, 'days')
      });
      // my borrowed books
      api.insert('raymondbook2', {
        ownerId: raymond._id,
        bookId: pray._id,
        borrowerId: johann._id,
        ownerName: raymond.username,
        ownerEmail: raymond.email,
        bookTitle: pray.title,
        bookAuthors: pray.authors,
        requestedAt: moment().subtract(1, 'days'),
        borrowedAt: moment(),
        createdAt: moment().subtract(2, 'days')
      });
    });
  }
});
