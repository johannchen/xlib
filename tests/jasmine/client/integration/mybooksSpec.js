describe('My Books', function () {
  // ? what does the done callback do?
  beforeEach(function(done) {
    Meteor.loginWithPassword('johann@mail.com', 'johann', function(err) {
      expect(err).toBeUndefined();
      Tracker.flush();
      done();
    });
  });

  it("should display johann's books in latest added order", function() {
    expect($('#login-name-link')).toContainText('johann');
    expect($('#mybooks ul > li')).toHaveLength(3);
    expect($('#mybooks ul > li').first()).toContainText('ESV Bible');
  });

  it("should diplay johann's requested books", function() {
    expect($('#requested-books ul > li')).toContainText('You and Me Forever');
  });

  it("should diplay johann's borrowed books", function() {
    expect($('#borrowed-books ul > li')).toContainText('Too busy not to pray');
  });

});
