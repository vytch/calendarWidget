var config = {
  "specs": function({$, eachIntanceOf}){
    eachIntanceOf('table', function(el){
      el.hasChild('thead');
    });
  },
  "pages": [
    {
      host: 'localhost',
      port: 8080,
      method: 'GET',
      path: '/'
    },
    {
      host: 'localhost',
      port: 8080,
      method: 'GET',
      path: '/templates/Test1/'
    }
  ],
  "forbiddenSelectors": [
      ".test1", ".test2"
  ]
};

module.exports = config;