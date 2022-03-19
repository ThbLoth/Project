function verification_login(){
    let mail = document.forms["login_page"]["mail_login"].value;
    let password = document.forms["login_page"]["password_login"].value;

    if (mail == "" || password == ""){
        alert("Fill in all the fields");
        
    }

    else{
        alert(mail + " " + password)
        
    }
    

}

function verification_register(){
    let mail_1 = document.forms["registration_page"]["mail_register"].value;
    let password_1 = document.forms["registration_page"]["password_register"].value;
    let name_1 = document.forms["registration_page"]["name"].value;
    let last_name_1 = document.forms["registration_page"]["last_name"].value;

    if (mail_1 == "" || password_1 == "" || name_1 == "" || last_name_1 == ""){
        alert("Fill in all the fields");
    }

    else{
        
    }
    

}

/*
var emaillog = document.getElementById("email_log").value;
var passlog = document.getElementById("password_log").value;

var namereg = document.getElementById("name_reg").value;
var lstnamereg = document.getElementById("last_name_reg").value;
var emailreg = document.getElementById("email_reg").value;
var passreg = document.getElementById("password_reg").value;*/