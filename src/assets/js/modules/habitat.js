import ReactHabitat from 'react-habitat';

// [PLOP-MARKER-IMPORT]
import PageSearchResults from './PageSearchResults';
import PageKeyDates from './PageKeyDates';
import PageDayView from './PageDayView';
import CalendarContainer from './CalendarContainer';
import PageLanding from './PageLanding';
import EventLayout from './EventLayout';
import Event from './Event';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component
    // [PLOP-MARKER-REGISTRY]
    builder.register(PageSearchResults).as('PageSearchResults');
    builder.register(PageKeyDates).as('PageKeyDates');
    builder.register(PageDayView).as('PageDayView');
    builder.register(CalendarContainer).as('CalendarContainer');
    builder.register(PageLanding).as('PageLanding');
    builder.register(EventLayout).as('EventLayout');
    builder.register(Event).as('Event');

    // Finally, set the container
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes
export default new App();
