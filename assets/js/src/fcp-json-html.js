const $ = jQuery;
import all_fields from "./fcp-global-variables";

function fcp_json_to_html_convertor() {

	var data_from_php = $(".fcp-json-hidden-field").val();
	if (data_from_php !== "") {

		var obj = JSON.parse(data_from_php);

		obj[0].forEach((data) => {
			all_fields.push(data)
		});


		all_fields.forEach((data) => {
			const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');
			const MINI_SETTINGS_BAR = `<div class="fcp-mini-setting-bar" data-settings=${data.field_type}><img class="fcp-field-drag-indicator" src="${PLUGIN_PATH}/assets/icons/drag_indicator.svg"><img class="fcp-field-delete-icon" src="${PLUGIN_PATH}assets/icons/icons8-delete.svg"><a href="#first-popup" class="fcp-popup-icon"><img class="fcp-field-settings-icon" src="${PLUGIN_PATH}assets/icons/icons8-settings.svg"></a></div>`
			
			
			if (data.field_type === "text") {

				$('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">${data.settings.label}</label></div><input class='fcp-form-control fcp-type-text-ad' type="${data.field_type}" disabled placeholder=${data.settings.placeholder}></div>`);

			} else if (data.field_type === "number") {

				$('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">${data.settings.label}</label></div><input class='fcp-form-control fcp-type-number-ad' type="${data.field_type}" disabled placeholder=${data.settings.placeholder}></div>`);

			} else if (data.field_type === "email") {

				$('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">${data.settings.label}</label></div><input class='fcp-form-control fcp-type-email-ad' type="${data.field_type}" disabled placeholder=${data.settings.placeholder}></div>`);

			} else if (data.field_type === "name") {

				const NAME = `<div class="fcp-single-field-wrap fcp-name-field-specimen" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<label class="fcp-label-admin">${data.settings.label}</label><div class="fcp-name-fields-wrap"><input class="fcp-form-control fcp-type-firstn-ad" style="${data.settings.firstname === false ? "display: none" : "display: block"}" type="text" disabled placeholder="First name"><input class="fcp-form-control fcp-type-lastn-ad" style="${data.settings.lastname === false ? "display: none" : "display: block"}" type="text" disabled placeholder="Last name"></div></div>`;
				$('.fcp-form-fields-wrapper').append(NAME)
				
			} else if (data.field_type === "address") {

				const ADDRESS = `<div class="fcp-single-field-wrap" data-id=${data.fieldID}>${MINI_SETTINGS_BAR}<label class="fcp-label-admin fcp-adress-label-admin">${data.settings.label}</label><div class="street-address-admin-wrap" style="${data.settings.street_address === false ? "display: none" : "display: block"}"><input class="fcp-form-control" type="text" id="street" name="street" disabled><div><label for="street">Street Address</label></div></div><div class="adlin-two-admin-wrap" style="${data.settings.address_line_2 === false ? "display: none" : "display: block"}"><input type="text" class="fcp-form-control" id="street" name="address-line-2" disabled><div><label for="address-line-2">Address Line 2</label></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap-admin" style="${data.settings.city === false ? "display: none" : "display: block"}"><input class="fcp-form-control" type="text" id="city" name="city" disabled><div><label for="city">City:</label></div></div><div class="fcp-state-field-wrap-admin" style="${data.settings.state === false ? "display: none" : "display: block"}"><input class="fcp-form-control" type="text" id="state" name="state" disabled><div><label for="state">State:</label></div></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-zip-code-field-wrap-admin" style="${data.settings.zip_code === false ? "display: none" : "display: block"}"><input class="fcp-form-control" type="text" id="zip" name="zip" disabled><div><label for="zip">ZIP Code:</label></div></div><div class="fcp-state-field-wrap fcp-country-field-wrap-admin" style="${data.settings.zip_code === false ? "display: none" : "display: block"}"><select class="fcp-form-control" name="country" id="country" disabled></select><div><label for="country">Country:</label></div></div></div></div>`;
				$('.fcp-form-fields-wrapper').append(ADDRESS)

			} else if (data.field_type === "checkbox") {

				const CHECKBOX = `<div class="fcp-single-field-wrap" data-id=${data.fieldID}>${MINI_SETTINGS_BAR}<label class="fcp-label-admin">${data.settings.label}</label><ul class="fcp-checkbox-wrap-admin">${data.options.map((option) => `<li class="fcp-single-checkbox-admin" data-checkbox="${option.option_id}"><input type="checkbox" value="" name="" id="option-${option.option_id}" disabled=""><label for="option-${option.option_id}">${option.value}</label></li>`).join('')}</ul></div>`;
				$('.fcp-form-fields-wrapper').append(CHECKBOX);  

			} else if (data.field_type === "password") {
				
				$('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">${data.settings.label}</label></div><input class='fcp-form-control fcp-password-admin' type="${data.field_type}" disabled placeholder=${data.settings.placeholder}></div>`);

			} else if (data.field_type === "textarea") {

				const TEXTAREA = `<div class="fcp-single-field-wrap" data-id=${data.fieldID} ><div>${MINI_SETTINGS_BAR}<label class='fcp-label-admin'>${data.settings.label}</label></div><textarea name="paragraph" id="paragraph" cols="65" rows="15" disabled></textarea></div>`
				$('.fcp-form-fields-wrapper').append(TEXTAREA);
				
			}


		});

  	}
}

export default fcp_json_to_html_convertor;
