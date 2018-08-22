import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Input from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<Input {...props} />);

  return {
    element,
    props,
  }
}


describe('<Input />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Input />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the Input component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
