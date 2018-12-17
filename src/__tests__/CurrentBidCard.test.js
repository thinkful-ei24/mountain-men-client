import React from 'react';
import {shallow, mount} from 'enzyme';

import CurrentBidComponent from '../components/CurrentBidCard.js';

describe('<CurrentBidComponent />', () => {
  it('Renders without crashing', () => {
    shallow(<CurrentBidComponent />);
  });

})
