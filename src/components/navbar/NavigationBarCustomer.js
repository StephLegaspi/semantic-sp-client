import React, { Component } from 'react';
import {Container, Dropdown, Image, Menu} from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/navbar.css';

import local_storage from 'localStorage';

class NavigationBar extends Component {
	constructor(props){
		super(props);

		this.state = {
		  	user: JSON.parse(local_storage.getItem("user_data"))
		}

		this.toHomePage = this.toHomePage.bind(this);
		this.toShop = this.toShop.bind(this);
		this.toShopRent = this.toShopRent.bind(this);
		this.toPackages = this.toPackages.bind(this);
		this.toMotifs = this.toMotifs.bind(this);
		this.toMenus = this.toMenus.bind(this);
		this.toRequest = this.toRequest.bind(this);
		this.toContactUs = this.toContactUs.bind(this);
		this.toSignUp = this.toSignUp.bind(this);
		this.toPortfolio = this.toPortfolio.bind(this);
		this.toLogin = this.toLogin.bind(this);
		this.toProfile = this.toProfile.bind(this);
		this.toFAQs = this.toFAQs.bind(this);
	}

	componentDidMount() {
		this.setState({user: JSON.parse(local_storage.getItem("user_data")) });  
    }

	toHomePage(e) {
		window.location.href='/';
	}

	toShop(e) {
		window.location.href='/shop/purchase';
	}

	toShopRent(e) {
		window.location.href='/shop/rent';
	}

	toPackages(e) {
		window.location.href='/packages';
	}

	toMotifs(e) {
		window.location.href='/motifs';
	}

	toMenus(e) {
		window.location.href='/menus';
	}

	toRequest(e) {
		window.location.href='/request-package';
	}
	toPortfolio(e) {
		window.location.href='/portfolio';
	}

	toContactUs(e) {
		window.location.href='/contact-us';
	}

	toSignUp(e) {
		window.location.href='/sign-up';
	}

	toLogin(e) {
		window.location.href='/login/customer';
	}

	toProfile(e) {
		window.location.href='/profile-customer';
	}

	toLogOut(e) {
		local_storage.clear();
		window.location.href='/'
	}

	toFAQs(e) {
		window.location.href='/FAQs';
	}

	render() {
		return (
			<div>
				<Menu fixed='top' id='menu-div'>
			        <Menu.Item className='logo-div'>
			          <Image circular src={logo} className='logo-style' />
			        </Menu.Item>

			        <Menu.Item as='a'  id={this.props.activePage[0] ? 'lighter': 'menu-font'} onClick={this.toHomePage}>Home</Menu.Item>
			        <Dropdown item simple text='Shop' id={(this.props.activePage[1] || this.props.activePage[2]) ? 'lighter': 'menu-font'}>
			          <Dropdown.Menu>
			            <Dropdown.Item onClick={this.toShop}>Purchase</Dropdown.Item>
			            <Dropdown.Item onClick={this.toShopRent}>Rent</Dropdown.Item>
			          </Dropdown.Menu>
			        </Dropdown>
			        <Dropdown item simple text='Catering Services' id={(this.props.activePage[3] || this.props.activePage[4] || this.props.activePage[5]) ? 'lighter': 'menu-font'}>
			          <Dropdown.Menu>
			            <Dropdown.Item onClick={this.toPackages}>Packages</Dropdown.Item>
			            <Dropdown.Item  onClick={this.toMotifs}>Motifs</Dropdown.Item>
			            <Dropdown.Item  onClick={this.toMenus}>Food Menus</Dropdown.Item>
			          </Dropdown.Menu>
			        </Dropdown>
			        <Menu.Item as='a' id={this.props.activePage[6] ? 'lighter': 'menu-font'} onClick={this.toRequest}>Request Package</Menu.Item>
			        
			        {(this.state.user===null) ? ( 
			    	<Container>
				        <Menu.Item as='a'  id={this.props.activePage[7] ? 'lighter': 'menu-font'} onClick={this.toPortfolio} style={{marginLeft: '27%'}} >Portfolio</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[8] ? 'lighter': 'menu-font'} onClick={this.toContactUs}>Contact Us</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[9] ? 'lighter': 'menu-font'} onClick={this.toFAQs} >FAQs</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[10] ? 'lighter': 'menu-font'} onClick={this.toSignUp} >Sign Up</Menu.Item>
				        <Menu.Item as='a'id={this.props.activePage[11] ? 'lighter': 'menu-font'} onClick={this.toLogin} >Login</Menu.Item>

     				</Container>
				    ) : (
				    <Container>
				        <Menu.Item as='a'  id={this.props.activePage[7] ? 'lighter': 'menu-font'} onClick={this.toPortfolio} style={{marginLeft: '28%'}} >Portfolio</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[8] ? 'lighter': 'menu-font'} onClick={this.toContactUs}>Contact Us</Menu.Item>
				        <Menu.Item as='a' id={this.props.activePage[9] ? 'lighter': 'menu-font'} onClick={this.toFAQs} >FAQs</Menu.Item>
				         <Menu.Item as='a' id={this.props.activePage[10] ? 'lighter': 'menu-font'} onClick={this.toProfile} >Profile</Menu.Item>
				        <Menu.Item as='a'id= 'menu-font' onClick={this.toLogOut} >Logout</Menu.Item>
				        
     				</Container>
				    )}
    			</Menu>
			</div>
		);
	}

}

export default NavigationBar;