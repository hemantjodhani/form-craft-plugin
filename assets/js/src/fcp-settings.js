const $ = jQuery;
function fcp_field_settings_handler() { 

	$(document).on("click", '.fcp-popup-icon', function (e) {
		e.preventDefault();
		$('.fcp--field-settings--form .fcp-setting-fields-wrap').html("")
		var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');

		const TEXT = `<label for="fcp-placeholder">Placeholder</label> <input type="text" class="fcp-placeholder-val-admin"> <label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <div class="fcp-required"> <label for="fcp-isRequired">Required</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div>`;
		const NUMBER = `<label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <label for="fcp-placeholder">Placeholder</label> <input type="text" class="fcp-placeholder-val-admin"> <label for="fcp-label">Minimun</label> <input type="number" class="fcp-min-num-val-admin"> <label for="fcp-label">Maximun</label> <input type="number" class="fcp-max-num-val-admin"> <div class="fcp-required"> <label for="fcp-isRequired">Required</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div>`;
		const EMAIL = `<label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <label for="fcp-placeholder">Placeholder</label> <input type="text" class="fcp-placeholder-val-admin"> <div class="fcp-required"> <label for="fcp-isRequired">Required</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div>`;
		const NAME = `<label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <div class="fcp-required"> <label for="fcp-isRequired">Required</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div> <div class="fcp-required fcp-req-firstname"> <label for="fcp-isRequired">Firstname</label> <label class="switch"> <input type="checkbox" class="fcp-firstn-req-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required fcp-req-last-name"> <label for="fcp-isRequired">Lastname</label> <label class="switch"> <input type="checkbox" class="fcp-lastn-req-val-admin" checked> <span class="slider round"></span> </label> </div>`;
		const ADDRESS = `<label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <div class="fcp-required"> <label for="fcp-isRequired">Required (For all fields)</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div> <div class="fcp-required fcp-street-ad"> <label for="fcp-street-adress">Street Address</label> <label class="switch"> <input type="checkbox" class="fcp-stad-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required fcp-adli-two"> <label for="fcp-adli-two">Address line 2</label> <label class="switch"> <input type="checkbox" class="fcp-adli-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required"> <label for="fcp-city-req">City</label> <label class="switch"> <input type="checkbox" class="fcp-city-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required"> <label for="fcp-state-req">State</label> <label class="switch"> <input type="checkbox" class="fcp-state-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required"> <label for="fcp-zpc">Zip code</label> <label class="switch"> <input type="checkbox" class="fcp-zpc-val-admin" checked> <span class="slider round"></span> </label> </div> <div class="fcp-required"> <label for="fcp-country">Country</label> <label class="switch"> <input type="checkbox" class="fcp-country-val-admin" checked> <span class="slider round"></span> </label> </div>`;
		const CHECKBOX = `<ul class="fcp-checkboxes-admin"> <li><input type="text" value="Option 1"> <span>X</span></li> <li><input type="text" value="Option 2"> <span>X</span></li> <li><input type="text" value="Option 3"> <span>X</span></li> </ul> <button>+ Add more checkboxes</button>`;
		const PASSWORD = `<label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin"> <label for="fcp-placeholder">Placeholder</label> <input type="text" class="fcp-placeholder-val-admin">`;
		const TEXTAREA = `<div class="fcp-required"> <label for="fcp-isRequired">Required</label> <label class="switch"> <input type="checkbox" class="fcp-req-val-admin"> <span class="slider round"></span> </label> </div> <label for="fcp-label">Label</label> <input type="text" class="fcp-label-val-admin">`;

		if (setting_for === "text") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(TEXT);
		} else if (setting_for === "number") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(NUMBER);
		} else if (setting_for === "email") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(EMAIL);
		} else if (setting_for === "name") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(NAME);
		} else if (setting_for === "address") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(ADDRESS);
		} else if (setting_for === "checkbox") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(CHECKBOX);
		} else if (setting_for === "password") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(PASSWORD);
		} else if (setting_for === "textarea") {
			$('.fcp--field-settings--form .fcp-setting-fields-wrap').append(TEXTAREA);
		} else {
			console.error("Invalid setting_for value:", setting_for);
		}
		


		$.magnificPopup.open({
			items: {
				src: '#first-popup'
			},
			type: 'inline',
			closeBtnInside: true
		});

	})

}


export default fcp_field_settings_handler;