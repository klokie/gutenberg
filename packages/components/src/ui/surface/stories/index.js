/**
 * External dependencies
 */
import { boolean, number, select } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import { Surface } from '../index';
import Text from '../../../text';

export default {
	component: Surface,
	title: 'G2 Components (Experimental)/Surface',
};

const variantOptions = {
	default: 'default',
	secondary: 'secondary',
	tertiary: 'tertiary',
	dotted: 'dotted',
	grid: 'grid',
};

export const _default = () => {
	const props = {
		backgroundSize: number( 'backgroundSize', 12 ),
		border: boolean( 'border', false ),
		borderTop: boolean( 'borderTop', false ),
		borderBottom: boolean( 'borderBottom', false ),
		borderLeft: boolean( 'borderLeft', false ),
		borderRight: boolean( 'borderRight', false ),
		variant: select( 'variant', variantOptions, 'default' ),
	};

	return (
		<Surface
			{ ...props }
			style={ { padding: 20, maxWidth: 400, margin: '20vh auto' } }
		>
			<Text>Surface</Text>
		</Surface>
	);
};
