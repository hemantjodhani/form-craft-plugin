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
		add_action( 'wp_enqueue_scripts', array( $this, 'fcp_fe_style' ) );
		add_action( 'init', array( $this, 'fcp_form_submission_handler' ) );
		add_action( 'admin_menu', array( $this, 'fcp_custom_entries_menu' ) );
		add_filter( 'post_row_actions', array( $this, 'fcp_remove_view_link_cpt' ) );
		add_action( 'admin_head', array( $this, 'fcp_hide_preview_button' ) );

	}

	public function fcp_hide_preview_button() {

		global $post_type;
		if ( 'form-craft' === $post_type ) {
			echo '<style type="text/css">#edit-slug-box,#view-post-btn,
			#post-preview,.updated p a{display: none;}.view{display:none;}</style>';
		}
	}

	public function fcp_remove_view_link_cpt( $action ) {

		$post_type = get_post_type();

		if ( 'form-craft' === $post_type ) {
			unset( $action['view'] );
			return $action;
		} else {
			return $action;
		}
	}

	public function fcp_custom_entries_menu() {
		add_submenu_page(
			'edit.php?post_type=form-craft',
			'Form Craft Entries',
			'Entries',
			'manage_options',
			'form-craft-entries',
			array( $this, 'fcp_entries_page' )
		);
	}

	public function fcp_entries_page() {
		include 'form-craft-entries.php';
	}

	public function fcp_fe_style() {
		if ( ! is_admin() ) {
			wp_enqueue_style( 'fcp-fe-style', plugin_dir_url( __FILE__ ) . 'assets/css/fcp-fe.css', array(), '1.0' );
		}
	}

	public function fcp_form_submission_handler() {
		global $wpdb;
		$_all_entries = array();
		if ( isset( $_GET['form_submission'] ) ) {
			$form_id = $_POST['fcp_form_id'];
			$data    = get_post_meta( $form_id, 'form-json' );
			$fields  = $data[0];
			foreach ( $fields as $field ) {
				$field_id    = $field->fieldID;
				$field_label = $field->settings->label;
				$field_type  = $field->field_type;
				$field_value = $_POST[ $field_id ];

				$_all_entries[] = array(
					'label' => $field_label,
					'type'  => $field_type,
					'value' => $field_value,
				);
			}
			$table_name   = $wpdb->prefix . 'form_craft_entries';
			$_all_entries = json_encode( $_all_entries );
			$wpdb->insert(
				$table_name,
				array(
					'form_id' => $form_id,
					'entry'   => $_all_entries,
				)
			);
			$redirect_url = add_query_arg( 'confirm', '1', wp_get_referer() );
			wp_redirect( $redirect_url );
			exit;
		}
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
			<div class="fcp-shortcode-btn-field-wrap">
				<input type="text" name="" id="" disabled class="fcp-shortcode-view" value="<?php echo esc_attr( "[form_craft id='{$post->ID}']" ); ?>">
				<img src="<?php echo FORM_CRAFT_PLUGIN_URL; ?>/assets/icons/paste.png" alt="">
			</div>
			<span class="fcp-scc-message">Shortcode copied ✅</span>
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
			);
		}
	}

	public function fcp_metabox_html( $post ) {
		include 'includes/form-craft-html.php';
	}

	public function activate_plugin() {
		$this->register_custom_post_type();
		$this->create_entries_table();
	}

	private function create_entries_table() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE {$wpdb->prefix}form_craft_entries (
			entry_id int NOT NULL AUTO_INCREMENT,
			form_id int NOT NULL,
			entry text NOT NULL,
			PRIMARY KEY  (entry_id)
		) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $sql );
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

	private function flatten_array( $data ) {
		$results = array();

		foreach ( $data as $key => $value ) {
			if ( is_array( $value ) && ! empty( $value ) ) {
				$results = array_merge( $results, $this->flatten_array( $value ) );
			} else {
				$results[ $key ] = $value;
			}
		}

		return $results;
	}


	public function fcp_save_data() {
		if ( isset( $_POST['fcp_json_data'] ) ) {

			$post_id = $_POST['post_ID'];
			$data    = $_POST['fcp_json_data'];
			$data    = json_decode( wp_unslash( $data ) );
			$results = array();
			$results = $this->flatten_array( $data );
			update_post_meta( $post_id, 'form-json', $results );

		}
	}

	public function fcp_all_countries() {
		$countries = array( 'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe' );
		return $countries;
	}
	public function fcp_front_end_form( $attr ) {

		ob_start();

		$post_id    = $attr['id'];
		$data       = get_post_meta( $post_id, 'form-json', true );
		$all_fields = $data;
		if ( ! empty( $all_fields ) ) {
			echo "<div class='fcp-fe-form-wrap'>";

			if ( isset( $_GET['confirm'] ) ) {

				$confirm_message = get_post_meta( $post_id, 'fcp_form_confirmation', true );
				if ( $confirm_message == '' ) {
					$confirm_message = 'Form submitted successfully.';
				}
				?>
					<span><?php echo $confirm_message; ?></span>
				<?php
			}
			echo '<form method="post" action="' . site_url() . '/?form_submission=1" ' . ( isset( $_GET['confirm'] ) ? 'style="display:none;"' : '' ) . '>';
			echo '<input type="hidden" name="fcp_form_id"value=' . "$post_id" . '>';

			foreach ( $all_fields as $field ) {

				$placeholder = '';
				$required    = '';
				$label       = '';
				$settings    = $field->settings;

				if ( ! empty( $settings->placeholder ) ) {
						$placeholder = $settings->placeholder;
				}

				if ( ! empty( $settings->required ) ) {
					$required = $settings->required;
				}

				if ( ! empty( $settings->label ) ) {
					$label = $settings->label;
				}

				if ( 'text' === $field->field_type ) {
					?>
						<div class='fcp-fe-field-wrap fcp-fe-text-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='text' id='<?php echo $label; ?>' name='<?php echo $field->fieldID; ?>' 
																<?php
																if ( $required ) {
																	echo 'required';}
																?>
							placeholder="<?php echo $placeholder; ?>">
						</div>
					<?php
				} elseif ( 'number' === $field->field_type ) {
					$min_val = $field->settings->min_val;
					$max_val = $field->settings->max_val;
					?>
						<div class='fcp-fe-field-wrap fcp-fe-num-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='number' id='<?php echo $label; ?>' name='<?php echo $field->fieldID; ?>' 
																<?php
																if ( $required ) {
																	echo 'required';}
																?>
							placeholder="<?php echo $placeholder; ?>" min="<?php echo $min_val; ?>" max="<?php echo $max_val; ?>">
						</div>
					<?php

				} elseif ( 'email' === $field->field_type ) {
					?>
						<div class='fcp-fe-field-wrap fcp-fe-email-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='email' id='<?php echo $label; ?>' name='<?php echo $field->fieldID; ?>' 
																<?php
																if ( $required ) {
																	echo 'required';}
																?>
							placeholder="<?php echo $placeholder; ?>">
						</div>
					<?php

				} elseif ( 'name' === $field->field_type ) {
					$first_name = $field->settings->firstname;
					$last_name  = $field->settings->lastname;
					?>
						<div class='fcp-fe-field-wrap fcp-fe-name-field'>

							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<div class="fcp-fe--firstname--lastname--wrap">
								<?php
								if ( $first_name ) {
									?>
										<input type='text' name='<?php echo $field->fieldID; ?>[0]' 
																			<?php
																			if ( $required ) {
																				echo 'required';}
																			?>
										placeholder="First name">
									<?php
								}
								?>
								<?php
								if ( $last_name ) {
									?>
										<input type='text' name='<?php echo $field->fieldID; ?>[1]' 
																			<?php
																			if ( $required ) {
																				echo 'required';}
																			?>
										placeholder="Last name">
									<?php
								}
								?>
							</div>
						</div>
					<?php
				} elseif ( 'address' === $field->field_type ) {
					$street_adress  = $field->settings->street_address;
					$address_line_2 = $field->settings->address_line_2;
					$city           = $field->settings->city;
					$state          = $field->settings->state;
					$country        = $field->settings->country;
					$zip_code       = $field->settings->zip_code;

					?>
						<div class='fcp-fe-field-wrap fcp-fe-address-field'>
							
							<label class="fcp-fe-address--label" for='<?php echo $label; ?>'><?php echo $label; ?></label>
							
							<?php if ( $street_adress ) { ?>
								<div class="fcp-fe-stad-wrap" >
									<label for="street-fcp-fe--address">Street Address</label>
									<input type="text" id="street-fcp-fe--address" 
									<?php
									if ( $required ) {
										echo 'required';}
									?>
									name="<?php echo $field->fieldID; ?>[0]">
								</div>
							<?php } ?>

							<?php if ( $address_line_2 ) { ?>
								<div class="fcp-fe-stad-wrap fcp-fe-adli_two-wrap" >
									<label for="adress_line_two">Address Line 2</label>
									<input type="text" id="adress_line_two" 
									<?php
									if ( $required ) {
										echo 'required';}
									?>
									name="<?php echo $field->fieldID; ?>[1]">
								</div>
							<?php } ?>

							<div class="fcp-fe-city--state-wrap">
								<?php if ( $city ) { ?>
									<div class="fcp-fe-stad-wrap fcp-fe-city-wrap" >
										<label for="city">City</label>
										<input type="text" id="city" 
										<?php
										if ( $required ) {
											echo 'required';}
										?>
										name="<?php echo $field->fieldID; ?>[2]">
									</div>
								<?php } ?>

								<?php if ( $state ) { ?>
									<div class="fcp-fe-stad-wrap fcp-fe-state-wrap" >
										<label for="state">State</label>
										<input type="text" id="state" 
										<?php
										if ( $required ) {
											echo 'required';}
										?>
										name="<?php echo $field->fieldID; ?>[3]">
									</div>
								<?php } ?>
							</div>

							<div class="fcp-fe-zip--country-wrap">
								
								<?php if ( $zip_code ) { ?>
									<div class="fcp-fe-stad-wrap fcp-fe-zip_code-wrap" >
										<label for="zip_code">Zip code</label>
										<input type="number" id="zip_code" 
										<?php
										if ( $required ) {
											echo 'required';}
										?>
										name="<?php echo $field->fieldID; ?>[4]">
									</div>
								<?php } ?>

								<?php if ( $country ) { ?>
									<div class="fcp-fe-stad-wrap fcp-fe-country-wrap" >
										<label for="country">Country</label>

										<select id="country" name="<?php echo $field->fieldID; ?>[5]">
											<?php
												$countries = $this->fcp_all_countries();
											foreach ( $countries as $country ) {
												?>
													 
														<option value="<?php echo $country; ?>"><?php echo $country; ?></option>
													<?php
											}
											?>
										</select>

									</div>
								<?php } ?>	

							</div>
							

						</div>
										
					<?php
				} elseif ( 'checkbox' === $field->field_type ) {
					$options = $field->options;
					?>

						<div class='fcp-fe-field-wrap fcp-fe-checkbox-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							
							<ul class="fcp-fe-checboxes-wrap">
								<?php
								foreach ( $options as $option ) {
									?>
										<li>
											<div class="checkbox-wrapper-2">
												<input type="checkbox" id="<?php echo $option->option_id; ?>" name="<?php echo $field->fieldID; ?>[]" value="<?php echo $option->value; ?>" class="sc-gJwTLC ikxBAC">
											</div>	
											<label for="<?php echo $option->option_id; ?>"><?php echo $option->value; ?></label>
										</li>
									<?php
								}
								?>
							</ul>
						</div>

					<?php

				} elseif ( 'password' === $field->field_type ) {

					?>

						<div class='fcp-fe-field-wrap fcp-fe-password-field'>
							<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
							<input type='password' id='<?php echo $label; ?>' name='<?php echo $field->fieldID; ?>' required placeholder="<?php echo $placeholder; ?>">
						</div>
						
					<?php

				} elseif ( 'textarea' === $field->field_type ) {

					?>
					<div class='fcp-fe-field-wrap fcp-fe-textarea-field-wrap'>
						<label for='<?php echo $label; ?>'><?php echo $label; ?></label>
						<textarea id="<?php echo $label; ?>" name="<?php echo $field->fieldID; ?>" 
												<?php
												if ( $required ) {
													echo 'required';}
												?>
						rows="10"></textarea>
					</div>
					<?php
				}
			}

			echo '<input type="submit" class="fcp-fe-submit-btn" name="fcp-fe-form-submit">';
			echo '</form>';
			echo '</div>';
			return ob_get_clean();
		}
	}
}

