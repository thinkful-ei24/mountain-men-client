import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import BidComponent from '../components/BidComponent';
export class Dashboard extends React.Component {


  render() {
    // if(!this.props.loggedIn) {
    //   return <Redirect to='/' />
    // }
  console.log(this.props.loggedIn)
    return (
      <main>
        <h1>this is the dahsboard page</h1>
        <ul>
          {/* <BidComponent></BidComponent> */}
        </ul>
      </main>
    )

  }
  }

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Dashboard);
