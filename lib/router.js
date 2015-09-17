FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", main: "home"});
  }
});

FlowRouter.route('/search', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", main: "searchBooks"});
  }
});

var mybookRoutes = FlowRouter.group({
    prefix: '/mybooks',
    name: 'mybooks'
    /*
    triggersEnter: [function(context, redirect) {
      console.log('running group triggers');
    }]
    */
});

mybookRoutes.route('/', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "mybooks"});
  }
  /*
  triggersEnter: [function(context, redirect) {
    console.log('running /mybooks triggers');
  }]
  */
});

mybookRoutes.route('/pending', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "mybooksRequested"});
  }
});

mybookRoutes.route('/lended', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "mybooksLended"});
  }
});

mybookRoutes.route('/requested', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "requestedBooks"});
  }
});

mybookRoutes.route('/borrowed', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "borrowedBooks"});
  }
});
