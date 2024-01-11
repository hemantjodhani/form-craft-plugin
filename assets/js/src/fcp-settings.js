const $ = jQuery;
import fcp_get_data_from_object from './fcp-data-provider'
import fcp_hidden_field_data_updater from './fcp-hidden-field-data'
function fcp_field_settings_handler() { 

	$(document).on("click", '.fcp-popup-icon', function (e) {
		e.preventDefault();
		var field_id = $(this).closest('.fcp-single-field-wrap').data('id') 
		alert(field_id)
		var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');
		var data_of_the_field = fcp_get_data_from_object(field_id)
		$('.fcp-setting-field-cc').hide()
		var settings = data_of_the_field.settings

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

			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-req-val-admin').prop('checked', settings.required)
			$('.fcp-stad-val-admin').prop('checked', settings.street_address)
			$('.fcp-adli-val-admin').prop('checked', settings.address_line_2)
			$('.fcp-city-val-admin').prop('checked', settings.city)
			$('.fcp-state-val-admin').prop('checked', settings.state)
			$('.fcp-zpc-val-admin').prop('checked', settings.zip_code)
			$('.fcp-country-val-admin').prop('checked', settings.country)
			
		} else if (setting_for === "checkbox" && data_of_the_field.field_type === "checkbox") {

			$('.fcp-label-admin-wrap').show()
			$('.fcp-checkboxes-admin-wrap').show()

			$('.fcp-label-val-admin').val(settings.label)
			var options = data_of_the_field.options
			$('.fcp-checkboxes-admin').html("")
			options.forEach((option) => {
				$('.fcp-checkboxes-admin').append(`<li data-id=${option.option_id}><input type="text" value="${option.value}" class="fcp-checkbox--val--admin"> <span class="fcp-checkbox-remove-btn">X</span></li>`)
			});
			

		} else if (setting_for === "password" && data_of_the_field.field_type === "password") {

			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-label-admin-wrap').show()
			
			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-placeholder-val-admin').val(settings.placeholer)

		} else if (setting_for === "textarea") {

			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()

			$('.fcp-label-val-admin').val(settings.label)
			$('.fcp-req-val-admin').prop('checked', settings.required)
			
		}
		
		fcp_hidden_field_data_updater()

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