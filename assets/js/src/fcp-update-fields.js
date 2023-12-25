const $ = jQuery;
function fcp_update_specimen_fields_with_settings_and_create_json() {

    var field = "";
    var setting_field_type = ""
    var field_id = ""
    var field_id_type_and_settings = [];

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

        if (setting_field_type === "text") {
            var text_field_data = {
                field_type: setting_field_type,
                settings: {
                    placeholder: placeholder_val,
                    label: label_val,
                    required: req
                },
                fieldID: field_id
            }
            
        var existing_index = field_id_type_and_settings.findIndex(field => field.fieldID === field_id);

        if (existing_index !== -1) {
            
            field_id_type_and_settings[existing_index] = text_field_data;
        } else {
            field_id_type_and_settings.push(text_field_data);
        }
        field.find("label").text(text_field_data.settings.label);
        field.find("input").attr("placeholder", text_field_data.settings.placeholder);
        $('.fcp-placeholder-val-admin').val(text_field_data.settings.placeholder);
        $('.fcp-label-val-admin').val(text_field_data.settings.label)
        if(text_field_data.settings.req === true){

            field.find('.fcp-req-val-admin').prop('checked', true);
        }else{
            field.find('.fcp-req-val-admin').prop('checked', false);
        }
        } else if (setting_field_type === "number") {
            
        } else if (setting_field_type === "email") {
            
        } else if (setting_field_type === "name") {

        } else if (setting_field_type === "address") {

        } else if (setting_field_type === "checkbox") {

        } else if (setting_field_type === "password") {

        } else if (setting_field_type === "textarea") {

        }

    })

    $(document).on('click', '.fcp-field-delete-icon', function () {
        var deleted_field_id = $(this).closest('.fcp-single-field-wrap').data('id');

        var index_to_remove = field_id_type_and_settings.findIndex(field => field.fieldID === deleted_field_id);

        if (index_to_remove !== -1) {
            field_id_type_and_settings.splice(index_to_remove, 1);
        }
        $(this).closest('.fcp-single-field-wrap').remove();
    });

}

export default fcp_update_specimen_fields_with_settings_and_create_json;