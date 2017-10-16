import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { addCust } from '../actions/index'
import {Button, Table} from 'react-bootstrap'
import CreateCust from './CreateCust'
import Customer from './Customer'
import '../App.css'


const url = '/api/customers'
const dispatch = store.dispatch;
const getState = store.getState;


class Customers extends Component {
	constructor() {
		super();
		this.state = {customers: []}
	}
	componentDidMount(){
	    fetch(url)
	      .then( customers => customers.json() )
	      .then(customers => {
	      	this.setState({
	      		customers
	      	})
	      	dispatch(addCust()) 
	    })
	}
	render() {
		return (
			<div className="tablePage">
				<div className="titlepart">
					<h1> Customer List </h1> 
					<CreateCust/>
				</div>
				<Table responsive>
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>Name</th>
				        <th>Address</th>
				        <th>Phone</th>
				      </tr>
				    </thead>
				    <tbody>
			        	{this.state.customers.map(customer => (
	    					<Customer key={customer.id} {...customer} />
	   					))}
				    </tbody>
				</Table>
			</div>

		)
	}
}

//MAP MAP MAP MAP

const mapStateToProps = (state) => {
	return {
		customers: state.customers
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick: id => {
			dispatch(deleteTodo(id));
		}
	}
}


const CustomersTable = connect(
	mapStateToProps,
	mapDispatchToProps
)(Customers)

export default CustomersTable
