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
  },
  name: 'mybooks'
  /*
  triggersEnter: [function(context, redirect) {
    console.log('running /mybooks triggers');
  }]
  */
});

mybookRoutes.route('/pending', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "mybooksRequested"});
  },
  name: 'pending'
});

mybookRoutes.route('/lended', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "mybooksLended"});
  },
  name: 'lended'
});

mybookRoutes.route('/requested', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "requestedBooks"});
  },
  name: 'requested'
});

mybookRoutes.route('/borrowed', {
  action: function() {
    BlazeLayout.render("layout", {top: "menu", submenu: "submenu", main: "borrowedBooks"});
  },
  name: 'borrowed'
});
