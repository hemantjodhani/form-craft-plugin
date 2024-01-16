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
		add_action( 'add_meta_boxes', array( $this, 'fcp_custom_metabox_shortcode' ) );
		add_action( 'save_post', array( $this, 'fcp_save_data' ) );
		add_shortcode( 'form_craft', array( $this, 'fcp_front_end_form' ) );
	}

	public function enqueue_files() {

		wp_enqueue_style( 'fcp-drag-drop-plugin-css', plugin_dir_url( __FILE__ ) . 'assets/js/jquery-ui-1.13.2.custom/jquery-ui.css', array(), '1.0' );
		wp_enqueue_script( 'fcp-drag-drop-plugin', plugin_dir_url( __FILE__ ) . 'assets/js/jquery-ui-1.13.2.custom/jquery-ui.min.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_script( 'fcp-main-script', plugin_dir_url( __FILE__ ) . 'assets/js/dist/bundle.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_style( 'fcp-main-style', plugin_dir_url( __FILE__ ) . 'assets/css/style.css', array(), '1.0' );
		wp_enqueue_style( 'fcp-mgpp-style', plugin_dir_url( __FILE__ ) . 'assets/js/Magnific-Popup-master/dist/magnific-popup.css', array(), '1.0' );
		wp_enqueue_script( 'fcp-mgpp-script', plugin_dir_url( __FILE__ ) . 'assets/js/Magnific-Popup-master/dist/jquery.magnific-popup.js', array( 'jquery' ), '1.0', true );
	}
	public function fcp_custom_metabox_shortcode() {
		$screens = array( 'form-craft' );
		foreach ( $screens as $screen ) {
			add_meta_box(
				'5097c582',                 // Unique ID
				"Form's shortcode",      // Box title
				array( $this, 'fcp_metabox_shortcode_html' ),  // Content callback, must be of type callable
				$screen,                           // Post type
				'side',
				'low'
			);
		}
	}

	public function fcp_metabox_shortcode_html( $post ) {
		?>

		<div class="fcp-shortcode--clipboard-wrap">
			<input type="text" name="" id="" disabled class="fcp-shortcode-view" value="<?php echo esc_attr( "[form_craft id='{$post->ID}']" ); ?>">
			<img src="<?php echo FORM_CRAFT_PLUGIN_URL; ?>/assets/icons/paste.png" alt="">
			<span>Short code copied .....</span>
		</div>

		<?php
	}



	public function fcp_custom_metabox() {
		$screens = array( 'form-craft' );
		foreach ( $screens as $screen ) {
			add_meta_box(
				'a9da8e50',                 // Unique ID
				'Form craft',      // Box title
				array( $this, 'fcp_metabox_html' ),  // Content callback, must be of type callable
				$screen,                          // Post type
				'center'
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

			$data = json_decode( wp_unslash( $data ) );
			update_post_meta( $post_id, 'form-json', $data );

		}
	}
	public function fcp_front_end_form( $attr ) {

		ob_start();
		$post_id    = $attr['id'];
		$data       = get_post_meta( $post_id, 'form-json' );
		$all_fields = $data[0];
		if ( ! empty( $all_fields ) ) {
			echo "<div class='fcp-fe-form-wrap'>";
			echo "<form method='post'>";
			echo '<input type="hidden" name="fcp_form_id"value=' . "$post_id" . '>';
			foreach ( $all_fields as $field ) {

					$settings    = $field->settings;
					$label       = $settings->label;
					$required    = $settings->required;
					if(!empty($settings->placeholder)){
						$placeholder = $settings->placeholder;
					}

				if ( 'text' === $field->field_type ) {
					?>
						<div class='fcp-fe-field-wrap fcp-fe-text-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='text' id='<?php echo $label; ?>' name='fcp_text_field' <?php if($required){echo "required";}?> placeholder="<?php echo $placeholder ; ?>">
						</div>
					<?php
				} elseif ( 'number' === $field->field_type ) {
					$min_val = $field->settings->min_val;
					$max_val = $field->settings->max_val;
					?>
						<div class='fcp-fe-field-wrap fcp-fe-num-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='number' id='<?php echo $label; ?>' name='fcp_num_field' <?php if($required){echo "required";}?> placeholder="<?php echo $placeholder ; ?>" min="<?php echo $min_val ?>" max="<?php echo $max_val ?>">
						</div>
					<?php

				} elseif ( 'email' === $field->field_type ) {
					?>
						<div class='fcp-fe-field-wrap fcp-fe-email-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='email' id='<?php echo $label; ?>' name='fcp_email_field' <?php if($required){echo "required";}?> placeholder="<?php echo $placeholder ; ?>">
						</div>
					<?php

				} elseif ( 'name' === $field->field_type ) {
					$first_name = $field->settings->firstname;
					$last_name  = $field->settings->lastname;
					?>
						<div class='fcp-fe-field-wrap fcp-fe-name-field'>

							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<div class="fcp-fe--firstname--lastname--wrap">
								<?php if($first_name){
									?>
										<input type='text' name='fcp_first_name_field' <?php if($required){echo "required";}?> placeholder="first name">
									<?php
								} ?>
								<?php if($last_name){
									?>
										<input type='text' name='fcp_last_name_field' <?php if($required){echo "required";}?> placeholder="last name">
									<?php	
									}
								?>
							</div>
						</div>
					<?php
				} elseif ( 'address' === $field->field_type ) {
					$street_adress = $field->settings->street_address;
					$address_line_2 = $field->settings->address_line_2;
					$city = $field->settings->city;
					$state = $field->settings->state;
					$country = $field->settings->country;
					$zip_code = $field->settings->zip_close;
					// Wrap fields in a div to allow styling of the address
					?>

					<?php
				} elseif ( 'checkbox' === $field->field_type ) {

				} elseif ( 'password' === $field->field_type ) {

				} elseif ( 'textarea' === $field->field_type ) {

				}
				echo '</form>';
				echo '</div>';
			}
			return ob_get_clean();
		}
	}
}

FormCraftPlugin::plugin_init();
