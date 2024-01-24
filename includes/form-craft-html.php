<?php
class InputTypes {
	private static $input_type;
	public static function get_all_input_types() {
		if ( null === self::$input_type ) {
			self::$input_type = new self();
			return array( 'text', 'number', 'email', 'name', 'address', 'checkbox', 'password', 'textarea' );
		}
		return self::$input_type;
	}
}
$fcp_all_input_types = InputTypes::get_all_input_types()
?>
<div class="fcp-metabox-wrapper">
	<div class="fcp-form-area">
		<form method="post">
			<div class="fcp-form-fields-wrapper" data-path="<?php echo FORM_CRAFT_PLUGIN_URL; ?>">
				
			</div>
		</form>
	</div>
	<div class="fcp-input-wigets">
		<?php
		foreach ( $fcp_all_input_types as $fcp_input ) {
			?>
			<div class="fcp-single-widget" data-input="<?php echo $fcp_input; ?>">
				<img class="fcp-widget-icon" src="<?php echo FORM_CRAFT_PLUGIN_URL; ?>/assets/icons/<?php echo $fcp_input; ?>.png">
				<div class="fcp-input-title"><?php echo $fcp_input; ?></div>
			</div>
			<?php
		}
		?>
	</div>
</div>
<?php
	$data = get_post_meta( $post->ID, 'form-json' , true );
	if ( ! empty( $data ) ) {
		$json_string = json_encode( $data );
	}
?>
<input type="hidden" class="fcp-json-hidden-field" name="fcp_json_data" value="<?php if ( ! empty( $json_string ) ) {  echo esc_attr( $json_string ) ; }?>">

<div class="fcp-form-submit-specimen">Submit</div>
<div id="first-popup" class="mfp-hide white-popup">
	<form class="fcp--field-settings--form">
		<h3>Field Settings</h3>

		<div class="fcp-setting-fields-wrap">

			<div class="fcp-placeholder-admin-wrap fcp-setting-field-cc">
				<label for="fcp-placeholder">Placeholder</label>
				<input type="text" class="fcp-placeholder-val-admin">
			</div>

			<div class="fcp-label-admin-wrap fcp-setting-field-cc">
				<label for="fcp-label">Label</label>
				<input type="text" class="fcp-label-val-admin">
			</div>

			<div class="fcp-required fcp-setting-field-cc">
				<label for="fcp-isRequired">Required</label>
				<label class="switch">
					<input type="checkbox" class="fcp-req-val-admin">
					<span class="slider round"></span>
				</label>
			</div>

			<div class="fcp-min--max-admin-wrap fcp-setting-field-cc">
				<div class="fcp-min-admin-wrap">
					<label for="fcp-label">Minimun</label>
					<input type="number" class="fcp-min-num-val-admin">
				</div>
	
				<div class="fcp-max-admin-wrap">
					<label for="fcp-label">Maximun</label>
					<input type="number" class="fcp-max-num-val-admin">
				</div>
			</div>

			<div class="fcp-name-fields-wrap fcp-setting-field-cc">
				<div class="fcp-required fcp-req-firstname">
					<label for="fcp-isRequired">Firstname</label>
					<label class="switch">
						<input type="checkbox" class="fcp-firstn-req-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required fcp-req-last-name fcp-setting-field-cc">
					<label for="fcp-isRequired">Lastname</label>
					<label class="switch">
						<input type="checkbox" class="fcp-lastn-req-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>
			</div>

			<div class="fcp-address-settings-wrap fcp-setting-field-cc">
				<div class="fcp-required fcp-street-ad">
					<label for="fcp-street-adress">Street Address</label>
					<label class="switch">
						<input type="checkbox" class="fcp-stad-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required fcp-adli-two ">
					<label for="fcp-adli-two">Address line 2</label>
					<label class="switch">
						<input type="checkbox" class="fcp-adli-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required">
					<label for="fcp-city-req">City</label>
					<label class="switch">
						<input type="checkbox" class="fcp-city-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required fcp-state-admin-wrap">
					<label for="fcp-state-req">State</label>
					<label class="switch">
						<input type="checkbox" class="fcp-state-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required fcp-zip-admin-wrap">
					<label for="fcp-zpc">Zip code</label>
					<label class="switch">
						<input type="checkbox" class="fcp-zpc-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

				<div class="fcp-required fcp-country-admin-wrap">
					<label for="fcp-country">Country</label>
					<label class="switch">
						<input type="checkbox" class="fcp-country-val-admin" checked>
						<span class="slider round"></span>
					</label>
				</div>

			</div>

			<div class="fcp-checkboxes-admin-wrap fcp-setting-field-cc">
				<ul class="fcp-checkboxes-admin">
				</ul>
				<button class="fcp-add-more-checkbox-btn">+ Add more checkboxes</button>
			</div>

		</div>
		<input type="submit" value="Save changes" class="fcp-form-submit-specimen fcp-submit-settings-admin">
	</form>
</div>
