import React, { Component } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/view.css';
import '../../styles/add.css';
import '../../styles/dashboard.css';


class Dashboard extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Dashboard'}/>

				<Segment vertical id='div-dashboard'>
					<p className='title-header'> Inventory</p>
					<p className='body-font'>  Summary of products that are already out-of-stock: </p>
					<Grid inverted divided stackable>
              		<Grid.Row>
              			<Grid.Column width={8} >
							<p className='body-font'>  Products for Purchase: </p>
							<div className='count'> 10 </div>
							<Button id='view-button-dashboard'> View Products </Button>
						</Grid.Column>
						<Grid.Column width={8}>
							<p className='body-font'>  Products for Rental: </p>
							<div className='count'> 10 </div>
							<Button id='view-button-dashboard'> View Products </Button>
						</Grid.Column>
					</Grid.Row>
					</Grid>
				</Segment>

				<div class="ui fluid segment" id='div-dashboard2'>
					<p className='title-header'> Requests</p>
					<p className='body-font'>  Summary of requests that are still pending: </p>
					<div className='count' style={{marginLeft: '22%', marginTop: '10%'}}> 10 </div>
					<Button id='view-button-dashboard' style={{marginLeft: '35%'}}> View Requests </Button>
				</div>

				
				<Segment vertical id='div-dashboard' style={{marginBottom: '4%'}}>
					<p className='title-header'> Orders</p>
					<p className='body-font'>  Summary of orders that are still pending: </p>
					<Grid inverted divided stackable>
              		<Grid.Row>
              			<Grid.Column width={8} >
							<p className='body-font'>  For Purchase: </p>
							<div className='count'> 10 </div>
							<Button id='view-button-dashboard'> View Orders </Button>
						</Grid.Column>
						<Grid.Column width={8}>
							<p className='body-font'>  For Rental: </p>
							<div className='count'> 10 </div>
							<Button id='view-button-dashboard'> View Orders </Button>
						</Grid.Column>
					</Grid.Row>
					</Grid>
				</Segment>

				<div class="ui fluid segment" id='div-dashboard2' style={{marginTop: '3%'}}>
					<p className='title-header'> Rental</p>
					<p className='body-font'>  Summary of rental products that are already due: </p>
					<div className='count' style={{marginLeft: '22%', marginTop: '10%'}}> 10 </div>
					<Button id='view-button-dashboard' style={{marginLeft: '38%'}}> View Rentals </Button>
				</div>

			
				
			</div>
		);
	}
}

export default Dashboard;