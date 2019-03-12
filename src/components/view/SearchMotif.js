import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react'

import ShopButton from '../button/ShopButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class SearchMotif extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			motif_name: ""
		}

		this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
		this.handleMotifChange = this.handleMotifChange.bind(this);
		this.toSearchMotif = this.toSearchMotif.bind(this);
	}

	toMotifsPortfolio(id) {
		this.props.history.push('/motif-portfolio/' + id);
	}

	handleMotifChange(e) { 
		this.setState({motif_name: e.target.value});
	}

	toSearchMotif() {
		this.props.history.push('/motifs/search/' + this.state.motif_name);
		this.update();
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/event_motifs/search/' + self.props.match.params.name, {
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
        fetch('http://localhost:3001/v1/event_motifs/search/' + self.state.motif_name, {
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
				<HeaderBar headerTitle={'Event Motifs'}/>
				<SearchBar titleHolder={'Search motif name..'} searchData={this.toSearchMotif} inputChange={this.handleMotifChange}/>
      			
      			<div id='card-div2'>
				<Card.Group itemsPerRow={4}>
				{this.state.data.map(motif =>
				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>{motif.name}</Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				    	<ShopButton handleView={this.toMotifsPortfolio} data_id={motif.id}/>
				    </Card.Content>
				</Card>
				)}
				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default SearchMotif;