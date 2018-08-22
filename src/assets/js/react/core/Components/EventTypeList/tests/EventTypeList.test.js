import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import EventTypeList from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<EventTypeList {...props} />);

  return {
    element,
    props,
  }
}


describe('<EventTypeList />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<EventTypeList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the EventTypeList component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
