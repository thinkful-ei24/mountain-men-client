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
      return <Redirect to='/dashboard' />;
    }

    return(
      <div id='form-container'>
        <div id='login-form'>
          <form className='login-form'>
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
            <button>Log in</button>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isLoggedIn: false // state.auth.user !== null
})

const logForm = reduxForm({
  form: 'login'
})(connect(mapStateToProps)(LoginForm))

export default logForm;