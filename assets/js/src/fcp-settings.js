const $ = jQuery;
import fcp_get_data_from_object from './fcp-data-provider'
function fcp_field_settings_handler() { 

	$(document).on("click", '.fcp-popup-icon', function (e) {
		e.preventDefault();
		var field_id = $(this).closest('.fcp-single-field-wrap').data('id') 
		var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');
		var data_of_the_field = fcp_get_data_from_object(field_id)
		$('.fcp-setting-field-cc').hide()
		// var settings = data_of_the_field.settings

		if (setting_for === "text" && data_of_the_field.field_type === "text") {
			
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()		

			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-placeholder-val-admin').val(settings.placeholer)
			$('.fcp-req-val-admin').prop('checked', settings.required)

		} else if (setting_for === "number" && data_of_the_field.field_type === "number") {

			$('.fcp-required').css('display','flex')
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-label-admin-wrap').show()
			$('.fcp-min--max-admin-wrap').show()			

			$('.fcp-placeholder-val-admin').val(settings.placeholer)
			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-req-val-admin').prop('checked', settings.required)
			$('.fcp-min-num-val-admin').val(settings.min_val)
			$('.fcp-max-num-val-admin').val(settings.max_val)

		} else if (setting_for === "email" && data_of_the_field.field_type === "email") {

			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()

			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-placeholder-val-admin').val(settings.placeholer)
			$('.fcp-req-val-admin').prop('checked', settings.required)

		} else if (setting_for === "name" && data_of_the_field.field_type === "name") {

			$('.fcp-required').css('display','flex')
			$('.fcp-name-fields-wrap').show();
			$('.fcp-label-admin-wrap').show();

			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-req-val-admin').prop('checked', settings.required)
			$('.fcp-firstn-req-val-admin').prop('checked', settings.firstname)
			$('.fcp-lastn-req-val-admin').prop('checked', settings.lastname)

		} else if (setting_for === "address" && data_of_the_field.field_type === "address") {

			$('.fcp-label-admin-wrap').show();
			$('.fcp-required').css('display','flex')
			$('.fcp-address-settings-wrap').show()

			
		} else if (setting_for === "checkbox") {
			$('.fcp-label-admin-wrap').show()
			$('.fcp-checkboxes-admin-wrap').show()
		} else if (setting_for === "password") {
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-label-admin-wrap').show()
		} else if (setting_for === "textarea") {
			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()
		}
		


		jQuery.magnificPopup.open({
			items: {
				src: '#first-popup'
			},
			type: 'inline',
			closeBtnInside: true
		});

	})

}


export default fcp_field_settings_handler;