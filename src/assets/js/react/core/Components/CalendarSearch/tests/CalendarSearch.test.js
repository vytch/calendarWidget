import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import CalendarSearch from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<CalendarSearch {...props} />);

  return {
    element,
    props,
  }
}


describe('<CalendarSearch />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<CalendarSearch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the CalendarSearch component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
