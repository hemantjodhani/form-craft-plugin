const $ = jQuery;

function fcp_field_settings_handler() { 

	$(document).on("click", '.fcp-popup-icon', function (e) {
		e.preventDefault();
		// $('.fcp--field-settings--form .fcp-setting-fields-wrap').html("")
		var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');
		
		if (setting_for === "text") {
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()			
		} else if (setting_for === "number") {
			
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-required').css('display','flex')
			$('.fcp-label-admin-wrap').show()			
			
		} else if (setting_for === "email") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(EMAIL);
		} else if (setting_for === "name") {
			$('.fcp-placeholder-admin-wrap').show()
			$('.fcp-required').css('display','flex')
			$('.fcp-name-fields-wrap').show();
		} else if (setting_for === "address") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(ADDRESS);
		} else if (setting_for === "checkbox") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(CHECKBOX);
		} else if (setting_for === "password") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(PASSWORD);
		} else if (setting_for === "textarea") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(TEXTAREA);
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