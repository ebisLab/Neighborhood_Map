import React from 'react';
//import { push as Menu } from 'react-burger-menu'




const ListItem = (venue) => {
	const handleItemClick = () => {
        const place = venue.venue;
        //console.log(place.marker);/**/
       /* let icon = place.marker.getIcon();
        if (icon === undefined || (icon !== undefined && icon.indexOf('marker_green') === -1)) {
            place.marker.setIcon('https://www.google.com/mapfiles/marker_green.png');
        } else {
            place.marker.setIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        }*/
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