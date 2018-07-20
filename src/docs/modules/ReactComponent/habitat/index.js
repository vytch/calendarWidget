import ReactHabitat from 'react-habitat';
import Component from '../ReactComponent';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component
    builder.register(Component).as('ReactComponent');

    // Finally, set the container
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes
export default new App();
