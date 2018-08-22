import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import IntroCopy from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<IntroCopy {...props} />);

  return {
    element,
    props,
  }
}


describe('<IntroCopy />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<IntroCopy />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the IntroCopy component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
