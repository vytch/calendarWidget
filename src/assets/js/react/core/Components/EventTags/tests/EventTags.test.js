import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import EventTags from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<EventTags {...props} />);

  return {
    element,
    props,
  }
}


describe('<EventTags />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<EventTags />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the EventTags component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
