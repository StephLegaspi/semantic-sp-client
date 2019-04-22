import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';


class FAQsPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/FAQs', {
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
				<HeaderBar headerTitle={'FAQs'}/>

				<div class="ui fluid segment" id='faqs-holder'>
					<List as='ul'>
					{this.state.data.map(faq =>
						<List.Item>
							<List.Content as='li' className='question-font'>{faq.question}?</List.Content>
							<List.Content>
								{faq.answer}
							</List.Content>
						</List.Item>
					)}
					</List>
				</div>
				
				<Footer/>
				
			</div>
		);
	}
}

export default FAQsPage;