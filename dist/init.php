<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package GutenEditorBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function guteneditorblocks_block_assets() {
	// Load the compiled styles
	wp_enqueue_style(
		'gb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);
	
	// Load the FontAwesome icon library
	wp_enqueue_style(
		'gb-fontawesome',
		plugins_url( 'dist/assets/fontawesome/css/all.min.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);
	
	// Load the bootstrap-grid library
	wp_enqueue_style(
		'gb-bootstrap-grid',
		plugins_url( 'dist/assets/css/bootstrap-grid.min.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);
} 
add_action( 'enqueue_block_assets', 'guteneditorblocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function guteneditorblocks_editor_assets() {
	wp_enqueue_script(
		'gb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		true
	);

	wp_enqueue_style(
		'gb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
	
	wp_enqueue_style(
		'gb-fonticonpicker-css',
		plugins_url( 'dist/assets/css/fonticonpicker.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'guteneditorblocks_editor_assets' );


