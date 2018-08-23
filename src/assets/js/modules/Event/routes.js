import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import routeData from 'data/routeData.json';

const routes = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageLanding,
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
