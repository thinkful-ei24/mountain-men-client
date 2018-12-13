import React from 'react';

require('../css/currentbidcard.css');

export default function CurrentBidComponent(props) {
  return (
    <div id='job-card'>
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
    </div>
  )
}

