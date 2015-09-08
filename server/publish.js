Meteor.publish("mybooks", function() {
  return MyBooks.find({$or: [{ownerId: this.userId}, {borrowerId: this.userId}]});
});

Meteor.publish('booksSearch', function(query) {
  var self = this;
  try {
    var response = HTTP.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query
      }
    });

    _.each(response.data.items, function(item) {
      var thumb = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      var title = item.volumeInfo.title;
      var authors = item.volumeInfo.authors;
      var link = item.volumeInfo.infoLink;
      var snippet = item.searchInfo && item.searchInfo.textSnippet;
      var doc = {thumb: thumb, title: title, authors: authors, link: link, snippet: snippet};
      self.added('googleBooks', Random.id(), doc);
    });

    self.ready();

  } catch(error) {
    console.log(error);
  }
});
