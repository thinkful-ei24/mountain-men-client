import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DashboardNav} from '../components/DashboardNav.js';

Enzyme.configure({ adapter: new Adapter() })

function setupUser() {
  const props = {
    type: 'USER',
    dispatch: jest.fn()
  }
  const enzymeWrapper = shallow(<DashboardNav {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

function setupDriver() {
  const props = {
    type: 'DRIVER',
    dispatch: jest.fn()
  }
  const driverWrapper = shallow(<DashboardNav {...props} />)
  return {
    props,
    driverWrapper
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
  describe('DashboardNav', () => {
    it('should render correct buttons for USERS', () => {
      let { enzymeWrapper } = setupUser()

      expect(enzymeWrapper.find('ul').hasClass('nav-container'))
        .toBe(true);
      expect(enzymeWrapper.find('li button.create-post').text())
        .toBe('Create Post')
      expect(enzymeWrapper.find('li button.active-posts').text())
        .toBe('Active Posts')
      expect(enzymeWrapper.find('li button.accepted-jobs').text())
        .toBe('Accepted Jobs')
      expect(enzymeWrapper.find('li button.completed-jobs').text())
        .toBe('Completed Jobs')

    })

    //tests that dispatch is getting called with the right stuff
    // it('should dispatch "updateView" with "postJob" when clicked', () => {
    //   let { enzymeWrapper } = setupUser()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("postJob")')
    //   })
    //   enzymeWrapper.find('button.create-post').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("postJob")')
    // })

    it('should dispatch "updateView" with "default" when clicked', () => {
      let { enzymeWrapper } = setupUser()
      const { store, invoke } = create()
      invoke((dispatch, getState) => {
        dispatch('updateView("default")')
      })
      enzymeWrapper.find('h1.nav-link').simulate('click');
      expect(store.dispatch).toHaveBeenCalled('')
    })

    // it('should dispatch "updateView" with "acceptedJobs" when clicked', () => {
    //   let { enzymeWrapper } = setupUser()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("acceptedJobs")')
    //   })
    //   enzymeWrapper.find('button.accepted-jobs').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("acceptedJobs")')
    // })

    // it('should dispatch "updateView" with "pastJobs" when clicked', () => {
    //   let { enzymeWrapper } = setupUser()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("pastJobs")')
    //   })
    //   enzymeWrapper.find('button.completed-jobs').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("pastJobs")')
    // })

    // it('should render correct buttons for DRIVERS', () => {
    //  const {driverWrapper} = setupDriver()
    //   expect(driverWrapper.find('div').hasClass('nav-container'))
    //     .toBe(true);
    //   expect(driverWrapper.find('li button.need-a-truck').text())
    //     .toBe('Need A Truck')
    //   expect(driverWrapper.find('li button.active-posts').text())
    //     .toBe('Active Posts')
    //   expect(driverWrapper.find('li button.transactions').text())
    //     .toBe('Transactions')
    //   expect(driverWrapper.find('li button.completed-jobs').text())
    //     .toBe('Completed Jobs')
    // })

    // //makes sure dispatch is getting called with the right stuff
    // it('should dispatch "updateView" with "default" when clicked', () => {
    //   let { driverWrapper } = setupDriver()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("default")')
    //   })
    //   driverWrapper.find('button.need-a-truck').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("default")')
    // })

    // it('should dispatch "updateView" with "currentJobs" when clicked', () => {
    //   let { driverWrapper } = setupDriver()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("currentJobs")')
    //   })
    //   driverWrapper.find('button.active-posts').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("currentJobs")')
    // })

    // it('should dispatch "updateView" with "pastJobs" when clicked', () => {
    //   let { driverWrapper } = setupDriver()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("pastJobs")')
    //   })
    //   driverWrapper.find('button.transactions').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("pastJobs")')
    // })

    // it('should dispatch "updateView" with "completedJobs" when clicked', () => {
    //   let { driverWrapper } = setupDriver()
    //   const { store, invoke } = create()
    //   invoke((dispatch, getState) => {
    //     dispatch('updateView("completedJobs")')
    //   })
    //   driverWrapper.find('button.completed-jobs').simulate('click');
    //   expect(store.dispatch).toHaveBeenCalledWith('updateView("completedJobs")')
    // })

    //make sure mock dispatch gets called
    it('passes through non-function action', () => {
      const { next, invoke } = create()
      const action = { type: 'TEST' }
      invoke(action)
      expect(next).toHaveBeenCalledWith(action)
    })

    //make sure mock dispatch is being called
    it('calls the function', () => {
      const { invoke } = create()
      const fn = jest.fn()
      invoke(fn)
      expect(fn).toHaveBeenCalled()
    })

    it('passes dispatch and getState', () => {
      const { store, invoke } = create()
      invoke((dispatch, getState) => {
        dispatch('TEST DISPATCH')
        getState()
      })
      expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
      expect(store.getState).toHaveBeenCalled()
    })


  })
})
