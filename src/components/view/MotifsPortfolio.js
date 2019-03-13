import React, { Component } from 'react';
import { Card, Image, Segment} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import CardPackage from '../card/CardPackage.js'
import CardRequest from '../card/CardRequest.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/button.css';
import '../../styles/font.css';
import img from '../../images/header2.jpg'

class MotifsPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {
			motif_name: '',
			motif_desc: ''
		}
	}

	componentDidMount() {
        let self = this;

        fetch('http://localhost:3001/v1/event_motifs/' + self.props.match.params.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({motif_name: result.data[0].name});
            self.setState({motif_desc: result.data[0].description});
        }).catch(err => {
        	console.log(err);
        })
    }

	render() {
		return (
			<div>
				<Segment id='container-header'>
		          <HeaderBar headerTitle={this.state.motif_name}/>
				  <Image size='large' src={img} style={{ minWidth:'100%'}}/>
		          <div id='desc-header'>
		            <p className='header-font2'> {this.state.motif_desc}  </p>
		          </div>
		        </Segment>
				
				<div id='card-pics'>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
					    <CardPackage/>
				        <CardRequest />
	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default MotifsPortfolio;