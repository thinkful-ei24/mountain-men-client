import React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import styled from 'styled-components';

function CurrentBidComponent(props) {

  const BidCard = styled.div`
    margin: 10px;
    padding: 10px;
    width: 250px;
    border: 2px solid black;
    border-radius: 5px;

    #user-name {

    }

    #job-desc {

    }

    #job-image {
      width: 200px;
      border: 1px solid black;
      border-radius: 5px;
    }

    #driver-bid {

    }

    #total-bids {

    }
  `;

  return (
    <BidCard id='job-card'>
      <h1 id='user-name'>{props.name}</h1>
      <p id='job-desc'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        id='job-image'
        src='https://images.uline.com/is/image/content/dam/images/Class-Group/c04/g009/guidednav.jpg?$BrowseRHD$&iccEmbed=1&icc=AdobeRGB'
        alt='post pic'>
      </img>
      <h2 id='driver-bid'>Your Offer: $30.00</h2>
      <h2 id='total-bids'>8 others have made an offer</h2>
    </BidCard>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(CurrentBidComponent);
