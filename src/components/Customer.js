import React, {Component} from 'react'

class Customer extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.name}</td>
				<td>{this.props.address}</td>
				<td>{this.props.phone}</td>
			</tr>
		)
	}
}

export default Customer