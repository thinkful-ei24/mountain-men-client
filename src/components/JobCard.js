import React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import styled from 'styled-components';

function JobComponent(props) {

  const JobCard = styled.div`
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


  `;

  return (
    <JobCard id='job-card'>
      <span id='user-name'>{props.name}</span>
      <p id='job-desc'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img
        id='job-image'
        src='https://images.uline.com/is/image/content/dam/images/Class-Group/c04/g009/guidednav.jpg?$BrowseRHD$&iccEmbed=1&icc=AdobeRGB'
        alt='post pic'></img>
      <form>
        <label>Your Offer:</label>
        <Field
          name='bid'
          component='input'
          type='number'
          placeholder='$25.00'
        />
        <button type='submit'>Submit Bid</button>
      </form>
    </JobCard>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}

const Job = reduxForm({
  form: "jobForm"
})(connect(mapStateToProps)(JobComponent));

export default Job;