import ReactHabitat from 'react-habitat';

// [PLOP-MARKER-IMPORT]
import PageDayView from './PageDayView';
import CalendarContainer from './CalendarContainer';
import LandingPage from './LandingPage';
import EventLayout from './EventLayout';
import Event from './Event';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component
    // [PLOP-MARKER-REGISTRY]
    builder.register(PageDayView).as('PageDayView');
    builder.register(CalendarContainer).as('CalendarContainer');
    builder.register(LandingPage).as('LandingPage');
    builder.register(EventLayout).as('EventLayout');
    builder.register(Event).as('Event');

    // Finally, set the container
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes
export default new App();
