import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';


class FAQsPage extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'FAQs'}/>

				<div class="ui fluid segment" id='faqs-holder'>
					<List as='ul'>
						<List.Item>
							<List.Content as='li' className='paragraph-font'>How do I order?</List.Content>
							<List.Content>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus massa, varius tincidunt tortor scelerisque, condimentum lacinia lorem. Ut vestibulum eget nibh id gravida. Mauris luctus tincidunt tempus. Integer molestie leo ante, gravida varius mauris imperdiet vel. Pellentesque enim mauris, consequat ac lobortis eu, elementum nec tortor. 
							</List.Content>
						</List.Item>

						<List.Item>
							<List.Content as='li' className='paragraph-font'>How do I order?</List.Content>
							<List.Content>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus massa, varius tincidunt tortor scelerisque, condimentum lacinia lorem. Ut vestibulum eget nibh id gravida. Mauris luctus tincidunt tempus. Integer molestie leo ante, gravida varius mauris imperdiet vel. Pellentesque enim mauris, consequat ac lobortis eu, elementum nec tortor. 
							</List.Content>
						</List.Item>
						
					</List>
				</div>
				
				<Footer/>
				
			</div>
		);
	}
}

export default FAQsPage;