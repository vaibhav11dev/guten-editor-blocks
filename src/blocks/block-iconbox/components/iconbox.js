/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a CallToAction wrapper Component
 */
export default class Iconbox extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		// Setup the attributes
		return (
		    <div className={ classnames(
				    this.props.className,
				    'row',
			    ) }
		    >
			{this.props.children}
		    </div>
		   
		);
	}
}
