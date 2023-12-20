const $ = jQuery;

function fcp_field_appender_admin() {
    
    // console.log(MINI_SETTINGS_BAR)
    // $('.fcp-single-field-wrap').html(MINI_SETTINGS_BAR);
    // $('.fcp-single-field-wrap').append(MINI_SETTINGS_BAR);
    $(document).on('click', '.fcp-single-widget', function () {
        var field_name = $(this).attr('data-input');
        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');
        const MINI_SETTINGS_BAR = `<div class="fcp-mini-setting-bar" data-settings=${field_name}><img class="fcp-field-drag-indicator" src="${ PLUGIN_PATH }/assets/icons/drag_indicator.svg"><img class="fcp-field-delete-icon" src="${ PLUGIN_PATH }assets/icons/icons8-delete.svg"><a href="#first-popup" class="fcp-popup-icon"><img class="fcp-field-settings-icon" src="${ PLUGIN_PATH }assets/icons/icons8-settings.svg"></a></div>`
        const ADDRESS = `<div class="fcp-single-field-wrap">${ MINI_SETTINGS_BAR }<input class="fcp-form-control" type="text" id="street" name="street" disabled><div><label for="street">Street Address</label></div><input type="text" class="fcp-form-control" id="street" name="address-line-2" disabled><div><label for="address-line-2">Address Line 2</label></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap"><input class="fcp-form-control" type="text" id="city" name="city" disabled><div><label for="city">City:</label></div></div><div class="fcp-state-field-wrap"><input class="fcp-form-control" type="text" id="state" name="state" disabled><div><label for="state">State:</label></div></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap"><input class="fcp-form-control" type="text" id="zip" name="zip" disabled><div><label for="zip">ZIP Code:</label></div></div><div class="fcp-state-field-wrap"><select class="fcp-form-control" name="country" id="country" disabled></select><div><label for="country">Country:</label></div></div></div></div>`;
        const CHECKBOX = `<div class="fcp-single-field-wrap">${ MINI_SETTINGS_BAR }<ul><li><input type="checkbox" value="option 1" name="" id="option-1" disabled><label for="option-1">Option 1</label></li><li><input type="checkbox" value="option 2" name="" id="option-2" disabled><label for="option-2">Option 2</label></li><li><input type="checkbox" value="option 3" name="" id="option-3" disabled><label for="option-3">Option 3</label></li></ul></div>`
        const NAME = `<div class="fcp-single-field-wrap fcp-name-field-specimen">${ MINI_SETTINGS_BAR }<div class="fcp-name-fields-wrap"><input class="fcp-form-control" type="text" disabled placeholder="First name"><input class="fcp-form-control" type="text" disabled placeholder="Last name"></div></div>`;
        const TEXTAREA = `<div class="fcp-single-field-wrap"><div>${ MINI_SETTINGS_BAR }<label for="paragraph">Paragraph</label></div><textarea name="paragraph" id="paragraph" cols="65" rows="15" disabled></textarea></div>`    
        if (field_name === "name") {
            $('.fcp-form-fields-wrapper').append(NAME);
        } else if (field_name === "address") {
            $('.fcp-form-fields-wrapper').append(ADDRESS);
        }else if(field_name === "checkbox") {
            $('.fcp-form-fields-wrapper').append(CHECKBOX);
        }else if(field_name === "textarea"){
            $('.fcp-form-fields-wrapper').append(TEXTAREA);
        }
        else if(field_name === "email"){
            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap">${ MINI_SETTINGS_BAR }<div><label for="paragraph">Email</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
         else {
            $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap">${ MINI_SETTINGS_BAR }<div><label for="paragraph">Untitled</label></div><input class='fcp-form-control' type="${field_name}" disabled></div>`);
        }
    });
}

export default fcp_field_appender_admin;