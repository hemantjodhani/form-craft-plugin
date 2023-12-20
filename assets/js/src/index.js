import fcp_field_appender_admin from "./fcp-fields";
import fcp_field_settings_handler from "./fcp-settings";
jQuery(document).ready(function ($) {
    fcp_field_appender_admin()
    
    $( ".fcp-form-fields-wrapper" ).sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".fcp-form-fields-wrapper"
    })

    fcp_field_settings_handler();
    
    $.magnificPopup.open({
        items: {
            src: '#first-popup'
        },
        type: 'inline',
        closeBtnInside: true
    })
    

});