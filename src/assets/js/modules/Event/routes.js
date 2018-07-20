import LandingPage from 'core-partials/display/templates/LandingPage';
import DayView from 'core-partials/display/templates/DayView';
import routeData from 'data/routeData.json';

const routes = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: DayView,
      params: {
        layout: 'Demo',
      },
    },
  ],
};


routes.routes = routes.routes;
export default routes;
