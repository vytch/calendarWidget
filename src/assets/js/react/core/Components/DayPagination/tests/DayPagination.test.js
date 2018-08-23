import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import DayPagination from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<DayPagination {...props} />);

  return {
    element,
    props,
  }
}


describe('<DayPagination />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<DayPagination />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the DayPagination component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
