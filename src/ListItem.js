import React from 'react';
//import { push as Menu } from 'react-burger-menu'

const ListItem = (venue, handleItemClick) => {

	return (

		<li onClick={() => {
			handleItemClick(venue)
		}}
		>{venue.name}</li>
		
		
		);

}

export default ListItem;