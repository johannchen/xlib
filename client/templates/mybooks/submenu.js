Template.submenu.events({
  'click .item': function(event, template) {
    $('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
  }
});
