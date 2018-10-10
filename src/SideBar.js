import React, { Component } from 'react';
import {slide as Menu } from 'react-burger-menu'

class SideBar extends Component {

	/*const styles = {

	};*/

render() {
	return (

		<Menu>
		<h1>Something</h1>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

    </Menu>
		);
};


}


export default SideBar;