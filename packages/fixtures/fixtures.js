var resetDatabase = function() {
  // safety check
  if (!process.env.IS_MIRROR) {
    throw new Meteor.Error(
      'NOT_ALLOWED',
      'velocotyReset is not allowed outside of a mirror.'
    );
  }

  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;
  var collections = Meteor.wrapAsync(db.collections, db)();
  var appCollections = _.reject(collections, function(col){
    return col.collectionName.indexOf('velocity') === 0 ||
      col.collectionName === 'system.indexes' ||
      col.collectionName === 'users';
  });
  /* remove app collections */
  _.each(appCollections, function(appCollection) {
    console.log('remove ' + appCollection.collectionName);
    Meteor.wrapAsync(appCollection.remove, appCollection)();
  });
};

var resetTestingEnvironment = function() {
  if (process.env.IS_MIRROR) {
    resetDatabase();
  } else {
    throw new Meteor.Error(
      'NOT_ALLOWED',
      'resetTestingEnvironment can only be executed in a Velocity mirror.'
    );
  }
};

/* firxture methods that called in test */

var createUser = function(userData) {
  var user = Meteor.users.findOne({username: userData.username});

  if (!user) {
    var userId = Accounts.createUser(userData);
    user = Meteor.users.findOne(userId);
  }

  return user;
};

var createUserJohann = function() {
  return createUser({
    email: 'johann@mail.com',
    password: 'johann',
    username: 'johann'
  });
};

var createUserRaymond = function() {
  return createUser({
    email: 'raymond@mail.com',
    password: 'raymond',
    username: 'raymond'
  });
};

var createMyBooks = function(books, ownerId) {
  books.forEach(book => {
    var bookId = Books.insert(book);
    MyBooks.insert({
        ownerId: ownerId,
        bookId: bookId,
        createdAt: Date.now();
      });
  })
  return MyBooks.find({ownerId: ownerId});
};

var createJohannBooks = function () {
  var books = [
    {
      title: 'ESV Bible',
      authors: 'Scholars',
      description: "God's words"
    },
    {
      title: 'Four Loves',
      authors: 'C.S. Lewis',
      description: 'Four kinds of loves'
    },
    {
      title: 'Surprised By Joy',
      authors: 'C.S. Lewis',
      description: 'How Lewis became a Christian'
    }];

  var johann = createUserJohann();
  return createMyBooks(books, johann.id);
};

var createRaymondBooks = function () {
  var books = [
    {
      title: 'You and Me Forever',
      authors: 'Francis Chan',
      description: 'Marriage for eternity'
    },
    {
      title: 'Too busy not to pray',
      authors: 'Bill Hybels',
      description: 'Book about prayer'
    }];

  var raymond = createUserRaymond();
  return createMyBooks(books, raymond.id);
};

var createRequestedBook = function(ownerId, borrowerId, bookId) {
  BorrowedBooks.insert({ownerId, borrowerId, bookId, requestedAt: Date.now()})
};

Meteor.methods({
  resetTestingEnvironment: resetTestingEnvironment,
  'fixtures/users/create': createUser,
  'fixtures/users/createUserJohann': createUserJohann,
  'fixtures/users/createUserRaymond': createUserRaymond,
  'fixtures/books/createJohannBooks': createJohannBooks,
  'fixtures/books/createRaymondBooks': createRaymondBooks
});
