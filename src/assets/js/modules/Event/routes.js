import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import KeyDates from 'fed-modules/PageKeyDates';
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
    {
      path: '/kay-dates',
      name: 'Key Dates',
      component: KeyDates,
      params: {
        layout: 'Key Dates',
      },
    },
  ],
};


routes.routes = routes.routes;
export default routes;
