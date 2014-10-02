//  Register coffee-coverage if coverage is enabled.
if (process.env['COVERAGE'])
   require('coffee-coverage').register({
      path: 'abbr',
      basePath: require('path').resolve(__dirname, '../'),
      exclude: ['/test', '/node_modules', '/.git'],
      initAll: true
   })
