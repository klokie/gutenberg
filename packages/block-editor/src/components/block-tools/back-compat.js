/**
 * WordPress dependencies
 */
import { useContext } from '@wordpress/element';
import deprecated from '@wordpress/deprecated';

/**
 * Internal dependencies
 */
import InsertionPoint, { InsertionPointOpenRef } from './insertion-point';
import BlockPopover from './block-popover';

/**
 * Renders block tools (the block toolbar, select/navigation mode toolbar, the
 * insertion point and a slot for the inline rich text toolbar). Must be wrapped
 * around the block content and editor styles wrapper or iframe.
 *
 * @param {Object} $0          Props.
 * @param {Object} $0.children The block content and style container.
 */
export default function BlockToolsBackCompat( { children } ) {
	const openRef = useContext( InsertionPointOpenRef );

	// If context is set, `BlockTools` is a parent component.
	if ( openRef ) {
		return children;
	}

	deprecated( 'wp.components.Popover.Slot name="block-toolbar"', {
		alternative: 'wp.blockEditor.BlockTools',
	} );

	return (
		<InsertionPoint __unstablePopoverSlot="block-toolbar">
			<BlockPopover __unstablePopoverSlot="block-toolbar" />
			{ children }
		</InsertionPoint>
	);
}
