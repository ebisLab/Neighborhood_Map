import React, { Component } from 'react';
import {push as Menu } from 'react-burger-menu'

class SideBar extends Component {
	showSettings (event) {
		event.preventDefault();
	}

	/*const styles = {

	};*/

render() {
	return (


		<Menu>
		<div><h2>Hello</h2></div>
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