class fcp_message_handler {
	private static $init;
	public static function fcp_message_init() {
		if ( null === self::$init ) {
			self::$init = new self();
		}
		return self::$init;
	}

	private function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'fcp_confirmation_message' ) );
		add_action( 'save_post', array( $this, 'fcp_save_confirmation_message' ) );
	}

	public function fcp_save_confirmation_message() {
		if ( isset( $_POST['fcp_form_confirm'] ) ) {
			$post_id = $_POST['post_ID'];
			update_post_meta( $post_id, 'fcp_form_confirmation', $_POST['fcp_form_confirm'] );
		}
	}

	public function fcp_confirmation_message() {
		$screens = array( 'form-craft' );
		foreach ( $screens as $screen ) {
			add_meta_box(
				'vyKshwp',                 // Unique ID
				'Confirmation message',      // Box title
				array( $this, 'fcp_metabox_confirm_html' ),  // Content callback, must be of type callable
				$screen,                           // Post type
				'side',
			);
		}
	}

	public function fcp_metabox_confirm_html( $attr ) {
		$message = get_post_meta( $attr->ID, 'fcp_form_confirmation', true );
		?>
			<input type="text" name="fcp_form_confirm" value="<?php echo esc_attr( $message ); ?>" required>
		<?php
	}
}

