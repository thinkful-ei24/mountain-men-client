import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';

export default class BidMap extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if(this.props && this.props.google) {
      //google is available
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 8;
      let lat = 69;
      let lng = 69;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center,
        zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }

  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
      )
}
}

