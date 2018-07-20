import React from 'react';
// import PropTypes from 'prop-types';
import componentData from 'data/componentData';
import CodeExample from './CodeExample';
import PropsDisplay from './Props';
import './style.scss';

/** This is the ReactComponent component. */
class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
      isMenuOpen: false,
    };
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
        isMenuOpen: false,
      });
    });
  }
  render() {
    console.log(componentData);
    const {route} = this.state;
    const component = componentData.find(item => item.name === route);

    return (
      <div>
        <ul>
          {componentData.map(component => {
            return <li key={component.name}><a href={`#${component.name}`}>{component.name}</a></li>;
          })}

        </ul>
        { component &&
          <div>
            <h3>{component.name}</h3>
            <p>{component.description}</p>
            <PropsDisplay props={component.props} />

            {component.examples.map(example => {
              const Example = require(`../../../assets/js/react/core/Components/${component.name}/examples/${example.name}.jsx`).default; // eslint-disable-line
              return (
                <div key={example.name}>
                  <h4>{example.name}</h4>
                  <h4>{example.description}</h4>
                  <Example />
                  <CodeExample>{example.code}</CodeExample>
                </div>
              );
            })}
          </div>
        }

      </div>
    );
  }
}

ReactComponent.defaultProps = {
};

ReactComponent.propTypes = {
};

export default ReactComponent;
