<p align="center">
  <img src="https://user-images.githubusercontent.com/34469795/50239083-65c9d700-037e-11e9-9fbc-5fef01bf680e.png" height="100" /><br/>
  <span><b>Truck'd</b>: <span>A service for connecting people who need to move with truck owners</span><br/>
  <a href="https://mountain-men-truckd.herokuapp.com/" target="_blank">Live Version</a>
</p>

![frame-landing-page](https://user-images.githubusercontent.com/34469795/50305269-8746c380-044f-11e9-9d68-6401cc754246.png)

## Why

Renting a moving truck is a big hassle and often expensive. With Truck'd you can save time and money by connecting with someone who already owns a truck.

If you own a truck you can easily find jobs and make some extra cash.

## Features

- [x] **Request A Truck**: Users can request a truck by posting a truck for nearby drivers to view.
- [x] **Bid On Jobs**: Truck owners can view job requests and bid on the ones they want
- [x] **Google Maps Integration**: Easily view users and drivers around you with a live map.

### Next Features

- [ ] **Notification System**: Seeing notifications for all things including when drivers accept bids or are on their way.
- [ ] **Map Clustering**: Group multiple jobs on the map in the same location together allowing the user or driver to view multiple items easier.

## Tech Stack

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/react-redux)
- [Redux Form](https://github.com/erikras/redux-form)
- [Google Maps API](https://developers.google.com/maps/documentation/)
- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
- [Google Maps React](https://github.com/fullstackreact/google-maps-react/blob/master/README.md)
- [Snazzy Maps](https://snazzymaps.com/)
- [Sass](https://sass-lang.com/)

* [Node](https://github.com/nodejs/node)
* [Express](https://github.com/expressjs/express)
* [Passport](http://www.passportjs.org/)
* [MongoDB](https://github.com/mongodb/mongo)
* [Mongoose](https://github.com/Automattic/mongoose)

[Server repo](https://github.com/thinkful-ei24/mountain-men-server)

## API

```
/api
.
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
├── /bids
│   └── GET /
│   |   ├── /:id
│   |   └── /:jobId
│   └── POST
│       └── /:id
│   └── PUT
|       └── /:id
├── /jobs
│   └── GET
│       ├── /
│       ├── /:id
│       ├── /notifications/:id
│       ├── /popcorn/:id
│       └── /profilePicture/:id
│   └── PUT
│       ├── /ignore/:id
│       ├── /ignore/nevermind/:id
│       ├── /location/:id
│       ├── /notifications/time/:id
│       └── /popcorn
│   └── POST
│       └── /:id
│   └── PUT
|       └── /:userId/:jobId
├── /profile
│   └── GET
│       └── /:id
│   └── PUT
│       └── /:id

```
## Team

- Project Manager [Aaron Whitehead](https://github.com/WhiteheadAaron)
- Product Manager [Colin Rupp](https://github.com/rupp-colin)
- QA Lead [Sean Phelan](https://github.com/phelan97)
- Design Lead- UI [Shane Lupton](https://github.com/slupton89)
- UX and Marketing Lead [Alex Gutierrez](https://github.com/alexgutes)

Follow us on [Twitter](https://twitter.com/getTruckd)
