import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import store from '../store'
import { addCust } from '../actions'
import '../App.css'

const dispatch = store.dispatch

let nameInput, addressInput, phoneInput

class CreateCust extends Component {

	constructor(props) {
		super();
		this.state={showModal: false}
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleSubmit(e) {
		e.preventDefault()
		dispatch(addCust(this.nameInput.value, this.addressInput.value, this.phoneInput.value))
	}

	render() {
		return (
		  <div className="btnCreate">
		    <Button onClick={this.open}>
		    	Create
		    </Button>

		    <Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Create a customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal onSubmit={this.handleSubmit}>
					    <FormGroup controlId="name">
					      <Col componentClass={ControlLabel} sm={2}>
					        Name
					      </Col>
					      <Col sm={10}>
					        <FormControl inputRef={input => this.nameInput = input} type="text" placeholder="Name" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="address">
					      <Col componentClass={ControlLabel} sm={2}>
					        Address
					      </Col>
					      <Col sm={10}>
					        <FormControl inputRef={input => this.addressInput = input} type="text" placeholder="Address" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="phone">
					      <Col componentClass={ControlLabel} sm={2}>
					        Phone
					      </Col>
					      <Col sm={10}>
					        <FormControl inputRef={input => this.phoneInput = input} type="text" placeholder="Phone" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col>
					        <Button type="submit">
					          Add a new customer
					        </Button>
					      </Col>
					    </FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
		    </Modal>
		  </div>
		);
	}
};

export default CreateCust