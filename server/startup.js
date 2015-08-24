Meteor.startup( function() {
  // setup fixtures
  // reset fixtures
  Fixtures.flush(Meteor.users);
  Fixtures.flush(MyBooks);
  Fixtures.flush(Books);
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
        ownerName: johann.username,
        ownerEmail: johann.email,
        ownerId: johann._id,
        bookTitle: love.title,
        bookAuthors: love.authors,
        bookId: love._id,
        createdAt: moment().subtract(1, 'days')
      });

      api.insert('johannbook2', {
        ownerName: johann.username,
        ownerEmail: johann.email,
        ownerId: johann._id,
        bookTitle: bible.title,
        bookAuthors: bible.authors,
        bookId: bible._id,
        createdAt: moment()
      });

      api.insert('johannbook3', {
        ownerName: johann.username,
        ownerEmail: johann.email,
        ownerId: johann._id,
        bookTitle: joy.title,
        bookAuthors: joy.authors,
        bookId: joy._id,
        createdAt: moment().subtract(2, 'days')
      });
    });
  }
});
