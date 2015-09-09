Template.registerHelper('dateFormat', function(time) {
  return moment(time).format("YYYY MM DD");
});
