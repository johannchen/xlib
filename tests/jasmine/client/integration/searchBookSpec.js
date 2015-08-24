describe('Search Book', function() {
  beforeEach(function(done) {
    Meteor.loginWithPassword('johann@mail.com', 'johann', function(err) {
      Tracker.flush();
      done();
    });
  });

  it('should search book title', function() {
    $('#query').val('discipline');
    $('#search').click();
    expect($('#search-result ul > li')).toContainText('Celebration of Discipline');
  });
});
