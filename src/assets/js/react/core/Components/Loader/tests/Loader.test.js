import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import Loader from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<Loader {...props} />);

  return {
    element,
    props,
  }
}


describe('<Loader />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Loader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the Loader component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
