const routes = require('../data/routeData.json');

const getRoutePaths = (routes, prefix) => {
  let paths = [];
  const pathPrefix = prefix || '';
  for(let route of routes) {
    paths = [...paths, pathPrefix + route.path];
    if(Array.isArray(route.childRoutes)){
      for( let childRoute of route.childRoutes) {
        const extras = childRoute.params.componentList.map(component => {
          return childRoute.path.replace(/:[a-z]+/, component);
        });
        paths = [...paths, ...extras];
      }
      
    }
  }
  return paths;
}
const paths = getRoutePaths(routes.routes);
// console.log('===================');
// console.log('paths',paths);
// console.log('===================');
module.exports = {
  routes: paths
}
