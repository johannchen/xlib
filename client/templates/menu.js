Session.setDefault('query', null);

Template.menu.events({
  'keypress #search': function(event, template) {
    //event.preventDefault();
    if (event.which === 13) {
      var query = template.find('#search').value;
      Session.set('query', query);
      template.find('#search').value = null;
      FlowRouter.go('/search');
    }
  },
  'click .user-item': function(event, template) {
    $('.user-item').removeClass('active');
    $(event.currentTarget).addClass('active');
  }
});
