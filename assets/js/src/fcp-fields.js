const $ = jQuery;
import all_fields from "./fcp-global-variables";
import fcp_checkbox_id_generator from './fcp-checkbox-id'
function fcp_field_appender_admin() {
    var data = {}
    function fcp_field_id_generator() {
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            
            var ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);

        return (idstr);
    }

    $(document).on('click', '.fcp-single-widget', function () {

        var default_checkbox_id = []

        for(var i = 0 ; i <= 2 ;i++){
            var id = fcp_checkbox_id_generator()
            default_checkbox_id.push(id)
        }

        var fcp_field_id = fcp_field_id_generator()
        var field_name = $(this).attr('data-input');
        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');
        const MINI_SETTINGS_BAR = `<div class="fcp-mini-setting-bar" data-settings=${field_name}><img class="fcp-field-drag-indicator" src="${PLUGIN_PATH}/assets/icons/drag_indicator.svg"><img class="fcp-field-delete-icon" src="${PLUGIN_PATH}assets/icons/icons8-delete.svg"><a href="#first-popup" class="fcp-popup-icon"><img class="fcp-field-settings-icon" src="${PLUGIN_PATH}assets/icons/icons8-settings.svg"></a></div>`
        const ADDRESS = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id}>${MINI_SETTINGS_BAR}<label class="fcp-label-admin fcp-adress-label-admin">Address</label><div class="street-address-admin-wrap"><input class="fcp-form-control" type="text" id="street" name="street" disabled><div><label for="street">Street Address</label></div></div><div class="adlin-two-admin-wrap"><input type="text" class="fcp-form-control" id="street" name="address-line-2" disabled><div><label for="address-line-2">Address Line 2</label></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap-admin"><input class="fcp-form-control" type="text" id="city" name="city" disabled><div><label for="city">City:</label></div></div><div class="fcp-state-field-wrap-admin"><input class="fcp-form-control" type="text" id="state" name="state" disabled><div><label for="state">State:</label></div></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-zip-code-field-wrap-admin"><input class="fcp-form-control" type="text" id="zip" name="zip" disabled><div><label for="zip">ZIP Code:</label></div></div><div class="fcp-state-field-wrap fcp-country-field-wrap-admin"><select class="fcp-form-control" name="country" id="country" disabled></select><div><label for="country">Country:</label></div></div></div></div>`;
        const CHECKBOX = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR} <label class="fcp-label-admin">Untitled</label> <ul class="fcp-checkbox-wrap-admin"><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[0]}><input type="checkbox" value="option 1" name="" id="option-1" disabled><label for="option-1">Option 1</label></li><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[1]}><input type="checkbox" value="option 2" name="" id="option-2" disabled><label for="option-2">Option 2</label></li><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[2]}><input type="checkbox" value="option 3" name="" id="option-3" disabled><label for="option-3">Option 3</label></li></ul></div>`;
        const NAME = `<div class="fcp-single-field-wrap fcp-name-field-specimen" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<label class="fcp-label-admin">Name</label><div class="fcp-name-fields-wrap"><input class="fcp-form-control fcp-type-firstn-ad" type="text" disabled placeholder="First name"><input class="fcp-form-control fcp-type-lastn-ad" type="text" disabled placeholder="Last name"></div></div>`;
        const TEXTAREA = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id} ><div>${MINI_SETTINGS_BAR}<label class='fcp-label-admin'>Paragraph</label></div><textarea name="paragraph" id="paragraph" cols="65" rows="15" disabled></textarea></div>`
        if (field_name === "text") {

            data = {
                field_type: field_name,
                settings: {
                    placeholder: '',
                    label: 'Untitled',
                    required: false
                },
                fieldID: fcp_field_id
            }
            all_fields.push(data)

            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">Untitled</label></div><input class='fcp-form-control fcp-type-text-ad' type="${field_name}" disabled></div>`);
        }else if (field_name === "number") {

            data = {
                field_type: field_name,
                settings: {
                    placeholder: '',
                    label: 'Untitled',
                    required: false,
                    min_val: "",
                    max_val: ""
                },
                fieldID: fcp_field_id
            }
            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">Untitled</label></div><input class='fcp-form-control fcp-type-number-ad' type="${field_name}" disabled></div>`);

            all_fields.push(data)
        } else if (field_name === "email") {

            data = {
                field_type: field_name,
                settings: {
                    placeholder: '',
                    label: 'Email',
                    required: false
                },
                fieldID: fcp_field_id
            }
            all_fields.push(data)
            
            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">Email</label></div><input class='fcp-form-control fcp-type-email-ad' type="${field_name}" disabled></div>`);

        } else if (field_name === "name") {

            data = {
                field_type: field_name,
                settings: {
                    label: 'Name',
                    required: false,
                    firstname : true,
                    lastname  : true
                },
                fieldID: fcp_field_id
            }

            all_fields.push(data)

            $('.fcp-form-fields-wrapper').append(NAME)

        } else if (field_name === "address") {

            data = {
                field_type: field_name,
                settings: {
                    label: 'Address',
                    required: false,
                    street_address : true,
                    address_line_2 : true,
                    city           : true,
                    state          : true,
                    zip_code       : true,
                    country        : true,
                },
                fieldID: fcp_field_id
            }

            all_fields.push(data)

            $('.fcp-form-fields-wrapper').append(ADDRESS)
            
        } else if (field_name === "checkbox") {

            data = {
                    field_type: field_name,
                    settings:{label : "Untitled"},
                    options: [
                        {
                            option_id: default_checkbox_id[0],
                            value: "Option 1",
                        },
                        {
                            option_id: default_checkbox_id[1],
                            value: "Option 2",
                        },
                        {
                            option_id: default_checkbox_id[2],
                            value: "Option 3",
                        },
                    ],
                    fieldID: fcp_field_id,
                };

                all_fields.push(data)
            $('.fcp-form-fields-wrapper').append(CHECKBOX);
        } else if (field_name === "password") {

            data = {
                field_type: field_name,
                settings: {
                    placeholder: '',
                    label: 'Password',
                },
                fieldID: fcp_field_id
            }

            all_fields.push(data)
            
            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">Password</label></div><input class='fcp-form-control fcp-password-admin' type="${field_name}" disabled></div>`);
        } else if (field_name === "textarea") {

            data = {
                field_type: field_name,
                settings: {
                    label: 'Paragraph',
                    required: false,
                },
                fieldID: fcp_field_id
            }
            all_fields.push(data)

            $('.fcp-form-fields-wrapper').append(TEXTAREA);
        }
    });
}

export default fcp_field_appender_admin;


