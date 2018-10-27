import React from 'react';
//import { push as Menu } from 'react-burger-menu'




const ListItem = (venue) => {
	const handleItemClick = () => {
		const place = venue.venue;
		//console.log(place.marker);/**/
		window.google.maps.event.trigger(place.marker, "click")
	}

    const venueName = venue.venue.venue.name;
    //const handleItemClick = venue;

    



	return (

		

		<ol className ="venueList" aria-label = "Ordered List of Venues">
		<li className="venueList" aria-label = {venue.venue.name} onClick= {() => {
			handleItemClick()
		}
	}
		>{venueName}</li>
		</ol>

		
		
		);
}

export default ListItem;