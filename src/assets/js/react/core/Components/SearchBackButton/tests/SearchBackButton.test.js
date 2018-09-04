import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import SearchBackButton from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<SearchBackButton {...props} />);

  return {
    element,
    props,
  }
}


describe('<SearchBackButton />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<SearchBackButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the SearchBackButton component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
