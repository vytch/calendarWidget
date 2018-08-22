import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Header from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<Header {...props} />);

  return {
    element,
    props,
  }
}


describe('<Header />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the Header component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
