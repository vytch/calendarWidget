import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import SearchResultsCriteria from '../index';

const setUp = payload => {
  const props = {
  };

  const element = shallow(<SearchResultsCriteria {...props} />);

  return {
    element,
    props,
  }
}


describe('<SearchResultsCriteria />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<SearchResultsCriteria />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('the SearchResultsCriteria component', ()=>{
  test('displays', ()=> {
    const {element} = setUp({});

  });
});
