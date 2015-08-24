Meteor.startup( function() {
  // setup fixtures
  // reset fixtures

  Fixtures.flush(Meteor.users);
  Fixtures.flush(MyBooks);
  Fixtures.flush(Books);
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

      api.insert('johannbook1', {
        ownerId: johann._id,
        bookId: love._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: love.title,
        bookAuthors: love.authors,
        createdAt: moment().subtract(1, 'days')
      });

      api.insert('johannbook2', {
        ownerId: johann._id,
        bookId: bible._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: bible.title,
        bookAuthors: bible.authors,
        createdAt: moment()
      });

      api.insert('johannbook3', {
        ownerId: johann._id,
        bookId: joy._id,
        ownerName: johann.username,
        ownerEmail: johann.email,
        bookTitle: joy.title,
        bookAuthors: joy.authors,
        createdAt: moment().subtract(2, 'days')
      });

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
    });
  }
});
