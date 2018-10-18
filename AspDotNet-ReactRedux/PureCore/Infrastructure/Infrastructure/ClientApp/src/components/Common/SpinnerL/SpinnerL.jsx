import React from 'react'

class SpinnerL extends React.Component {
	render () {
		const props = this.props

		return (
			<div className="SpinnerLOuter">
			<div className={(props.className || '') + ' SpinnerL'} style={{transform: 'scale(1)'}}><div />
			</div>
			</div>
		)
	}
}

export default SpinnerL
