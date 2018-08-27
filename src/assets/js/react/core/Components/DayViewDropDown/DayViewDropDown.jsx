import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header } from 'semantic-ui-react';
import Button from '../Button';
import './style.scss';

const options = [
  {
    key: 'test1',
    text: 'August 2018',
    value: 'test1',
    content: 'August 2018',
  },
  {
    key: 'test2',
    text: 'August 2017',
    value: 'test2',
    content: 'August 2017',
  },
  {
    key: 'test3',
    text: 'August 2016',
    value: 'test3',
    content: 'August 2016',
  },
  {
    key: 'test4',
    text: 'August 2015',
    value: 'test4',
    content: 'August 2015',
  },
];

/** This is the DayViewDropDown component. */
class DayViewDropDown extends React.PureComponent {
  /*
    TODO:
    - Add buttons to increase year +1 and -1
    - filter dropdown options based on year
  */
  _handleYearChange = e => {
    console.log(e);
    console.log('text');
  }

  onRenderHeader = () => {
    return (
      <div className="test">
        <Button label="<" onClick={e => console.log(e)} />
        <span>Date</span>
        <Button label=">" onClick={() => this._handleYearChange()} />
      </div>
    );
  }

  render() {
    return (
      <Header as="h3">
        <Header.Content>
          {' '}
          <Dropdown
            inline
            header={this.onRenderHeader}
            options={options}
            defaultValue={options[0].value}
          />
        </Header.Content>
      </Header>
    );
  }
}

DayViewDropDown.defaultProps = {
};

DayViewDropDown.propTypes = {
};

export default DayViewDropDown;

