const $ = jQuery;
function fcp_field_settings_handler(){

  
    $(document).on('click' , '.fcp-field-delete-icon' ,function(){
        $(this).closest('.fcp-single-field-wrap').remove();
        // $(this).parent().parent().remove();
    });
    
    $(document).on("click" , '.fcp-popup-icon' ,function(e){

      var setting_for = $(this).closest('.fcp-mini-setting-bar').attr('data-settings');
      e.preventDefault()
      $.magnificPopup.open({
        items: {
            src: '#first-popup'
        },
        type: 'inline',
        closeBtnInside: true
      });

    })

}

export default fcp_field_settings_handler