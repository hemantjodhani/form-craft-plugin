import fcp_field_appender_admin from "./fcp-fields";
import fcp_field_settings_handler from "./fcp-settings";

jQuery(document).ready(function ($) {
    fcp_field_appender_admin()
    fcp_field_settings_handler();    

    $( ".fcp-form-fields-wrapper" ).sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".fcp-form-fields-wrapper"
    })
});