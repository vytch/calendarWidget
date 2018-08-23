import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import EventBlock from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<EventBlock {...props} />);

  return {
    element,
    props,
  }
}


describe('<EventBlock />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<EventBlock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the EventBlock component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
