const $ = jQuery;
import all_fields from "./fcp-global-variables";

function fcp_json_to_html_convertor(){
  var data_from_php = $(".fcp-json-hidden-field").val();
  if(data_from_php !== ""){

    var obj = JSON.parse(data_from_php);

    obj[0].forEach((data) => {
        all_fields.push(data)
    });

    
    all_fields.forEach((data) => {
        const PLUGIN_PATH = $('.fcp-form-fields-wrapper').attr('data-path');
        const MINI_SETTINGS_BAR = `<div class="fcp-mini-setting-bar" data-settings=${data.field_type}><img class="fcp-field-drag-indicator" src="${PLUGIN_PATH}/assets/icons/drag_indicator.svg"><img class="fcp-field-delete-icon" src="${PLUGIN_PATH}assets/icons/icons8-delete.svg"><a href="#first-popup" class="fcp-popup-icon"><img class="fcp-field-settings-icon" src="${PLUGIN_PATH}assets/icons/icons8-settings.svg"></a></div>`
        // const ADDRESS = `<div class="fcp-single-field-wrap" data-id=${data.field_type}>${MINI_SETTINGS_BAR}<label class="fcp-label-admin fcp-adress-label-admin">Address</label><div class="street-address-admin-wrap"><input class="fcp-form-control" type="text" id="street" name="street" disabled><div><label for="street">Street Address</label></div></div><div class="adlin-two-admin-wrap"><input type="text" class="fcp-form-control" id="street" name="address-line-2" disabled><div><label for="address-line-2">Address Line 2</label></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-city-field-wrap-admin"><input class="fcp-form-control" type="text" id="city" name="city" disabled><div><label for="city">City:</label></div></div><div class="fcp-state-field-wrap-admin"><input class="fcp-form-control" type="text" id="state" name="state" disabled><div><label for="state">State:</label></div></div></div><div class="fcp-city-state-spicimen-wrap"><div class="fcp-zip-code-field-wrap-admin"><input class="fcp-form-control" type="text" id="zip" name="zip" disabled><div><label for="zip">ZIP Code:</label></div></div><div class="fcp-state-field-wrap fcp-country-field-wrap-admin"><select class="fcp-form-control" name="country" id="country" disabled></select><div><label for="country">Country:</label></div></div></div></div>`;
        // const CHECKBOX = `<div class="fcp-single-field-wrap" data-id=${data.field_type} >${MINI_SETTINGS_BAR} <label class="fcp-label-admin">Untitled</label> <ul class="fcp-checkbox-wrap-admin"><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[0]}><input type="checkbox" value="option 1" name="" id="option-1" disabled><label for="option-1">Option 1</label></li><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[1]}><input type="checkbox" value="option 2" name="" id="option-2" disabled><label for="option-2">Option 2</label></li><li class="fcp-single-checkbox-admin" data-checkbox=${default_checkbox_id[2]}><input type="checkbox" value="option 3" name="" id="option-3" disabled><label for="option-3">Option 3</label></li></ul></div>`;
        // const NAME = `<div class="fcp-single-field-wrap fcp-name-field-specimen" data-id=${data.field_type} >${MINI_SETTINGS_BAR}<label class="fcp-label-admin">Name</label><div class="fcp-name-fields-wrap"><input class="fcp-form-control fcp-type-firstn-ad" type="text" disabled placeholder="First name"><input class="fcp-form-control fcp-type-lastn-ad" type="text" disabled placeholder="Last name"></div></div>`;
        // const TEXTAREA = `<div class="fcp-single-field-wrap" data-id=${data.field_type} ><div>${MINI_SETTINGS_BAR}<label class='fcp-label-admin'>Paragraph</label></div><textarea name="paragraph" id="paragraph" cols="65" rows="15" disabled></textarea></div>`
        // $('.fcp-form-fields-wrapper').append(`<div class="fcp-single-field-wrap" data-id=${data.fieldID} >${MINI_SETTINGS_BAR}<div><label class="fcp-label-admin">Untitled</label></div><input class='fcp-form-control fcp-type-text-ad' type="${data.field_type}" disabled></div>`);


      if(){
        
      }
        

    });

  }
}

export default fcp_json_to_html_convertor;
