import React from 'react';
import ReactDOM from 'react-dom';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {connect} from 'react-redux';
import {getAllBids} from '../actions/jobs.js';
import Job from '../components/DriverBid.js';
import Geocode from 'react-geocode';
import '../scss/infoWindow.scss';


Geocode.setApiKey("AIzaSyDrIU9xfNYMyLfY1hZ9sn4kHL_U86NRNOY");

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentJob: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.windowHasClosed = this.windowHasClosed.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(getAllBids());
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow
    });
  }

  windowHasClosed(props, marker, e) {
    this.setState({
      selectedPlace: props,
      showingInfoWindow: false
    });
  }

  //this function allows functionality to be put inside of the info window box
  //all html elements that require a callback function must be written here
  //in order to have functionality inside of the InfoWindow
  onInfoWindowOpen(props, e) {

    let bidCount = this.props.bids.filter(bid => {
      return bid.jobId === this.state.activeMarker.id
    })

    const info = (
      <div className="info">
        <h2>{this.state.activeMarker.name}</h2>
        <p>{this.state.activeMarker.description}</p>
        <p>bids: {bidCount.length}</p>
        <button
          className="bid-button"
          onClick={e => {
            this.windowHasClosed();
            this.setState({
              currentJob: this.props.jobs.find(job => {
                return job.props.id === this.state.activeMarker.id
              })
            })
          }}
        >bid
      </button>
    </div>
  );
  ReactDOM.render(
    React.Children.only(info),
    document.getElementById("info-window")

    );
  }

  render() {
    if (!this.props.loaded) {
      return <div className="loading-div">loading...</div>;
      } else if (this.props.center !== {}) {
        const style = {
          position: 'relative',
          width: '100%',
          height: '100%'
        }



        const jobs = this.props.jobs.filter(job => {
          return !job.props.accepted && !job.props.completed;
        });
        const markers = jobs.map((job, index) => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              key={index}
              name={job.props.title}
              title={job.props.title}
              description={job.props.description}
              image={job.props.image}
              id={job.props.id}
              date={job.props.date}
              position={job.props.coordinates}>
            </Marker>
        )
      })

      return (
        <main className="map-main-container">
          <div className="map-container" style={style}>
            {this.props.center !== {} &&
            <Map
              google={this.props.google}
              style={style}
              zoom={12}
              initialCenter={this.props.center}
              styles={[
                {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "saturation": "-100"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "color": "#545454"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "saturation": "-87"
                    },
                    {
                      "lightness": "-40"
                    },
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#f0f0f0"
                    },
                    {
                      "saturation": "-22"
                    },
                    {
                      "lightness": "-16"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "saturation": "-52"
                    },
                    {
                      "hue": "#00e4ff"
                    },
                    {
                      "lightness": "-16"
                    }
                  ]
                }
              ]}
            >

            {markers}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onOpen={e => {
                this.onInfoWindowOpen(this.props, e);
              }}
              onClose={this.windowHasClosed}
            >
             <div id="info-window" />
            </InfoWindow>
          </Map>
      }
      {/*<BidMap google={this.props.google} />*/}
    </div>
    {this.state.currentJob.props && (
      <section>
        <Job
          name={this.state.currentJob.props.name}
          title={this.state.currentJob.props.title}
          desc={this.state.currentJob.props.desc}
          image={this.state.currentJob.props.image}
          id={this.state.currentJob.props.id}
          date={this.state.currentJob.props.date}
          budget={this.state.currentJob.props.budget}
        />
      </section>
  )}
</main>
      );
    }
    }
    }

const mapStateToProps = state => ({

  center: state.auth.currentUser.coords,
  bids: state.bids.bids
})


export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDrIU9xfNYMyLfY1hZ9sn4kHL_U86NRNOY"
  })(MapContainer)
);
