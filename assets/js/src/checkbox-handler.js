var $ = jQuery;
import all_fields from "./fcp-global-variables";
import fcp_checkbox_id_generator from "./fcp-checkbox-id";
import fcp_hidden_field_data_updater from './fcp-hidden-field-data'
function fcp_checkbox_events_handler() {

    var checkbox_id = ""
    var field_id = ""
    $(document).on('click', '.fcp-popup-icon', function () {
        field_id = $(this).closest('.fcp-single-field-wrap').data('id') 
    })

    $(document).on("keyup", ".fcp-checkbox--val--admin", function(){
        checkbox_id = $(this).parent().data("id")
        var checkbox_value = $(this).val()
        var existing_index = all_fields.findIndex(field => field.fieldID === field_id);
        var existing_box = all_fields[existing_index].options.findIndex(field => field.option_id === checkbox_id)
        all_fields[existing_index].options[existing_box].value = checkbox_value
        fcp_hidden_field_data_updater()
    });

    $(".fcp-add-more-checkbox-btn").click(function(e){      
        e.preventDefault()

        var new_checkbox_id = fcp_checkbox_id_generator();

        var data = {
            option_id: new_checkbox_id,
            value: "",
        }

        var existing_index = all_fields.findIndex(field => field.fieldID === field_id);

        if (existing_index !== -1) {
            all_fields[existing_index].options.push(data);

            var new_option_index = all_fields[existing_index].options.length - 1;

            $('.fcp-checkboxes-admin').append(`<li data-id=${all_fields[existing_index].options[new_option_index].option_id}><input type="text" value="${all_fields[existing_index].options[new_option_index].value}" class="fcp-checkbox--val--admin"> <span>X</span></li>`);
            fcp_hidden_field_data_updater()
        }    
    });

    $(document).on("click" , ".fcp-checkbox-remove-btn" , function(){
       var remove_checkbox_id = $(this).parent().data("id")
       var existing_index = all_fields.findIndex(field => field.fieldID === field_id);

       var checkbox_to_remove = all_fields[existing_index].options.findIndex(field => field.option_id === remove_checkbox_id);


       if (checkbox_to_remove !== -1) {
           all_fields[existing_index].options.splice(checkbox_to_remove, 1);
       } 

       $(this).parent().remove()

       fcp_hidden_field_data_updater()
    })
}

export default fcp_checkbox_events_handler;