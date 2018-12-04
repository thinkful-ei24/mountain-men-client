import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedRole: 'driver',
    }
  }

  setUserRole = (changeEvent) => {
    this.setState({
      selectedRole: changeEvent.target.value,
    })
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to='/' />;
    }

    return(
      <div id='form-container'>
        <div id='login-form'>
          <form className='login-form'
            // onSubmit={this.props.handleSubmit(values => {
            //   this.props.dispatch(login(values));
            //   })}
            >
            <div>
              <label>First Name</label>
              <Field
                name='firstName'
                component='input'
                type='text'
                placeholder='First Name'
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name='lastName'
                component='input'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name='firstName'
                component='input'
                type='email'
                placeholder='Email'
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name='firstName'
                component='input'
                type='password'
                placeholder='Password'
              />
            </div>
            <div>
              <label>Phone</label>
              <Field
                name='phoneNumber'
                component={'Input'}
                // TODO - is there a phone number input?
                type='tel'
                pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}'
                placeholder='ex. 303-303-3030'
              />
               OR
              (<Field
                name='phoneNumber'
                component={'Input'} type='tel' size='3' />)
              <Field
                name='phoneNumber'
                component={'Input'} type='tel' size='3' /> - <Field
                name='phoneNumber'
                component={'Input'} type='tel' size='4' />
            </div>
            <div>
              <label>Address</label>
              <Field
                name='firstName'
                component='input'
                type='text'
                placeholder='ex. 123 Main St, Littleton, CO 80120'
              />
            </div>
            <div>
              <label id="radio-user ">User</label>
              <Field
                name='firstName'
                component='input'
                type='radio'
                value='user'
                checked={this.state.selectedRole === 'user'}
                onChange={this.setUserRole}
              />
              <label id="radio-driver">Driver</label>
              <Field
                name='firstName'
                component='input'
                type='radio'
                value='driver'
                checked={this.state.selectedRole === 'driver'}
                onChange={this.setUserRole}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isLoggedIn: false // state.auth.user !== null
})

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps)(LoginForm))