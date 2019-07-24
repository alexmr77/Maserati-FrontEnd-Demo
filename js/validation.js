$(document).ready(function() {

 $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      firstname: "&nbsp; Please enter your first name",
      lastname: "&nbsp; Please enter your last name",
      password: {
        required: "&nbsp; Please provide a phone number",
        minlength: "&nbsp; Your phone number must be at least 10 digits long"
      },
      email: "&nbsp; Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});