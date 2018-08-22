import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import CalendarLegend from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<CalendarLegend {...props} />);

  return {
    element,
    props,
  }
}


describe('<CalendarLegend />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<CalendarLegend />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the CalendarLegend component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
