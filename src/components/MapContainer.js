import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {connect} from 'react-redux';
import BidMap from './BidMap.js';
import {getMapCenter} from '../actions/maps.js';

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
    console.log(this.props.jobs)
    if (!this.props.loaded) {
      return <div>loading...</div>
    } else if (this.props.center !== {}) {
      const style = {
        width: '600px',
        height: '600px'
      }


    const jobs = this.props.jobs;
      const markers = jobs.map((job, index) => {
        return (
          <Marker
            onClick={this.onMarkerClick}
            name={job.props.title}
          >
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

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.windowHasClosed}
        >
          <div>
            <p>Colin's House</p>
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
  apiKey: <YOUR API KEY>
})(MapContainer));
