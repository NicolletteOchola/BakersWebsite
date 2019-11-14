$(document).ready(function(){

    $('#send').click(function(e){
        e.preventDefault();
        var Name = $('#username').val();
        var Name = $('#username').val();
        var Email = $('#email').val();
        var Message = $('#message').val();
        var number = $('#number').val();
        if (Name == '' || Name == '' || Email == ''|| Message == '' || number == '');
        alert("Dear " + Name + ", we have received your message. Thank you for reaching out to us.")
    });

})