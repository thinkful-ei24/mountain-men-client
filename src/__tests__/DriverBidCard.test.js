import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {thunk, create} from '../utils/testingUtils.js';
import {DriverBidCard} from '../components/DriverBidCard.js';

function setup() {
  const props = {
    bid: {
      jobTitle: 'title',
      jobDate: 'somedate',
      jobDescription: 'description',
      bidAmount: 42,
      bidDescription: 'description',
      accepted: true,
      completed: false,
      jobPoster: 'dale',
      jobPostEmail: 'someEmail@test.test',
      jobPosterPhoneNumber: '5555555555',
      jobPosterId: '123'
    },
    jobPoster: {
      user: {users: [1, 2, 3, 4]}
    },
    dispatch: jest.fn()
  }
  const wrapper = shallow(<DriverBidCard {...props} />)
  return {
    props,
    wrapper
  }
}

//creates mock thunk
// const thunk = ({dispatch, getState}) => next => action => {
//   if(typeof action === 'function') {
//     return action(dispatch, getState)
//   }
//   return next(action)
// }

//create fake getState, dispatch and next functions
// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn(),
//   }
//   const next = jest.fn()
//   const invoke = action => thunk(store)(next)(action)
//   return { store, next, invoke }
// }

describe('<DriverBidCard />', () => {
  it('renders without crashing everything', () => {
    const {wrapper, props} = setup()
    let bid = props.bid
    expect(wrapper.hasClass('job-card')).toEqual(true)
  })

  it('should dispatch getUser with correct info', () => {
    const {wrapperi, props} = setup()
    const {store, invoke} = create()
    invoke((dispatch, getState) => {
      dispatch(`getUser(${props.bid.jobPosterId})`)
    })
    expect(store.dispatch).toHaveBeenCalledWith('getUser(123)')
  })

})
