import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SideBar from './SideBar';
import { push as Menu } from 'react-burger-menu'
import ListItem from './ListItem';

class App extends Component {

  state = {
    venues: []
  }

  showSettings (event) {
    event.preventDefault();
  }

  //Render Map 
  //Life cycle event
  componentDidMount() {
    this.getVenues()
    //this.renderMap()
  }

  //**renderMap = loadMap

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB7U8rnzGYWVDQjNRYv5Iy-abLyaZcFG40&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const keys = {
      client_id: "02ONRBOTCO3H1QD0Y3U3ZL2V2BP1PYHPNXFQEXRAJOOIJHB1",
      client_secret: "IP01UHEG5AKED10WFOJYIBXWN34SMOWIPAM2W3A421KTUAFN",
      query: "hotel",
      near: "Sydney", 
      v: "20181007"
    }

    axios.get(endPoint + new URLSearchParams(keys))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap() )//callback function
    })
    .catch(error =>{
      console.log("Error!!" + error)
    })
  }

  initMap = () => {

    //Map Created
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 14
        })


        //Create an InfoWindow
          var infowindow = new window.google.maps.InfoWindow({
            //content: content
    //content: contentString
  });

        //loop over our venues
        //dynamic markers
        this.state.venues.map(myVenue => {

          var contentString = `<h3>${myVenue.venue.name} </h3>
            <p>${myVenue.venue.location.address}</p>
            <p>${myVenue.venue.location.city} ${myVenue.venue.location.state} ${myVenue.venue.location.postalCode}</p>
            <Img src=linkvar/>`
          //content: `${myVenue.venue.name}`

         /* var content = (

            `
            <h3>Name: ${myVenue.venue.name} </h3>
            <p>${myVenue.venue.location.address}</p>
            <p>${myVenue.venue.location.city} ${myVenue.venue.location.state} ${myVenue.venue.location.postalCode}</p>
            `

            )*/

          //Create markers

          var marker = new window.google.maps.Marker({
    position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
    map: map, 
    title: myVenue.venue.name,
    //content: content
    //content: "<img src={`${myVenue.venue.bestPhoto.prefix}200x200`${myVenue.venue.bestPhoto.suffix}>"
    //animation: google.maps.Animation.DROP
  })


          //Link marker and infowindow together
          marker.addListener('click', function() {

            //Change the content
            infowindow.setContent(contentString)

            //open an infowindow
            infowindow.open(map, marker);
          })
       })

      
      }

//NOTES******
//There seems to be undefined in one of the venues' address

  render() {

    return (
      

      <div id="outer-container">
 <Menu id ="push" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
  <main id="page-wrap">
    <div id="App">

      
      <div id="map"></div>
      </div>
  </main>
</div>

    );
  }
}
/*
//map script
 </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
    */

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}

export default App;
