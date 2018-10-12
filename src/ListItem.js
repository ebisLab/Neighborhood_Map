import React from 'react';
//import { push as Menu } from 'react-burger-menu'

const ListItem = (venue, handleItemClick) => {
	console.log(venue.venue.venue.name);
    const venueName = venue.venue.venue.name;
    //const handleItemClick = [];

	return (

		<li onClick={() => {
			handleItemClick(venue)
		}}
		>{venueName}</li>
		
		
		);

}

export default ListItem;