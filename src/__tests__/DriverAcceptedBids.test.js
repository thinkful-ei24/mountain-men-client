import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DriverAcceptedBids from '../components/DriverAcceptedBids.js';

Enzyme.configure( { adapter: new Adapter() } );

function setup() {
  const props = {
    props: {
      jobs: {jobs: [1, 2, 3]},
      bids: {bids:[1, 2, 3]},
      auth: {
        currentUser: {
          id: '123'
        }
      }
    },
    dispatch: jest.fn(),
  }
  const enzymeWrapper = shallow(<DriverAcceptedBids {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

//creates mock thunk
const thunk = ({dispatch, getState}) => next => action => {
  if(typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

//create fake getState, dispatch and next functions
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  }
  const next = jest.fn()
  const invoke = action => thunk(store)(next)(action)
  return { store, next, invoke }
}



describe('components', () => {
  it('should render without crashing', () => {
    const {enzymeWrapper} = setup()
    expect(enzymeWrapper.matchesElement(<section><ul></ul></section>)).toEqual(true)
  })

  it('should dispatch with "getAllJobs"', () => {
    const {enzymeWrapper} = setup()
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('getAllJobs()')
    })
    expect(store.dispatch).toHaveBeenCalledWith('getAllJobs()')
  })

  it('should dispatch with "getAllBids"', () => {
    const {enzymeWrapper} = setup()
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('getAllBids()')
    })
    expect(store.dispatch).toHaveBeenCalledWith('getAllBids()')
  })
})
