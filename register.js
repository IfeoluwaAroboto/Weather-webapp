function store(e){
  var name = document.getElementById('name').value;
  var pw = document.getElementById('pw').value;
  var mail = document.getElementById('mail').value;
  allUsers = JSON.parse(localStorage.getItem('users'))
  var mail2 = document.getElementById('mail')

   var user = {email: mail,
    username: name,
    password: pw,}
  var json =  JSON.stringify(user);
 
  // localStorage.setItem(name, json);
  if(!allUsers){
    allUsers = []
  }
  allUsers.push(user)
  localStorage.setItem('users', JSON.stringify(allUsers))
       
  setTimeout(function() {
    window.location = "index.html"
  }, 3000); 



    var name2 = document.getElementById('name')
    var password = document.getElementById('pw')

     var pw2 = document.getElementById("pw2");
    if(name2.value.length == 0){
      name2.style.borderColor = "red"
      
  }

  else if(password.value.length == 0){
    password.style.borderColor = "red"  
  } else if(mail2.value.length == 0){
      mail2.style.borderColor = "red"  
  }
  
  else if (pw2.value !== password.value){
      pw2.style.borderColor = "red"  
  }
  else if (name2.value.length == 0 && password.value.length == 0){
      alert('Please fill in your name, email and password');}
    
      else {
      Toastify({
        text: "You can now login",
        className: "info",
        style: {
         width: '300px',
         background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      }}


  const date = document.querySelector(".date")
  date.innerHTML =  new Date ().toLocaleDateString() 
  
  function check(){
    var user = document.getElementById('user').value
      var userPw = document.getElementById('userPw').value
      let existingUser = Object.values(JSON.parse(localStorage.getItem('users')))
  
  let userDetails = existingUser.find(u => u.email == user && u.password == userPw)
  let ActiveUsers = []
ActiveUsers.push(userDetails)
  localStorage.setItem('Activeusers', JSON.stringify(ActiveUsers))
  
      if(userDetails){
          Toastify({
              text: "Welcome to Weather Check",
              className: "info",
              style: {
               width: '300px',
               background: "linear-gradient(to right, #00b09b, #96c93d)",
              }
            }).showToast();
            setTimeout(function() {
              window.location = "index4.html"
            }, 3000);
            
      }else{
          Toastify({
              text: "Login with Correct Details",
              className: "info",
              style: {
               width: '300px',
               background: "linear-gradient(to right, red, red)"
              }
            }).showToast();
                
      }
      
   JSON.stringify(userDetails)
   for(let key in userDetails){
    
   }
  }
   const logOut = () => {
 const names = document.querySelector(".nameing")
    let NonActiveUsers = localStorage.getItem('Activeusers')
    names.innerHTML = NonActiveUsers.name
    NonActiveUsers = localStorage.removeItem('Activeusers')

    setTimeout(function() {
      window.location = "index.html"
    }, 3000); 
   }