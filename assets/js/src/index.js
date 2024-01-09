import fcp_field_appender_admin from "./fcp-fields";
import fcp_field_settings_handler from "./fcp-settings";
import fcp_update_specimen_fields_with_settings_and_create_json from "./fcp-update-fields";
import fcp_checkbox_events_handler from "./checkbox-handler"
jQuery(document).ready(function ($) {
    fcp_field_appender_admin()
    fcp_field_settings_handler();
    $( ".fcp-form-fields-wrapper" ).sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".fcp-form-fields-wrapper"
    })

    fcp_update_specimen_fields_with_settings_and_create_json()
    fcp_checkbox_events_handler()
});