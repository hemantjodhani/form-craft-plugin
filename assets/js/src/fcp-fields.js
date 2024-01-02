const $ = jQuery;
import all_fields from "./fcp-global-variables";

function fcp_field_appender_admin() {
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
        var fcp_field_id = fcp_field_id_generator()
        var field_name = $(this).attr('data-input');
        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');
        const MINI_SETTINGS_BAR = `<div class="fcp-mini-setting-bar" data-settings=${field_name}><img class="fcp-field-drag-indicator" src="${PLUGIN_PATH}/assets/icons/drag_indicator.svg"><img class="fcp-field-delete-icon" src="${PLUGIN_PATH}assets/icons/icons8-delete.svg"><a href="#first-popup" class="fcp-popup-icon"><img class="fcp-field-settings-icon" src="${PLUGIN_PATH}assets/icons/icons8-settings.svg"></a></div>`
        const ADDRESS = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<input class="fcp-form-control" type="text" id="street" name="street" disabled><div><label for="street">Street Address</label></div><input type="text" class="fcp-form-control" id="street" name="address-line-2" disabled><div><label for="address-line-2">Address Line 2</label></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap"><input class="fcp-form-control" type="text" id="city" name="city" disabled><div><label for="city">City:</label></div></div><div class="fcp-state-field-wrap"><input class="fcp-form-control" type="text" id="state" name="state" disabled><div><label for="state">State:</label></div></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap"><input class="fcp-form-control" type="text" id="zip" name="zip" disabled><div><label for="zip">ZIP Code:</label></div></div><div class="fcp-state-field-wrap"><select class="fcp-form-control" name="country" id="country" disabled></select><div><label for="country">Country:</label></div></div></div></div>`;
        const CHECKBOX = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<ul><li><input type="checkbox" value="option 1" name="" id="option-1" disabled><label for="option-1">Option 1</label></li><li><input type="checkbox" value="option 2" name="" id="option-2" disabled><label for="option-2">Option 2</label></li><li><input type="checkbox" value="option 3" name="" id="option-3" disabled><label for="option-3">Option 3</label></li></ul></div>`
        const NAME = `<div class="fcp-single-field-wrap fcp-name-field-specimen" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div class="fcp-name-fields-wrap"><input class="fcp-form-control" type="text" disabled placeholder="First name"><input class="fcp-form-control" type="text" disabled placeholder="Last name"></div></div>`;
        const TEXTAREA = `<div class="fcp-single-field-wrap" data-id=${fcp_field_id} ><div>${MINI_SETTINGS_BAR}<label for="paragraph">Paragraph</label></div><textarea name="paragraph" id="paragraph" cols="65" rows="15" disabled></textarea></div>`
        if (field_name === "name") {
            var data = {
                field_type: field_name,
                settings: {
                    placeholder: '',
                    label: '',
                    required: false
                },
                fieldID: fcp_field_id
            }
            all_fields 
            $('.fcp-form-fields-wrapper').append(NAME);

        } else if (field_name === "address") {
            
        } else if (field_name === "checkbox") {
            // $('.fcp-form-fields-wrapper').append(CHECKBOX);
        } else if (field_name === "textarea") {
            // $('.fcp-form-fields-wrapper').append(TEXTAREA);
        }
        else if (field_name === "email") {
            // $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for="paragraph">Email</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
        else if (field_name === "text") {
            // $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for="paragraph">Email</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
        else if (field_name === "email") {
            // $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for="paragraph">Email</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
        else {
            // $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${fcp_field_id} >${MINI_SETTINGS_BAR}<div><label for="paragraph">Untitled</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
    });
}

export default fcp_field_appender_admin;