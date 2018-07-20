import ReactHabitat from 'react-habitat';

// [PLOP-MARKER-IMPORT]
import Event from './Event';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component
    // [PLOP-MARKER-REGISTRY]
    builder.register(Event).as('Event');

    // Finally, set the container
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes
export default new App();
