import React from 'react';
import {connect} from 'react-redux';

import BidComponent from '../components/BidComponent';
export class Dashboard extends React.Component {


  render() {
  console.log(this.state)
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);
