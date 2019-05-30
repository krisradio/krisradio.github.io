var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'KRIS Radio',
      description: "KRIS Radio is electromagnetic pollution for a purpose."
    }
  })
  .source('./posts')
  .destination('./build')
  .use(markdown())
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('KRIS Radio built!');
    }
  });