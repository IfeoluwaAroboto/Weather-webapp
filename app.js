function store(e){
  var name2 = document.getElementById('name')
  var password = document.getElementById('pw')
   var mail2 = document.getElementById('mail')
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
    var name = document.getElementById('name').value;
var pw = document.getElementById('pw').value;
var mail = document.getElementById('mail').value;

 var user = {email: mail,
  username: name,
  password: pw,}
var json =  JSON.stringify(user);
localStorage.setItem(name, json);
// localStorage.setItem(name, json);
allUsers = JSON.parse(localStorage.getItem('users'))
if(!allUsers){
  allUsers = []
}
allUsers.push(user)
localStorage.setItem('users', JSON.stringify(allUsers))

    setTimeout(function() {
      window.location = "index.html"
    }, 3000); 
}

}
 
 
const date = document.querySelector(".date")
date.innerHTML =  new Date ().toLocaleDateString() 

function check(){
  var user = document.getElementById('user').value
    var userPw = document.getElementById('userPw').value
    let existingUser = Object.values(JSON.parse(localStorage.getItem('users')))

let userDetails = existingUser.find(u => u.username == user && u.password == userPw)
    localStorage.setItem("activeUser", userDetails);

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
 
const nameing = document.querySelector(".nameing")
const get =  JSON.stringify(localStorage.getItem("activeUser"))
nameing.innerHTML = "Welcome to Waether Check" 

var input = document.querySelector('.input')
var btn = document.querySelector('.btn');
var city = document.querySelector('.location')
var degree = document.querySelector('.degree')
var temp = document.querySelector('.temp')
var main = document.querySelector('#main')
var wind = document.querySelector('wind')
apikey = "66a50a1215fdbe9bba268368d1acb534"
fetch('https://api.openweathermap.org/data/2.5/weather?q='+'Lagos'+'&appid='+apikey)
.then(res => res.json())

.then(data => {

    var nameval = data['name']
    var descrip = data['weather']['0']['main']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']


    city.innerHTML=`${nameval}`
    temp.innerHTML = `Temperature: <span>${ (tempature)} °</span>`
    degree.innerHTML = `Sky: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`})
btn.addEventListener('click', function(e){  
  event.preventDefault()
 
          fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey)
          .then(res => res.json())
      
          .then(data => {
 
              var nameval = data['name']
              var descrip = data['weather']['0']['main']
              var tempature = data['main']['temp']
              var wndspd = data['wind']['speed']
  

              city.innerHTML=`${nameval}`
              temp.innerHTML = `Temperature: <span>${ (tempature)} °</span>`
              degree.innerHTML = `Sky: <span>${descrip}<span>`
              wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
  
          })
          if(input.value.length == 0){
            alert("You didn't select a city")
          }
          else{
   }
      })
    