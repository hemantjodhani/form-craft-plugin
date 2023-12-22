const $ = jQuery;
function fcp_update_specimen_fields_with_settings(){
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
    
    $(document).on('submit' , '.fcp--field-settings--form' , function (e){
        e.preventDefault();
        var req = false
        if($('.fcp-req-val-admin').prop('checked') == true){
            req = true
        }
        var placeholder_val = $('.fcp-placeholder-val-admin').val();
        var label_val = $('.fcp-label-val-admin').val();               
        
        if (setting_field_type === "text") {
            var text_field_data = {
                field_type: setting_field_type,
                settings: [Placeholder = placeholder_val , Label = label_val , Required = req],
                fieldID: field_id

            }
            
            field_id_type_and_settings.push(text_field_data)
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
}

export default fcp_update_specimen_fields_with_settings;