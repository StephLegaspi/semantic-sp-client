import React, { Component } from 'react';
import { Image, Card, Segment } from 'semantic-ui-react'

import ShopButton from '../button/ShopButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';
import '../../styles/homepage.css';
import '../../styles/font.css';

import sample_header from '../../images/debut/debut3.jpg'

class Motifs extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			motif_name: ""
		}

		this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
	}

	toMotifsPortfolio(id) {
		this.props.history.push('/motif-portfolio/' + id);
	}

	handleMotifChange = (e) => {
	    this.setState({ motif_name: e.target.value},() => { 
	    	if(this.state.motif_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/event_motifs', {
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

	searchByName = () => {
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

    update = () => {
        let self = this;
        fetch('http://localhost:3001/v1/event_motifs', {
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
		          <HeaderBar headerTitle={'Event Motifs'}/>
		            <Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
		            <div id='div-header'>
		              <p className='header-font2' style={{marginTop: '27%'}}> We have here our pre-customed event motifs that will definitely make your event a magical and memorable one.  </p>
		            </div>
		        </Segment>

				<SearchBar titleHolder={'Search motif name..'} searchData={this.searchByName} inputChange={this.handleMotifChange}/>
      			
      			<div id='card-div3'>
				<Card.Group itemsPerRow={3}>
				{this.state.data.map(motif =>
				<Card id='card3'>
				    <Card.Content>
				      <Card.Header>{motif.name}</Card.Header>
				    </Card.Content>
					<Image src={`http://localhost:3001/${motif.img}`} style={{height: '200px'}} />
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

export default Motifs;