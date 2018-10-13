import React from 'react';
//import { push as Menu } from 'react-burger-menu'




const ListItem = (venue) => {
	const handleItemClick = place => {
		window.google.maps.event.trigger(place.marker, "click")
	}

    const venueName = venue.venue.venue.name;
    //const handleItemClick = venue;

    



	return (

		<li onClick= {() => {
			handleItemClick(venue)
		}
	}
		>{venueName}</li>
		
		
		);
}

export default ListItem;