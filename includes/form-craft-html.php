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
<div class="fcp-form-submit-specimen">Submit</div>
<div id="first-popup" class="mfp-hide white-popup">
	<form class="fcp--field-settings--form">
		<h3>Field Settings</h3>
		


		<input type="submit" value="Save changes" class="fcp-form-submit-specimen fcp-submit-settings-admin">
	</form>
</div>
