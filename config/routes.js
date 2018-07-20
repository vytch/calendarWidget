import Home from 'docs-pages/Home';
import Demo from 'docs-pages/Demo';
import Template from 'docs-pages/Template';
import Styleguide from 'docs-pages/Styleguide';
import routeData from 'data/routeData.json';

const routes = routeData;

const allocations = {
  '/': Home,
  '/demo': Demo,
  '/styleguide': Styleguide,
  '/templates': Template,
};

const assignComponents = (routes, allocation) => {
  return routes.map(route => {
    route.component = allocation[route.path];
    return route;
  });
};


routes.routes = assignComponents(routes.routes, allocations);
export default routes;
