import React, { Component } from 'react';
import {Container, Dropdown, Image, Menu} from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/navbar.css';

class NavigationBar extends Component {
	constructor(props){
		super(props);

		this.toHomePage = this.toHomePage.bind(this);
		this.toShop = this.toShop.bind(this);
		this.toPackages = this.toPackages.bind(this);
		this.toMotifs = this.toMotifs.bind(this);
		this.toMenus = this.toMenus.bind(this);
		this.toRequest = this.toRequest.bind(this);
		this.toContactUs = this.toContactUs.bind(this);
		this.toSignUp = this.toSignUp.bind(this);
		this.toPortfolio = this.toPortfolio.bind(this);
	}

	toHomePage(e) {
		this.props.history.push('/');
	}

	toShop(e) {
		this.props.history.push('/shop');
	}

	toPackages(e) {
		this.props.history.push('/packages');
	}

	toMotifs(e) {
		this.props.history.push('/motifs');
	}

	toMenus(e) {
		this.props.history.push('/menus');
	}

	toRequest(e) {
		this.props.history.push('/request-package');
	}
	toPortfolio(e) {
		this.props.history.push('/portfolio');
	}

	toContactUs(e) {
		this.props.history.push('/contact-us');
	}

	toSignUp(e) {
		this.props.history.push('/sign-up');
	}

	render() {
		return (
			<div>
				<Menu fixed='top' id='menu-div'>
			        <Menu.Item className='logo-div'>
			          <Image circular src={logo} className='logo-style' />
			        </Menu.Item>

			        <Menu.Item as='a'  id={this.props.activePage[0] ? 'lighter': 'menu-font'} onClick={this.toHomePage}>Home</Menu.Item>
			        <Menu.Item as='a'  id={this.props.activePage[1] ? 'lighter': 'menu-font'} onClick={this.toShop}>Shop</Menu.Item>
			        <Dropdown item simple text='Catering Services' id={(this.props.activePage[2] || this.props.activePage[3] || this.props.activePage[4]) ? 'lighter': 'menu-font'}>
			          <Dropdown.Menu>
			            <Dropdown.Item onClick={this.toPackages}>Packages</Dropdown.Item>
			            <Dropdown.Item  onClick={this.toMotifs}>Motifs</Dropdown.Item>
			            <Dropdown.Item  onClick={this.toMenus}>Food Menus</Dropdown.Item>
			          </Dropdown.Menu>
			        </Dropdown>
			        <Menu.Item as='a' id={this.props.activePage[5] ? 'lighter': 'menu-font'} onClick={this.toRequest}>Request Package</Menu.Item>
			         
			    	<Container>
				        <Menu.Item as='a'  id={this.props.activePage[6] ? 'lighter': 'menu-font'} onClick={this.toPortfolio} style={{marginLeft: '42%'}} >Portfolio</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[7] ? 'lighter': 'menu-font'} onClick={this.toContactUs}>Contact Us</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[8] ? 'lighter': 'menu-font'} onClick={this.toSignUp}>Sign Up</Menu.Item>
				        <Menu.Item as='a'>Login</Menu.Item>
     				</Container>
    			</Menu>
			</div>
		);
	}

}

export default NavigationBar;