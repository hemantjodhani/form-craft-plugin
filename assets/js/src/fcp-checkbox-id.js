function fcp_checkbox_id_generator() {
    return Math.random().toString(36).substring(2) +
      (new Date()).getTime().toString(36);
};

export default fcp_checkbox_id_generator