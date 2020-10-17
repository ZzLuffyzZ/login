let listuser = [
    {   id:1,
        emailuser:"username1@gmail.com",
        user: "username1",
        pass: "123tnvn",
        addressuser: "gfjhsafkjsd",
        userphone: "0123456789",
        role: "user"},
    {   id:2,
        emailuser:"username2@gmail.com",
        usere: "username2",
        pass: "123tnvn1",
        addressuser: "gfjhsafkjsd",
        userphone: "0123456786",
        role:"user"},
    {   id:3,
        emailuseremail:" username3@gmail.com",
        user: "username3",
        pass: "123tnvn2",
        addressuser: "gfjhsafkjsd",
        userphone: "0123456787",
        role:"user" },
    {   id:4,
        emailuseremail:" username4@gmail.com",
        user: "username4",
        pass: "123tnvn3",
        addressuser: "gfjhsafkjsd",
        userphone: "0123456788",
        role:"user"},
]

let loginBox = document.getElementById("login");
let regBox = document.getElementById("register");
let forgetBox = document.getElementById("forgot");


let loginTab = document.getElementById("lt");
let regTab = document.getElementById("rt");


let email = document.getElementById("re").value;
    let password = document.getElementById("rp").value;
    let passwordRetype = document.getElementById("rrp").value;
    let username = document.getElementById("un").value; 
    let address = document.getElementById("address").value; 
    let phone = document.getElementById("phone").value;

function register(){
    event.preventDefault();
    let inputuser = {id:"",
                     username:"",
                     password:"",
                     phone:"",
                     role:"user",
                    }
    
    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if (username == ""){
        alert("User name required.");
        return ;
    }
    else if (phone == ""){
        alert("Phone required.");
        return ;
    }
    else for( let i = 0; i< userArray.length; i++){
        if( userArray[i] = username){
            alert("Account already exists");
            return ;
        }
    }
    
    if(emailArray.indexOf(email) == -1){
        listuser.push(inputuser);
        
        
        alert(email + "  Thanks for registration. \nTry to login Now");
        
        document.getElementById("un").value="";
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        document.getElementById("phone").value="";
        document.getElementById("address").value="";
        
        
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    event.preventDefault();

    let i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else if( role = "user"){
        alert( "helo user")
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
    }
    else if( role = "hotel"){
        alert("helo hotel");
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}
