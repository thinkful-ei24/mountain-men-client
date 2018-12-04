import React from 'react';
import { form, Field } from 'redux-form';
import { connect } from 'react-redux';

export function LoginRegisterForm() {

  return(
    <div id='form-container'>
      <div id='register-form'>
        <form onSubmit={}>
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
            {/* <label>First Name</label> */}
            <Field
              name='firstName'
              component='input'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div>
            <label>First Name</label>
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
              component='input'
              // TODO - is there a phone number input?
              type='text'
              placeholder='ex. 303-303-3030'
            />
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
            <label>Password</label>
            <Field
              name='firstName'
              component='input'
              type='password'
              placeholder='Password'
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
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps = state => {
  isLoggedIn: state.auth.user !== null;
})(LoginRegisterForm);