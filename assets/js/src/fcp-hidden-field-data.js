var $ = jQuery
import all_fields from "./fcp-global-variables"

function fcp_hidden_field_data_updater(){
    var data_to_set = all_fields
    var data_to_set = JSON.stringify(data_to_set)
    $('.fcp-json-hidden-field').val(data_to_set)
    console.log(all_fields)
}

export default fcp_hidden_field_data_updater