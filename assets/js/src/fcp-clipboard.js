function fcp_clipboard_handler(){

    function hide_copied_line(){
        jQuery('.fcp-scc-message').fadeOut();
    }

    jQuery(document).on('click' , '.fcp-shortcode-btn-field-wrap img' , function(){

        var copy_text = jQuery('.fcp-shortcode-view').val();
        navigator.clipboard.writeText(copy_text);
        jQuery('.fcp-scc-message').show();
        setTimeout(hide_copied_line, 5000)

    })

}

export default fcp_clipboard_handler
