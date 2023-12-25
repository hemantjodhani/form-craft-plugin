const $ = jQuery;
function fcp_update_specimen_fields_with_settings_and_create_json() {

    function get_data_by_field_id(field_id) {
        var matching_field = field_id_type_and_settings.find(field => field.fieldID === field_id);

        return { matching_field };
    }

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
            var data = get_data_by_field_id(field_id);
            if (!data.matching_field) {
                field_id_type_and_settings.push(text_field_data);
                field.find("label").text(data.matching_field.settings.label);
            } else {
                // data.matching_field.settings.placeholder = placeholder_val;
                // data.matching_field.settings.label = label_val;
                // data.matching_field.settings.required = req;
                field.find("label").text(data.matching_field.settings.label);
            }
            console.log(field_id_type_and_settings)
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
        // console.log(field_id_type_and_settings)
        $(this).closest('.fcp-single-field-wrap').remove();
    });

}

export default fcp_update_specimen_fields_with_settings_and_create_json;