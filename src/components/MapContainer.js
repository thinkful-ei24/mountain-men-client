import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {connect} from 'react-redux';
import Job from '../components/DriverBid.js';
import BidMap from './BidMap.js';
import {getMapCenter} from '../actions/maps.js';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyDrIU9xfNYMyLfY1hZ9sn4kHL_U86NRNOY')

export class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.windowHasClosed = this.windowHasClosed.bind(this)

  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow
    })
  }

  windowHasClosed(props, marker, e) {
    this.setState({
      selectedPlace: props,
      showingInfoWindow: false
    })
  }

  render() {
    console.log(this.props)
    if (!this.props.loaded) {
      return <div>loading...</div>
    } else if (this.props.center !== {}) {
      const style = {
        width: '600px',
        height: '600px'
      }


    const jobs = this.props.jobs
    const markers = jobs.map((job, index) => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          key={index}
          name={job.props.title}
          title={job.props.title}
          desc={job.props.description}
          image={job.props.image}
          id={job.props.id}
          date={job.props.date}
          position={job.props.coordinates}
        >
        </Marker>
      )
    })

      const infoWindows = jobs.map((job, index) => {
        return (
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.windowHasClosed}
          >
            <div>
              <Job
                key={index}
                name={job.props.title}
                title={job.props.title}
                desc={job.props.description}
                image={job.props.image}
                id={job.props.id}
                date={job.props.date}
              />
            </div>
          </InfoWindow>
        )
      })

    return (
      <div style={style}>
        {this.props.center !== {} &&
          <Map
          google={this.props.google}
          style={style}
          zoom={12}
          initialCenter={this.props.center}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'current location'}
        >
        </Marker>
        {markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.windowHasClosed}
        >
          <div>
            <h2>{this.state.activeMarker.name}</h2>
            <p>{this.state.activeMarker.description}</p>
            <p>bids: </p>
            <button>view job</button>
          </div>
        </InfoWindow>
      </Map>}
      {/*<BidMap google={this.props.google} />*/}
    </div>
      )
    }

  }
  }

const mapStateToProps = state => ({
  center: state.map.mapCenter
})

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyDrIU9xfNYMyLfY1hZ9sn4kHL_U86NRNOY'
})(MapContainer));
