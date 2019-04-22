import React, { Component } from 'react';
import { Card, Image, Segment } from 'semantic-ui-react'

import ShopButton from '../button/ShopButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';
import '../../styles/homepage.css';
import '../../styles/font.css';

import sample_header from '../../images/wedding/wedding3.jpg'

class Packages extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			package_name: ""
		}
		this.toPackageInclusion = this.toPackageInclusion.bind(this);
	}

	handlePackageChange = (e) => {
	    this.setState({ package_name: e.target.value},() => { 
	    	if(this.state.package_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	toPackageInclusion(id) {
		this.props.history.push('/package-inclusion/' + id);
	}

	searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/packages/search/' + self.state.package_name, {
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

    update = () => {
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
				<Segment id='container'>
		          <HeaderBar headerTitle={'Catering Packages'}/>
		            <Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
		            <div id='div-header'>
		              <p className='header-font2' style={{marginTop: '29%'}}> We offer you a variety of packages where you can choose from, depending on your needs and budget.  </p>
		            </div>
		        </Segment>

				<SearchBar titleHolder={'Search package name..'} searchData={this.searchByName} inputChange={this.handlePackageChange}/>
      			
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