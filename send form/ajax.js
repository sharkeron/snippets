// ajax send mail for form on page
$(FORM).submit(function(e) { //Set event for for FORM selector
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
        type: "POST", // Method of send
        url: "send.php", //path to send file
        data: form_data,
        success: function() {
            // this code done after complete
        },
        error: function() {
            console.log(form_data);
            // this code done after error
        }
    });
});