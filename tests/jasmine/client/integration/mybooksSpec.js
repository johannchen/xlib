describe('My Books', function () {
  // ? what does the done callback do?
  beforeEach(function(done) {
    Meteor.loginWithPassword('johann@mail.com', 'johann', function(err) {
      expect(err).toBeUndefined();
      Tracker.flush();
      done();
    });
  });

  it("should display johann's book in latest added order", function() {
    expect($('#login-name-link')).toContainText('johann');
    expect($('#mybooks ul > li')).toHaveLength(3);
    expect($('#mybooks ul > li').first()).toContainText('ESV Bible');
  });

});
