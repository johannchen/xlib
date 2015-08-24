Package.describe({
  name: 'fixtures',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'fixtures for xlib',
  // URL to the Git repository containing the source code for this package.
  // git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  // This tools are only available in development mode! (for security)
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'underscore',
    'mongo'
  ], 'server');
  api.addFiles('fixtures.js', 'server');
});
/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fixtures');
  api.addFiles('fixtures-tests.js');
});
*/
