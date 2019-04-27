import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';


class PackageInclusion extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			package_price: '',
			package_name: ''
		}
	}

	componentDidMount() {
        let self = this;
    
        fetch('http://localhost:3001/v1/packages/inclusions/' + self.props.match.params.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
        })

        fetch('http://localhost:3001/v1/packages/' + self.props.match.params.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({package_name: result.data[0].name});
            self.setState({package_price: result.data[0].price});
        }).catch(err => {
        	console.log(err);
        })
    }

	render() {
		return (
			<div>
				<HeaderBar headerTitle={''}/>

				<div class="ui fluid segment" id='inclusion-holder'>
					<p className='title-header'> {this.state.package_name} </p>
					<p className='body-font'>  P {this.state.package_price} per person </p>
					
					{this.state.data.map(pkg =>
					<List style={{color: '#16163a'}}>
						<List.Item>
							<List.Icon name='plus' size='large'/>
							<List.Content>{pkg.inclusion}</List.Content>
						</List.Item>
					</List>
					)}

				</div>

				<div class="ui fluid segment" id='terms-holder'>
					<p className='title-header'> Terms and Conditions </p>
					<List as='ul'>
						<List.Item>
							<List.Content as='li' className='paragraph-font'>
								50% down payment upon signing of contract.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								50% completion of payment 5 days before the event date.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								25% of the total contract cost will be charged upon cancellation two weeks before the event date.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								50% of the total contract cost will be forfeited for any cancellation one week before the event.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								No refund policy for any cancellation three days before the event.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								Service of waiter is up to 4 hours only
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								Overtime fee of 1000 pesos/hour.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								Any loses, breakage, entrance fee and caterers bond at the venue will be charged to client.
							</List.Content>
							<List.Content as='li' className='paragraph-font'>
								Prices are subject to change without prior notice.
							</List.Content>
						</List.Item>
					</List>
				</div>


				<Footer/>
				
			</div>
		);
	}
}

export default PackageInclusion;