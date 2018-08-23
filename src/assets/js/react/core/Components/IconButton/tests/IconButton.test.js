import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import IconButton from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<IconButton {...props} />);

  return {
    element,
    props,
  }
}


describe('<IconButton />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<IconButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the IconButton component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
