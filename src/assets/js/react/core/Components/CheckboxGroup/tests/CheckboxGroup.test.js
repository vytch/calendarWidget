import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import CheckboxGroup from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<CheckboxGroup {...props} />);

  return {
    element,
    props,
  }
}


describe('<CheckboxGroup />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<CheckboxGroup />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the CheckboxGroup component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