fcp_message_handler::fcp_message_init();

FormCraftPlugin::plugin_init();



add_action( 'edit_form_advanced', 'force_post_title' );
function force_post_title( $post ) {
	// List of post types that we want to require post titles for.
	$post_types = array(
		'form-craft',
		// 'report',
		// 'event',
		// 'project'
	);

	// If the current post is not one of the chosen post types, exit this function.
	if ( ! in_array( $post->post_type, $post_types ) ) {
		return;
	}
	?>
	<script type='text/javascript'>
		(function ($) {
			$(document).ready(function () {
				//Require post title when adding/editing Project Summaries
				$('body').on('submit.edit-post', '#post', function () {
					// If the title isn't set
					if ($("#title").val().replace(/ /g, '').length === 0) {
						// Show the alert
						if (!$("#title-required-msg").length) {
							$("#titlewrap")
								.append('<div id="title-required-msg"><em>Title is required.</em></div>')
								.css({
									"padding": "5px",
									"margin": "5px 0",
									"background": "#ffebe8",
									"border": "1px solid #c00"
								});
						}
						// Hide the spinner
						$('#major-publishing-actions .spinner').hide();
						// The buttons get "disabled" added to them on submit. Remove that class.
						$('#major-publishing-actions').find(':button, :submit, a.submitdelete, #post-preview').removeClass('disabled');
						// Focus on the title field.
						$("#title").focus();
						return false;
					}
				});
			});
		}(jQuery));
	</script>
	<?php
}
