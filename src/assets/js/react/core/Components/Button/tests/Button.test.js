import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Button from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<Button {...props} />);

  return {
    element,
    props,
  }
}


describe('<Button />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Button />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the Button component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
