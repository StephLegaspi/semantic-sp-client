import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import ShopButton from '../button/ShopButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';

class Packages extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			package_name: ""
		}
		this.toPackageInclusion = this.toPackageInclusion.bind(this);
		this.handlePackageChange = this.handlePackageChange.bind(this);
		this.toSearchPackage = this.toSearchPackage.bind(this);
	}

	handlePackageChange(e) { 
		this.setState({package_name: e.target.value});
	}

	toPackageInclusion(id) {
		this.props.history.push('/package-inclusion/' + id);
	}

	toSearchPackage() {
		this.props.history.push('/packages/search/' + this.state.package_name);
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/packages', {
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
    }

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Catering Packages'}/>
				<SearchBar titleHolder={'Search package name..'} searchData={this.toSearchPackage} inputChange={this.handlePackageChange}/>
      			
      			<div id='card-div2'>
					<Card.Group itemsPerRow={4}>
					{this.state.data.map(pkg =>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>{pkg.name} </Card.Header>
					      <Card.Description>P {pkg.price}</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ShopButton handleView={this.toPackageInclusion} data_id={pkg.id}/>
					    </Card.Content>
					</Card>
					)}
					</Card.Group>
				</div>

				<br></br>

				<Footer/>
				
			</div>
		);
	}

}

export default Packages;