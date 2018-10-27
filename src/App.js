import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import SideBar from './SideBar';
import { slide as Menu } from 'react-burger-menu';
import ListItem from './ListItem';
import ErrorBoundary from './ErrorBoundary';
import escapeRegExp from 'escape-string-regexp'

window.gm_authFailure = ()=>{alert("Please check your Google API key")}

class App extends Component {
  constructor(props){
    super(props);
    this.map=null;
  }

  state = {
    venues: [],
    query: ''
    //openList
    //handleItemClick: []
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

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  updateQuery(query){
    this.setState({query: query.trim() });
  }

  filterVenues(query) {
    this.myVenue.marker.forEach(marker =>{
      marker.name.toLowerCase().includes(query.toLowerCase()) === true ? 
      marker.setVisible(true) :
      marker.setVisible(false);
      //marker.setState({venues})
    });
    this.setState({query});

  }

  //**renderMap = loadMap

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB7U8rnzGYWVDQjNRYv5Iy-abLyaZcFG40&callback=initMap")
    //window.addEventListener('touchstart', passive: true);
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

//handleItemClick=venues;

  initMap = () => {

    this.setState({handleItemClick: this.state.venues});/**/

    //Map Created
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.783, lng: 151.177},
          zoom: 11
        })
        this.map = map;


        //Create an InfoWindow
          var infowindow = new window.google.maps.InfoWindow({
  });

        //loop over our venues
        //dynamic markers
        this.state.venues.map(myVenue => {

         

          var contentString = `<h3>${myVenue.venue.name} </h3>
            <p>${myVenue.venue.location.address}</p>
            <p>${myVenue.venue.location.city} ${myVenue.venue.location.state} ${myVenue.venue.location.postalCode}</p>
            <p><strong>
        ${'<a href="https://foursquare.com/v/' +
          myVenue.venue.id +
          '" target="_blank">Learn More...</a>'}
       </strong> </p>`
            //<Img src=linkvar/>`
          //content: `${myVenue.venue.name}`


          //Create markers
           myVenue.marker = new window.google.maps.Marker({
    position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
    map: map, 
    title: myVenue.venue.name,
    id: myVenue.venue.id,
    //content: content
    //content: "<img src={`${myVenue.venue.bestPhoto.prefix}200x200`${myVenue.venue.bestPhoto.suffix}>"
    animation: window.google.maps.Animation.DROP
  })

         
//window.addEventListener('touchstart', handleItemClick, true);

          //Link marker and infowindow together
          myVenue.marker.addListener('click', function() {
            //Change the content

            


            infowindow.setContent(contentString)

            //open an infowindow
            infowindow.open(map, myVenue.marker);
            //myVenue.marker.setIcon('https://www.google.com/mapfiles/marker_green.png');

          })

          return myVenue.marker;
       })

      
      }

//NOTES*****
//There seems to be undefined in one of the venues' address

  render() {

    const { venues, query } = this.state
    //console.log(venues)

    let filteredVenues
    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredVenues = venues.filter((venue)=> {
        const isMatch = match.test(venue.venue.name);
        console.log(venue);
        if (isMatch) {
          venue.marker.setMap(this.map);
        } else {
          venue.marker.setMap(null);
        }
        return isMatch;
      
        //match.test(venue.venue.name))
      //}
    });} else {
      filteredVenues = venues
    }

    return (
      

      
 
  
    <div id="App">
    
    <ErrorBoundary>
<Menu>
<input type={"search"} id={"search"} placeholder={"filter Venues"} 
onChange={(event)=> this.updateQuery(event.target.value)} 
aria-label = "Search Venues" />
              
                {filteredVenues.map((venue, index) => (
                  <ListItem 
                    className="bm-item"
                    key={index}
                    venue={venue}
                    aria-label = {venue.venue.name}
                    tabIndex = "0"
                    />
                    
                ))}
                </Menu>
                </ErrorBoundary>
      <div id="map"></div>
      
      </div>
      
      
  


    );
  }
}




function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}

export default App;
