import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import '../../styles/font.css';
import '../../styles/dashboard.css';

class DashboardCircle extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}

    componentDidUpdate() {
        let self = this;
        fetch('http://localhost:3001/v1/' + this.props.route ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({count: result.data[0].count});
        }).catch(err => {
            console.log(err);
        })
    }

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/' + this.props.route ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({count: result.data[0].count});
        }).catch(err => {
        	console.log(err);
        })
    }



	render() {
		return (
			<div>
				<Button animated circular id='circle-dashboard' onClick={this.props.handleClick}>
                    <Button.Content visible>
                    	<label className='circle-font'> {this.state.count}</label>
                    </Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                </Button>
            </div>
		);
	}

}

export default DashboardCircle;