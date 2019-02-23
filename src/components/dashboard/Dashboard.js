import React, { Component } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import OutOfStockPurchase from '../infoModal/OutOfStockPurchase.js'
import OutOfStockRental from '../infoModal/OutOfStockRental.js'

import '../../styles/font.css';
import '../../styles/button.css';
import '../../styles/dashboard.css';


class Dashboard extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.toRequests = this.toRequests.bind(this);
		this.toOrders = this.toOrders.bind(this);
		this.toOrderRentals = this.toOrderRentals.bind(this);
	}

	toRequests(e) {
		this.props.history.push('/requests');
	}

	toOrders(e) {
		this.props.history.push('/orders-purchase');
	}

	toOrderRentals(e) {
		this.props.history.push('/orders-rental');
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Dashboard'}/>

				<Segment vertical id='div-dashboard'>
					<p className='title-header'> Inventory</p>
					<p className='body-font'>  Number of products that are already out-of-stock: </p>
					<Grid inverted divided stackable>
              		<Grid.Row>
              			<Grid.Column width={8} >
							<p className='body-font'>  Products for Purchase: </p>
							<OutOfStockPurchase />
						</Grid.Column>
						<Grid.Column width={8}>
							<p className='body-font'>  Products for Rental: </p>
							<OutOfStockRental />
						</Grid.Column>
					</Grid.Row>
					</Grid>
				</Segment>

				<div class="ui fluid segment" id='div-dashboard2'>
					<p className='title-header'> Requests</p>
					<p className='body-font'>  Number of requests that are still pending: </p>
					<br/>
					<Button animated circular id='circle-dashboard' style={{marginLeft: '20%'}} onClick={this.toRequests}>
	                    <Button.Content visible id='circle-visible'>10</Button.Content>
	                    <Button.Content hidden className='label-font2'>
	                      View
                    	</Button.Content>
                	</Button>
				</div>

				
				<Segment vertical id='div-dashboard' style={{marginBottom: '4%'}}>
					<p className='title-header'> Orders</p>
					<p className='body-font'>  Number of orders that are still pending: </p>
					<Grid inverted divided stackable>
              		<Grid.Row>
              			<Grid.Column width={8} >
							<p className='body-font'>  For Purchase: </p>
							<Button animated circular id='circle-dashboard' style={{marginLeft: '20%'}} onClick={this.toOrders}>
			                    <Button.Content visible id='circle-visible'>10</Button.Content>
				                    <Button.Content hidden className='label-font2'>
				                      View
			                    </Button.Content>
			                </Button>
						</Grid.Column>
						<Grid.Column width={8}>
							<p className='body-font'>  For Rental: </p>
							<Button animated circular id='circle-dashboard' style={{marginLeft: '20%'}} onClick={this.toOrderRentals}>
			                    <Button.Content visible id='circle-visible'>10</Button.Content>
				                    <Button.Content hidden className='label-font2'>
				                      View
			                    </Button.Content>
			                </Button>
						</Grid.Column>
					</Grid.Row>
					</Grid>
				</Segment>

				<div class="ui fluid segment" id='div-dashboard2' style={{marginTop: '3%'}}>
					<p className='title-header'> Rental</p>
					<p className='body-font'>  Number of rental products that are already due: </p>
					<br/>
					<Button animated circular id='circle-dashboard' style={{marginLeft: '20%'}} onClick={this.toOrderRentals}>
			                    <Button.Content visible id='circle-visible'>10</Button.Content>
				                    <Button.Content hidden className='label-font2'>
				                      View
			                    </Button.Content>
			        </Button>
				</div>

			
				
			</div>
		);
	}
}

export default Dashboard;