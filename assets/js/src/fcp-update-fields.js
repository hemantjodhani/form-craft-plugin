const $ = jQuery;
import all_fields from "./fcp-global-variables";
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
            data = {
                field_type: field_name,
                settings: {
                    label: label_val,
                    required: req,
                    street_address : true,
                    address_line_2 : true,
                    city           : true,
                    state          : true,
                    zip_code       : true,
                    country        : true,
                },
                fieldID: field_id
            }
            
        } else if (setting_field_type === "checkbox") {

        } else if (setting_field_type === "password") {

        } else if (setting_field_type === "textarea") {

        }

    })

    $(document).on('click', '.fcp-field-delete-icon', function () {
        var deleted_field_id = $(this).closest('.fcp-single-field-wrap').data('id');

        var index_to_remove = all_fields.findIndex(field => field.fieldID === deleted_field_id);

        if (index_to_remove !== -1) {
            all_fields.splice(index_to_remove, 1);
        }
        all_fields = JSON.stringify(all_fields);
        console.log(all_fields)
        $(this).closest('.fcp-single-field-wrap').remove();
    });

}
export default fcp_update_specimen_fields_with_settings_and_create_json;