<?php
/**
 * Plugin Name: Guten Editor Blocks
 * Plugin URI: https://wordpress.org/plugins/guten-editor-blocks/
 * Description: All text editor related gutenberg block collections.
 * Author: ThemeVedanta
 * Author URI: http://www.themevedanta.com
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GutenEditorBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'dist/init.php';


/**
 * Load plugin text-domain.
 *
 * @since 1.0.0
 * @package GutenEditorBlocks
 */
function guteneditorblocks_load_textdomain() {
    load_plugin_textdomain( 'guten-editor-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' ); 
}
add_action( 'plugins_loaded', 'guteneditorblocks_load_textdomain' );

/**
 * Register Gutenberg Block Category
 * 
 * @since 1.0.0
 * @package GutenEditorBlocks
 */
add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'guteneditorblocks',
                'title' => __( 'Guten Editor Blocks', 'guten-editor-blocks' ),
            ),
        )
    );
}, 10, 2 );
