function verification_login(){
    let mail = document.forms["login_page"]["mail_login"].value;
    let password = document.forms["login_page"]["password_login"].value;

    let passwordfor_login = /[a-zA-Z0-9._-]/;

    if (mail == "" || password == ""){
        alert("Fill in all the fields");
        return false;
    }

    if (!password.match(passwordfor_login)){
        alert("Wrong Format!");
        return false;
    }

    else{
        
        return false;
    }
    

}

function verification_register(){
    let mail_1 = document.forms["registration_page"]["mail_register"].value;
    let password_1 = document.forms["registration_page"]["password_register"].value;
    let name_1 = document.forms["registration_page"]["name"].value;
    let last_name_1 = document.forms["registration_page"]["last_name"].value;


    let passwordfor_register = /[a-zA-Z0-9._-]/;

    if (mail_1 == "" || password_1 == "" || name_1 == "" || last_name_1 == ""){
        alert("Fill in all the fields");
        return false;
    }

    if (!password.match(passwordfor_register)){
        alert("Wrong Format!");
        return false;
    }

    else{
        
        return false;
    }
    

}
