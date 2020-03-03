var path = require('path');
var apos = require('apostrophe')({
  shortName: 'test-headless',
  modules: {
    'apostrophe-headless': {
      apiKeys: 'myapikey'
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'people':{
      restApi: true
    }

  }
});
