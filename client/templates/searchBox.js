Session.setDefault('query', null);

Template.searchBox.events({
  'keypress #search': function(event, template) {
    //event.preventDefault();
    if (event.which === 13) {
      var query = template.find('#search').value;
      Session.set('query', query);
      template.find('#search').value = null;
    }
  }
});
