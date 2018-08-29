import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import CalendarBackButton from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<CalendarBackButton {...props} />);

  return {
    element,
    props,
  }
}


describe('<CalendarBackButton />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<CalendarBackButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the CalendarBackButton component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
