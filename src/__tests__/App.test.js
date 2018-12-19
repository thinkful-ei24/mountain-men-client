import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { createMockStore  } from 'redux-test-utils';
import { shallow  } from 'enzyme';
import { Provider } from 'react-redux';

describe('<App />', () => {
  const testState = {
    auth: {
      user: 'Test'
    },
    testData: {
      testOne: 'One',
      testTwo: 'Two'
    },
  }

  const testStore = createMockStore(testState);

  it('renders without crashing', () => {
    shallow(
      <Provider store={testStore}>
        <App />
      </Provider>
    )
  });

})

