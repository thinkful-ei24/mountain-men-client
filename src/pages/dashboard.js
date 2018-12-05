import React from 'react';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {


  render() {
  console.log(this.state)
    return (
      <main>
        <h1>this is the dahsboard page</h1>
        <ul>
        </ul>
      </main>
    )

  }
  }

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);
