import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import FilteredEventList from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<FilteredEventList {...props} />);

  return {
    element,
    props,
  }
}


describe('<FilteredEventList />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<FilteredEventList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the FilteredEventList component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
