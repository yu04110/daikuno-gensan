<?php
/**
 * Theme setup and asset loading.
 *
 * @package DaikunoGensan
 */

if ( ! function_exists( 'daikuno_gensan_setup' ) ) {
	function daikuno_gensan_setup() : void {
		add_theme_support( 'title-tag' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'wp-block-styles' );
	}
}
add_action( 'after_setup_theme', 'daikuno_gensan_setup' );

function daikuno_gensan_enqueue_assets() : void {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style(
		'daikuno-gensan-style',
		get_stylesheet_uri(),
		array(),
		$theme_version
	);

	wp_enqueue_script(
		'daikuno-gensan-main',
		get_template_directory_uri() . '/main.js',
		array(),
		$theme_version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'daikuno_gensan_enqueue_assets' );
