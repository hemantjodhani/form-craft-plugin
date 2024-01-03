import all_fields from "./fcp-global-variables";

function fcp_get_data_from_object(field_id) {
    
    const found_field = all_fields.find(field => field.fieldID === field_id);

    if (found_field) {
        return found_field;
    } else {
        return null;
    }
}

export default fcp_get_data_from_object;