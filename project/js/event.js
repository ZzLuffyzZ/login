loginButtonElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  //validate
  for (const user of listUser) {
    if (user.user === username && user.pass === password) {
      if (user.role === "hotel") {
        addClass(loginPageElement, "d-none");
        removeClass(); // hotel page
      } else if (user.role === "user") {
        addClass(loginPageElement, "d-none");
        removeClass(); //user page
      }
    } else {
      alert ("Invalid username and/or password")
      break;
    }
  }
});

//check naming  



signupButtonElement.addEventListener("click", () => {
  redirectSignInToSignupScreen();
});

signupButtonSubmitElement.addEventListener("click", async() => {
  const resUsername = resUsernameElement.value;
  const resEmail = resEmailElement.value;
  const resPhone = resPhoneElement.value;
  const resPassword = resPasswordElement.value;
  const resRePassword = resRePasswordElement.value; /// need validate
  //validate
  //after validate success 

  /*const newUser = {
    id: listUser.length + 1,
    email: resEmail,
    user: resUsername,
    pass: resPassword,
    address: undefined,
    phone: resPhone,
    role: "user",
  };

  listUser.push(newUser);

  redirectSignupToSignInScreen();
});*/


  let reg = await notOK();
  if(reg){
    const newUser = {
      id: listUser.length + 1,
      email: resEmail,
      user: resUsername,
      pass: resPassword,
      address: undefined,
      phone: resPhone,
      role: "user",
    };
  
    listUser.push(newUser);
    alert("Thanks for registration. \nTry to login Now")
  
    redirectSignupToSignInScreen();
  ;
      }
  }
)