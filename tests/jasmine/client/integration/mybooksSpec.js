describe('My Books', function () {
  // ? what does the done callback do?
  beforeEach(function(done) {
    Meteor.loginWithPassword('johann@mail.com', 'johann', function(err) {
      expect(err).toBeUndefined();
      Tracker.flush();
      done();
    });
  });

  it("should display johann's books with request", function() {
    expect($('#login-name-link')).toContainText('johann');
    expect($('#mybooks-requested ul > li')).toContainText('Four Loves');
  });

  it("should display johann's lended books", function() {
    expect($('#mybooks-lended ul > li')).toContainText('Surprised By Joy');
  });

  it("should display johann's available books", function() {
    expect($('#mybooks ul > li')).toContainText('ESV Bible');
  });

  it("should diplay johann's requested books", function() {
    expect($('#requested-books ul > li')).toContainText('You and Me Forever');
  });

  it("should diplay johann's borrowed books", function() {
    expect($('#borrowed-books ul > li')).toContainText('Too busy not to pray');
  });

});
