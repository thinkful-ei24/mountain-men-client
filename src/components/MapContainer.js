import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux';
import BidMap from './BidMap.js';
import {getMapCenter} from '../actions/maps.js';

export class MapContainer extends React.Component {

  render() {
    if (!this.props.loaded) {
      return <div>loading...</div>
    } else if (this.props.center !== {}) {
      console.log(this.props.center)
      const style = {
        width: '600px',
        height: '600px'
      }

    return (
      <div style={style}>
        {this.props.center !== {} &&
          <Map
          google={this.props.google}
          style={style}
          zoom={12}
          initialCenter={this.props.center}

      >
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
