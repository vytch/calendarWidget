import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import DayViewDropDown from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<DayViewDropDown {...props} />);

  return {
    element,
    props,
  }
}


describe('<DayViewDropDown />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<DayViewDropDown />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the DayViewDropDown component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
