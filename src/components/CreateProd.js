import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import '../App.css'

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
					<Form horizontal>
					    <FormGroup controlId="formHorizontalEmail">
					      <Col componentClass={ControlLabel} sm={2}>
					        Email
					      </Col>
					      <Col sm={10}>
					        <FormControl type="email" placeholder="Email" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="formHorizontalPassword">
					      <Col componentClass={ControlLabel} sm={2}>
					        Password
					      </Col>
					      <Col sm={10}>
					        <FormControl type="password" placeholder="Password" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Button type="submit">
					          Sign in
					        </Button>
					      </Col>
					    </FormGroup>
					</Form>
					<h3>dtwysqbaftwsqanj</h3>
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