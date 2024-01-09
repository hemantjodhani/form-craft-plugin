const $ = jQuery;
import all_fields from "./fcp-global-variables";
import fcp_get_data_from_object from './fcp-data-provider'
function fcp_update_specimen_fields_with_settings_and_create_json() {
    var field = "";
    var setting_field_type = ""
    var field_id = ""
    var data = {}
    $(document).on('click', '.fcp-popup-icon', function () {
        setting_field_type = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');
        field = $(this).closest('.fcp-single-field-wrap');
        var html_of_field = field.prop('outerHTML');
        field_id = $(html_of_field).data('id');

    });

    $(document).on('submit', '.fcp--field-settings--form', function (e) {
        e.preventDefault();
        var req = false
        if ($('.fcp-req-val-admin').prop('checked') == true) {
            req = true
        }
        var placeholder_val = $('.fcp-placeholder-val-admin').val();
        var label_val = $('.fcp-label-val-admin').val();
        var existing_index = all_fields.findIndex(field => field.fieldID === field_id);

        if (setting_field_type === "text") {

            data = {
                field_type: setting_field_type,
                settings: {
                    placeholder: placeholder_val,
                    label: label_val,
                    required: req
                },
                fieldID: field_id
            }
            
            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }

            field.find(".fcp-label-admin").text(all_fields[existing_index].settings.label);
            field.find(".fcp-type-text-ad").attr("placeholder", all_fields[existing_index].settings.placeholder);
            
        } else if (setting_field_type === "number") {

            var minimum = $('.fcp-min-num-val-admin').val()
            var maximum = $('.fcp-max-num-val-admin').val()
            data = {
                field_type: setting_field_type,
                settings: {
                    placeholder: placeholder_val,
                    label: label_val,
                    required: req,
                    min_val: minimum,
                    max_val: maximum
                },
                fieldID: field_id
            }
            
            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }
            field.find(".fcp-label-admin").text(all_fields[existing_index].settings.label);
            field.find(".fcp-type-number-ad").attr("placeholder", all_fields[existing_index].settings.placeholder);

        } else if (setting_field_type === "email") {
            
            data = {
                field_type: setting_field_type,
                settings: {
                    placeholder: placeholder_val,
                    label: label_val,
                    required: req
                },
                fieldID: field_id
            }

            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }

            field.find(".fcp-label-admin").text(all_fields[existing_index].settings.label);
            field.find(".fcp-type-email-ad").attr("placeholder", all_fields[existing_index].settings.placeholder);

        } else if (setting_field_type === "name") {

            var first_name = $(".fcp-firstn-req-val-admin").prop("checked")
            var lastn = $(".fcp-lastn-req-val-admin").prop("checked")

            data = {
                field_type: setting_field_type,
                settings: {
                    label: label_val,
                    required: req,
                    firstname : first_name,
                    lastname  : lastn,
                },
                fieldID: field_id
            }

            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }

            field.find(".fcp-label-admin").text(all_fields[existing_index].settings.label)

            if (all_fields[existing_index].settings.firstname == false) {
                field.find('.fcp-type-firstn-ad').hide()
            }else{
                field.find('.fcp-type-firstn-ad').show()
            }
            if(all_fields[existing_index].settings.lastname == false){
                field.find('.fcp-type-lastn-ad').hide();
            }else{
                $('.fcp-type-lastn-ad').show();
            }
            if(all_fields[existing_index].settings.lastname == false && all_fields[existing_index].settings.firstname == false){
                if (existing_index !== -1) {
                    all_fields.splice(existing_index, 1);
                }
               field.remove();        
            }

        } else if (setting_field_type === "address") {
            var is_st_ad = $('.fcp-stad-val-admin').prop("checked");
            var is_st_ad_2 = $('.fcp-adli-val-admin').prop("checked");
            var is_city = $('.fcp-city-val-admin').prop("checked");
            var is_state = $('.fcp-state-val-admin').prop("checked");
            var is_zip_code = $(".fcp-zpc-val-admin").prop("checked");
            var is_country = $(".fcp-country-val-admin").prop("checked");

            data = {
                field_type: setting_field_type,
                settings: {
                    label: label_val,
                    required: req,
                    street_address : is_st_ad,
                    address_line_2 : is_st_ad_2,
                    city           : is_city,
                    state          : is_state,
                    zip_code       : is_zip_code,
                    country        : is_country,
                },
                fieldID: field_id
            }
            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }
            var settings =  all_fields[existing_index].settings
            field.find('.fcp-adress-label-admin').text(settings.label)
            if(settings.street_address === false){
                field.find('.street-address-admin-wrap').hide()
            }else{
                field.find('.street-address-admin-wrap').show()
            }

            if(settings.address_line_2 === false){
                field.find('.adlin-two-admin-wrap').hide()
            }else{
                field.find('.adlin-two-admin-wrap').show()                
            }

            if(settings.city === false){
                field.find(".fcp-city-field-wrap-admin").hide()
            }else{
                field.find(".fcp-city-field-wrap-admin").show()
            }

            if(settings.state === false){
                field.find(".fcp-state-field-wrap-admin").hide()
            }else{
                field.find(".fcp-state-field-wrap-admin").show()
            }
            
            if(settings.zip_code === false){
                field.find(".fcp-zip-code-field-wrap-admin").hide()
            }else{
                field.find(".fcp-zip-code-field-wrap-admin").show()
            }

            if(settings.country === false){
                field.find(".fcp-country-field-wrap-admin").hide()
            }else{
                field.find(".fcp-country-field-wrap-admin").show()
            }

        } else if (setting_field_type === "checkbox") {


            if (existing_index !== -1) {
                all_fields[existing_index].fieldID = field_id;
                all_fields[existing_index].field_type = setting_field_type;
                all_fields[existing_index].settings.label = label_val
            }

            field.find('.fcp-label-admin').text(all_fields[existing_index].settings.label)
            var data_of_the_field = fcp_get_data_from_object(all_fields[existing_index].fieldID)
            var options = data_of_the_field.options
			field.find('.fcp-checkbox-wrap-admin').html("")
            
			options.forEach((option) => {
				field.find('.fcp-checkbox-wrap-admin').append(`<li class="fcp-single-checkbox-admin" data-checkbox="${option.option_id}"><input type="checkbox" value="" name="" id="option-1" disabled=""><label for="option-1">${option.value}</label></li>`)
			});

        } else if (setting_field_type === "password") {

            data = {
                field_type: setting_field_type,
                settings: {
                    placeholder: placeholder_val,
                    label: label_val,
                },
                fieldID: field_id
            }

            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }
            field.find('.fcp-label-admin').text(all_fields[existing_index].settings.label)
            field.find('.fcp-password-admin').attr("placeholder", all_fields[existing_index].settings.placeholder);

        } else if (setting_field_type === "textarea") {

            data = {
                field_type: setting_field_type,
                settings: {
                    label: label_val,
                    required: req,
                },
                fieldID: field_id
            }

            if (existing_index !== -1) {
                all_fields[existing_index] = data;
            }

            field.find('.fcp-label-admin').text(all_fields[existing_index].settings.label)
        }

        jQuery.magnificPopup.close()

    })

    $(document).on('click', '.fcp-field-delete-icon', function () {
        var deleted_field_id = $(this).closest('.fcp-single-field-wrap').data('id');

        var index_to_remove = all_fields.findIndex(field => field.fieldID === deleted_field_id);

        if (index_to_remove !== -1) {
            all_fields.splice(index_to_remove, 1);
        }
        $(this).closest('.fcp-single-field-wrap').remove();
    });

}
export default fcp_update_specimen_fields_with_settings_and_create_json;