/*let userArray=[];
let emailArray=[];
let passwordArray=[];
let phoneArray=[];
let addressArray=[];*/

/*const baseApi = "https://sheetdb.io/api/v1/8o4oft8zssb8k";

const fetchUser = async () => {
  const result = await axios.get(baseApi);
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

const fetchUserBy = async (search) => {
  const result = await axios.get(`${baseApi}/search?` + search);
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

const postUser = async (user) => {
  return await axios.post(`${baseApi}?sheet=user`, user);
};

const removeClass = (element, className) => {
    element.classList.remove(className);
  };
  
  const addClass = (element, className) => {
    element.classList.add(className);
  };    
*/

let loginBox = document.getElementById("login");
let regBox = document.getElementById("register");
let forgetBox = document.getElementById("forgot");


let loginTab = document.getElementById("lt");
let regTab = document.getElementById("rt");




function register(){
    event.preventDefault();

    let email = document.getElementById("re").value;
    let password = document.getElementById("rp").value;
    let passwordRetype = document.getElementById("rrp").value;
    let username = document.getElementById("un").value; 
    let address = document.getElementById("address").value; 
    let phone = document.getElementById("phone").value;
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
        userArray.push(username);
        emailArray.push(email);
        passwordArray.push(password);
        phoneArray.push(phone);
        addressArray.push(address);
        
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

    let email = document.getElementById("se").value;
    let password = document.getElementById("sp").value;

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
    else {
        alert(email + " yor are login Now \n welcome to our website.");

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

console.log(userArray);

