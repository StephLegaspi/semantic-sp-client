import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditFAQ from '../edit/EditFAQ.js'
import DeleteModal from '../delete/DeleteModal.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import AddFAQ from '../add/AddFAQ.js'

import '../../styles/view.css';

class FAQS extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			question: ""
		}	
	}

	handleQuestionChange = (e) => {
	    this.setState({ question: e.target.value},() => { 
	    	if(this.state.question === ""){
	    		this.update();	
	    	}else{
	    		this.searchByQuestion(); 
	    	}
	    })
	}

	searchByQuestion = () => {
        let self = this;
        fetch('http://localhost:3001/v1/FAQs/' + self.state.question, {
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

    update = () => {
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
				<HeaderBar headerTitle={'FAQS'}/>
				<SearchBarTable titleHolder={'Search question..'} searchData={this.searchByQuestion} inputChange={this.handleQuestionChange}/>

				<AddFAQ handleUpdate={this.update}/>

				<div className='table-div'>
				<Table>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Question</Table.HeaderCell>
				        <Table.HeaderCell >Answer</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(faq =>
				      <Table.Row>
				        <Table.Cell>{faq.id}</Table.Cell>
				        <Table.Cell>{faq.question}</Table.Cell>
				        <Table.Cell>{faq.answer}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditFAQ data={faq} handleUpdate={this.update}/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal data_id={faq.id} table_name={'FAQs'} handleUpdate={this.update}/>
				        </Table.Cell>
				      </Table.Row>
				    )}
				    </Table.Body>

				</Table>
				</div>	
			</div>
		);
	}

}

export default FAQS;