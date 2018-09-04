import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import KeyDates from 'fed-modules/PageKeyDates';
import SearchResults from 'fed-modules/PageSearchResults';
import CalendarSearch from 'core/Components/CalendarSearch';
import routeData from 'data/routeData.json';

const routes = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageLanding,
      params: {
        layout: 'Home',
      },
    },
    {
      path: '/day',
      name: 'Day',
      component: DayView,
      params: {
        layout: 'Day',
      },
    },
    {
      path: '/kay-dates',
      name: 'KeyDates',
      component: KeyDates,
      params: {
        layout: 'KeyDates',
      },
    },
    {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults,
      params: {
        layout: 'SearchResults',
      },
    },
  ],
};


routes.routes = routes.routes;
export default routes;
