import React, {Component} from 'react'

class Customer extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.customer}</td>
				<td>{this.props.discount}</td>
				<td>{this.props.total}</td>
			</tr>
		)
	}
}

export default Customer