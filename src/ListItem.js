import React from 'react';
//import { push as Menu } from 'react-burger-menu'




const ListItem = (venue) => {
	const handleItemClick = () => {
		const place = venue.venue;
		//console.log(place.marker);/**/
		//place.marker.setIcon('https://www.google.com/mapfiles/marker_green.png');


		 let icon = place.marker.getIcon();
            if (icon === undefined || icon.indexOf('marker_green')) {
              place.marker.setIcon('https://www.google.com/mapfiles/marker_green.png');
              place.marker.setZIndex(100); //This brings the marker infront of the others if  selected or actie
              //this.map.setZoom(13); //zooms to marker when selected
              //this.map.setCenter(place.marker.position) //centers to marker when selected
            } else {
              place.marker.setIcon('https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png');
            }

		window.google.maps.event.trigger(place.marker, "click")
	}

    const venueName = venue.venue.venue.name;
    //const handleItemClick = venue;

    



	return (

		

		<ol className ="venueList" aria-label = "Ordered List of Venues">
		<li className="venueList" aria-label = {venue.venue.name} tabIndex="0" role="link" onClick= {() => {
			handleItemClick()
		}
	}
		>{venueName}</li>
		</ol>

		
		
		);
}

export default ListItem;