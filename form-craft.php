<?php
/**
 * Plugin Name: Form Craft
 * Description: Introducing the Dynamic Form Generator, a powerful WordPress plugin.
 * Version: 1.0
 * Author: Hemant Jodhani
 */

define( 'FORM_CRAFT_PLUGIN_PATH', __FILE__ );
define( 'FORM_CRAFT_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
class FormCraftPlugin {
	private static $instance;

	public static function plugin_init() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct() {
		register_activation_hook( __FILE__, array( $this, 'activate_plugin' ) );
		add_action( 'init', array( $this, 'register_custom_post_type' ) );
		add_action( 'add_meta_boxes', array( $this, 'fcp_custom_metabox' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_files' ) );

		add_action( 'save_post', array( $this, 'fcp_save_data' ) );
	}

	public function enqueue_files() {

		wp_enqueue_style( 'fcp-drag-drop-plugin-css', plugin_dir_url( __FILE__ ) . 'assets/js/jquery-ui-1.13.2.custom/jquery-ui.css', array(), '1.0' );
		wp_enqueue_script( 'fcp-drag-drop-plugin', plugin_dir_url( __FILE__ ) . 'assets/js/jquery-ui-1.13.2.custom/jquery-ui.min.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_script( 'fcp-main-script', plugin_dir_url( __FILE__ ) . 'assets/js/dist/bundle.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_style( 'fcp-main-style', plugin_dir_url( __FILE__ ) . 'assets/css/style.css', array(), '1.0' );
		wp_enqueue_style( 'fcp-mgpp-style', plugin_dir_url( __FILE__ ) . 'assets/js/Magnific-Popup-master/dist/magnific-popup.css', array(), '1.0' );
		wp_enqueue_script( 'fcp-mgpp-script', plugin_dir_url( __FILE__ ) . 'assets/js/Magnific-Popup-master/dist/jquery.magnific-popup.js', array( 'jquery' ), '1.0', true );
	}

	public function fcp_custom_metabox() {
		$screens = array( 'form-craft' );
		foreach ( $screens as $screen ) {
			add_meta_box(
				'a9da8e50',                 // Unique ID
				'Form craft',      // Box title
				array( $this, 'fcp_metabox_html' ),  // Content callback, must be of type callable
				$screen,                          // Post type
			);
		}
	}

	public function fcp_metabox_html( $post ) {
		$value = get_post_meta( $post->ID, 'a9da8e50', true );
		include 'includes/form-craft-html.php';
	}

	public function activate_plugin() {
		$this->register_custom_post_type();
	}

	public function register_custom_post_type() {
		register_post_type(
			'form-craft',
			array(
				'public'       => true,
				'show_in_rest' => false,
				'supports'     => array( 'title' ),
				'rewrite'      => array( 'slug' => 'form_craft' ),
				'has_archive'  => true,
				'labels'       => array(
					'name'          => 'Form craft',
					'singular_name' => 'Form craft',
					'add_new_item'  => 'Add New form',
					'edit_item'     => 'Edit from',
					'all_items'     => 'All forms',
				),
				'menu_icon'    => 'dashicons-forms',
			)
		);
	}
	public function fcp_save_data() {
		if ( isset( $_POST['fcp_json_data'] ) ) {
			$post_id = $_POST['post_ID'];
			$data    = $_POST['fcp_json_data'];
			// print_r($data) ; exit;
			$data = json_decode(wp_unslash($data));
			// echo '<pre>';
			// print_r($data) ; 
			// echo '</pre>';
			// exit;
			update_post_meta( $post_id, 'form-json', $data );
		}
	}
}



FormCraftPlugin::plugin_init();
