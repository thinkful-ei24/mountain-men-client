import React from 'react';
import {connect} from 'react-redux';
import DriverBidCard from './DriverBidCard.js';

export default class DriverReviewBids extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hidden: true
    }
  }

  //componentDidMount() {
  //  this.props.dispatch
  //}

  render() {
    //should return an array of <li> elements containing all bids made by a driver
    //let driverBids = this.props.bids.map((bid, index) => {
    //  return <DriverBidCard bid={bid} key={index} />
    //})

    //TODO FAKE DATA FOR TESTING PURPOSES PLEASE DELETE AFTER ENDPOINTS ARE WORKING
    let driverBids = [{bid: 45}, {bid: 65}, {bid: 50}];
    driverBids = driverBids.map((bid, index) => {
      return <DriverBidCard bid={bid} key={index} />
    })

    return (
      <section>
        <ul>
          {/* get all bids
          render a new component
            */}
          {driverBids}
        </ul>
      </section>
    )
  }
  }

  //  const mapStateToProps = state => {
  //    bids: state.bids // expect to get back an array of bids
  //  }
  //
  //  export default connect(mapStateToProps)(DriverReviewBids)
