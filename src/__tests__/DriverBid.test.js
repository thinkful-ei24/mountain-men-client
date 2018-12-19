import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {thunk, create} from '../utils/testingUtils.js';
import {JobComponent} from '../components/DriverBid.js';

Enzyme.configure({ adapter: new Adapter() })

describe('DriverBid', () => {
  const minProps = {
    name: 'name',
    desc: 'desc',
    date: 'some date',
    handleSubmit: jest.fn(),
    dispatch: jest.fn(),

  }

  it('should render without crashing', () => {
    const wrapper = shallow(<JobComponent {...minProps} />)
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('Field').length).toEqual(2);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('img').length).toEqual(1);
  })
})
