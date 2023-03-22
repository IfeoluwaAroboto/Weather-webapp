
let city = document.querySelector('.input'); //input from user.
var nameCity = document.querySelector('.city')
var btn = document.querySelector('.btn')
var day = document.querySelector('.day')
var Wind = document.querySelector('.wind')
var Img = document.querySelector('.img')
var Humidity = document.querySelector('.humidity')

var temprature = document.querySelector('.temprature')
apikey = "66a50a1215fdbe9bba268368d1acb534"
window.addEventListener("load",()=>{
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
          let lon= position.coords.longitude;
          let lat= position.coords.latitude;
          const url= `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${apikey}`;
          

          fetch(url).then((res)=>{
              return res.json();
          }).then((data)=>{
            nameCity.innerHTML = data.name + ' ' + data.sys.country
            day.innerHTML = dayOfWeek()
            Wind.innerHTML = data['weather']['0']['description'];
            temprature.innerHTML = data.main.temp + '°'
            Humidity.innerHTML = data.main.humidity + '°'
          var  iconcode = data['weather']['0']['icon'];
        Img.src =  "http://openweathermap.org/img/w/" + iconcode + ".png"
            console.log(data)
     
            GetInfo()
          })
      })
  }
 
})
let list = () => {
let city2 = document.querySelector('.input');
  var dayOne = document.querySelector('.day-one')
  var dayTwo = document.querySelector('.day-two')
  var dayThree = document.querySelector('.day-three')
  var dayFour = document.querySelector('.day-four')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city2.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
.then(data => { 
   console.log(data)
  dayOne.innerHTML = data['list']['0']['main']['temp']+ '°'
   dayTwo.innerHTML = data['list']['1']['main']['temp']+ '°'
   dayThree.innerHTML = data['list']['2']['main']['temp']+ '°'
   dayFour.innerHTML = data['list']['3']['main']['temp']+ '°'
})
}
let getData = async (city) => {

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
 let response = await fetch(url)
 if(response.status !== 200){
  alert("city not found")
  return
 }
 let weather = await response.json()
 return (weather)
};

  let grid = document.querySelector('.grid')
btn.addEventListener('click', async(e) => {
  e.preventDefault()
  let weather = await getData(city.value)

let weatherUpdate = (data) => {
 nameCity.innerHTML = data.name + ' ' + data.sys.country
 day.innerHTML = dayOfWeek()
 Wind.innerHTML = data['weather']['0']['description'];
 temprature.innerHTML = data.main.temp + '°'
 Humidity.innerHTML = data.main.humidity + '°'
 grid.style.visibility = 'visible'
 list()
 GetInfo()
 GetInfoAf()
 GetInfoAf2()
 GetInfoAf3()
 GetInfoAf4()
 GetInfoAf5()
 GetInfoEv()
 GetInfoEv2()
 GetInfoEv3()
 GetInfoEv4()
 GetInfoEv5() 
 GetInfoNg()
 GetInfoNg2()
 GetInfoNg3()
 GetInfoNg4()
 GetInfoNg5()
 GetMid()
 GetMid2()
 GetMid3()
 GetMid4()
 GetMid5()
 GetInfo3()
 GetInfo4()
 GetInfo5()
 GetInfo6()
}
weatherUpdate(weather)

})
let dayOfWeek = () => {
  return new Date().toLocaleDateString('en-EN', {'weekday': 'long'}) +  ", " + new Date().toLocaleTimeString()
}
var newName = document.querySelector(".input");
   
    function GetInfo() {
var Img2 = document.querySelector('.img-2')
var temprature = document.querySelector('.temprature-2')
var des = document.querySelector('.des')
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
.then(response => response.json())
.then(data => {
  console.log(data)
temprature.innerHTML = data['list']['4']['main']['temp']+ '°'
des.innerHTML = data['list']['4']['weather']['0']['description'];
var day2= document.querySelector('.day-2') 
day2.innerHTML= new Date(data.list[6].dt*1000).toDateString(undefined,'Lagos');
var  iconcode2 = data['list']['4']['weather']['0']['icon'];

Img2.src =  "http://openweathermap.org/img/w/" + iconcode2 + ".png"
})


.catch(err => alert("Welcome"))
}
function GetInfoAf() {
  var Img3a = document.querySelector('.img-3a')
  var tempratureAf = document.querySelector('.temprature-af')
  var des2 = document.querySelector('.des2')
  var newName3 = document.querySelector(".input");
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName3.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode3 = data['list']['5']['weather']['0']['icon'];
  tempratureAf.innerHTML = data['list']['5']['main']['temp']+ '°'
  des2.innerHTML = data['list']['5']['weather']['0']['description'];
  Img3a.src =  "http://openweathermap.org/img/w/" + iconcode3 + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfoEv() {
var Img2a = document.querySelector('.img-2a')
var tempratureEv = document.querySelector('.temprature-ev')
var newName2 = document.querySelector(".input");
var des3 = document.querySelector('.des3')

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName2.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
.then(response => response.json())
.then(data => {
  console.log(data)
var  iconcode3 = data['list']['6']['weather']['0']['icon'];
tempratureEv.innerHTML = data['list']['6']['main']['temp']+ '°'
des3.innerHTML = data['list']['6']['weather']['0']['description'];
Img2a.src =  "http://openweathermap.org/img/w/" + iconcode3 + ".png"
})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfoNg() {
  var Img4a = document.querySelector('.img-4a')
  var tempratureNg = document.querySelector('.temprature-ng')
  var newName3 = document.querySelector(".input");
  var des4 = document.querySelector('.des4')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName3.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['7']['weather']['0']['icon'];
  tempratureNg.innerHTML = data['list']['7']['main']['temp']+ '°'
  des4.innerHTML = data['list']['7']['weather']['0']['description'];
  Img4a.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetMid() {
  var Imgmid = document.querySelector('.img-mid')
  var tempratureMid = document.querySelector('.temprature-mid')
  var newNamem = document.querySelector(".input");
  var des5 = document.querySelector('.des5')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newNamem.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['8']['weather']['0']['icon'];
  tempratureMid.innerHTML = data['list']['8']['main']['temp']+ '°'
  des5.innerHTML = data['list']['8']['weather']['0']['description'];
  Imgmid.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfo3() {
  var newName3a = document.querySelector(".input")
var day3 =  document.querySelector(".day-3" )
var Img3 = document.querySelector('.img-3')
var temprature3 = document.querySelector('.temprature-3')
var des6 = document.querySelector('.des6')
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName3a.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
.then(response => response.json())
.then(data => {
console.log(data)
temprature3.innerHTML = data['list']['9']['main']['temp']+ '°'
des6.innerHTML = data['list']['9']['weather']['0']['description'];
var  iconcode5 = data['list']['9']['weather']['0']['icon'];
Img3.src =  "http://openweathermap.org/img/w/" + iconcode5 + ".png"
day3.innerHTML= new Date(data.list['13'].dt*1000).toDateString('en-EN', {'weekday': 'long'});

})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function GetInfoAf2() {
  var Img3b = document.querySelector('.img-3b')
  var tempratureAfter = document.querySelector('.temprature-after')
  var newName4b = document.querySelector(".input");
  var des7 = document.querySelector('.des7')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName4b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode3b = data['list']['10']['weather']['0']['icon'];
  tempratureAfter.innerHTML = data['list']['10']['main']['temp']+ '°'
  des7.innerHTML = data['list']['10']['weather']['0']['description'];
  Img3b.src =  "http://openweathermap.org/img/w/" + iconcode3b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfoEv2() {
  var Img4b = document.querySelector('.img-4b')
  var tempratureEve = document.querySelector('.temprature-eve')
  var newName3b = document.querySelector(".input");
  var des8 = document.querySelector('.des8')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName3b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode4b = data['list']['11']['weather']['0']['icon'];
  tempratureEve.innerHTML = data['list']['11']['main']['temp']+ '°'
  des8.innerHTML = data['list']['11']['weather']['0']['description'];
  Img4b.src =  "http://openweathermap.org/img/w/" + iconcode4b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfoNg2() {
  var Img5b = document.querySelector('.img-5b')
  var tempratureNig = document.querySelector('.temprature-nig')
  var newName4b = document.querySelector(".input");
  var des9 = document.querySelector('.des9')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName4b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode5b = data['list']['12']['weather']['0']['icon'];
  tempratureNig.innerHTML = data['list']['12']['main']['temp']+ '°'
  des9.innerHTML = data['list']['12']['weather']['0']['description'];
  Img5b.src =  "http://openweathermap.org/img/w/" + iconcode5b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}


function GetMid2() {
  var Imgmidn = document.querySelector('.img-midn')
  var tempratureMidn = document.querySelector('.temprature-midn')
  var newNamemi = document.querySelector(".input");
  var des10 = document.querySelector('.des10')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newNamemi.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['13']['weather']['0']['icon'];
  tempratureMidn.innerHTML = data['list']['13']['main']['temp']+ '°'
  des10.innerHTML = data['list']['13']['weather']['0']['description'];
  Imgmidn.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfo4() {
  var newName3a = document.querySelector(".input")
  var day4 =  document.querySelector(".day-4" )
  var Img6a = document.querySelector('.img-6a')
  var temprature4 = document.querySelector('.temprature-4')
  var des11 = document.querySelector('.des11')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName3a.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  console.log(data)
  temprature4.innerHTML = data['list']['14']['main']['temp']+ '°'
  des11.innerHTML = data['list']['14']['weather']['0']['description'];
  var  iconcode5 = data['list']['14']['weather']['0']['icon'];
  Img6a.src =  "http://openweathermap.org/img/w/" + iconcode5 + ".png"
day4.innerHTML= new Date(data.list[22].dt*1000).toDateString('en-EN', {'weekday': 'long'});
})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function GetInfoAf3() {
  var Img6b = document.querySelector('.img-6b')
  var tempratureAfter = document.querySelector('.temprature-aftern')
  var newName6b = document.querySelector(".input");
  var des12 = document.querySelector('.des12')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName6b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode6b = data['list']['15']['weather']['0']['icon'];
  tempratureAfter.innerHTML = data['list']['15']['main']['temp']+ '°'
  des12.innerHTML = data['list']['15']['weather']['0']['description'];
  Img6b.src =  "http://openweathermap.org/img/w/" + iconcode6b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfoEv3() {
  var Img7b = document.querySelector('.img-7b')
  var tempratureEvi = document.querySelector('.temprature-evei')
  var newName7b = document.querySelector(".input");
  var des13 = document.querySelector('.des13')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName7b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode7b = data['list']['16']['weather']['0']['icon'];
  tempratureEvi.innerHTML = data['list']['16']['main']['temp']+ '°'
  des13.innerHTML = data['list']['16']['weather']['0']['description'];
  Img7b.src =  "http://openweathermap.org/img/w/" + iconcode7b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfoNg3() {
  var Img8b = document.querySelector('.img-8b')
  var tempratureNigh = document.querySelector('.temprature-nigh')
  var newName8b = document.querySelector(".input");
  var des14 = document.querySelector('.des14')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName8b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode8b = data['list']['17']['weather']['0']['icon'];
  tempratureNigh.innerHTML = data['list']['17']['main']['temp']+ '°'
  des14.innerHTML = data['list']['17']['weather']['0']['description'];
  Img8b.src =  "http://openweathermap.org/img/w/" + iconcode8b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetMid3() {
  var Imgmidni = document.querySelector('.img-midni')
  var tempratureMidni = document.querySelector('.temprature-midni')
  var newNamemid = document.querySelector(".input");
  var des15 = document.querySelector('.des15')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newNamemid.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['18']['weather']['0']['icon'];
  tempratureMidni.innerHTML = data['list']['18']['main']['temp']+ '°'
  des15.innerHTML = data['list']['18']['weather']['0']['description'];
  Imgmidni.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfo5() {
  var newName9a = document.querySelector(".input")
  var Img9a = document.querySelector('.img-9a')
var day5 =  document.querySelector(".day-5" )
var temprature5 = document.querySelector('.temprature-5')
var des16 = document.querySelector('.des16')
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9a.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
.then(response => response.json())
.then(data => {
  temprature5.innerHTML = data['list']['19']['main']['temp']+ '°'
  des16.innerHTML = data['list']['19']['weather']['0']['description'];
  var  iconcode9a = data['list']['19']['weather']['0']['icon'];
  Img9a.src =  "http://openweathermap.org/img/w/" + iconcode9a + ".png"
day5.innerHTML= new Date(data.list[28].dt*1000).toDateString('en-EN', {'weekday': 'long'});
})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function GetInfoAf4() {
  var Img9b = document.querySelector('.img-9b')
  var tempratureAftern = document.querySelector('.temprature-afterno')
  var newName6b = document.querySelector(".input");
  var des17 = document.querySelector('.des17')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName6b.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9b = data['list']['20']['weather']['0']['icon'];
  tempratureAftern.innerHTML = data['list']['20']['main']['temp']+ '°'
  des17.innerHTML = data['list']['20']['weather']['0']['description'];
  Img9b.src =  "http://openweathermap.org/img/w/" + iconcode9b + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfoEv4() {
  var Img9c = document.querySelector('.img-9c')
  var tempratureEven = document.querySelector('.temprature-even')
  var newName9c = document.querySelector(".input");
  var des18 = document.querySelector('.des18')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9c.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9c = data['list']['21']['weather']['0']['icon'];
  tempratureEven.innerHTML = data['list']['21']['main']['temp']+ '°'
  des18.innerHTML = data['list']['21']['weather']['0']['description'];
  Img9c.src =  "http://openweathermap.org/img/w/" + iconcode9c + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfoNg4() {
  var Img9d = document.querySelector('.img-9d')
  var tempratureNight = document.querySelector('.temprature-night')
  var newName9d = document.querySelector(".input");
  var des19= document.querySelector('.des19')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9d.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9d = data['list']['22']['weather']['0']['icon'];
  tempratureNight.innerHTML = data['list']['22']['main']['temp']+ '°'
  des19.innerHTML = data['list']['22']['weather']['0']['description'];
  Img9d.src =  "http://openweathermap.org/img/w/" + iconcode9d + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetMid4() {
  var Imgmidnig = document.querySelector('.img-midnig')
  var tempratureMidnig = document.querySelector('.temprature-midnig')
  var newNamemidn = document.querySelector(".input");
  var des20 = document.querySelector('.des20')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newNamemidn.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['23']['weather']['0']['icon'];
  tempratureMidnig.innerHTML = data['list']['23']['main']['temp']+ '°'
  des20.innerHTML = data['list']['23']['weather']['0']['description'];
  Imgmidnig.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}
function GetInfo6() {
var day6 =  document.querySelector(".day-6" )
var temprature6 = document.querySelector('.temprature-6')
var newName9 = document.querySelector(".input")
  var Img9g = document.querySelector('.img-9g')
  var des21 = document.querySelector('.des21')
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
.then(response => response.json())
.then(data => {
  var  iconcode5 = data['list']['24']['weather']['0']['icon'];
  Img9g.src =  "http://openweathermap.org/img/w/" + iconcode5 + ".png"
temprature6.innerHTML = data['list']['24']['main']['temp']+ '°'
des21.innerHTML = data['list']['24']['weather']['0']['description'];
day6.innerHTML= new Date(data.list[34].dt*1000).toDateString('en-EN', {'weekday': 'long'});
})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function GetInfoAf5() {
  var Img9b = document.querySelector('.img-9e')
  var tempratureAfternoon = document.querySelector('.temprature-afternoon')
  var newName9e = document.querySelector(".input");
  var des22 = document.querySelector('.des22')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9e.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9e = data['list']['25']['weather']['0']['icon'];
  tempratureAfternoon.innerHTML = data['list']['25']['main']['temp']+ '°'
  des22.innerHTML = data['list']['25']['weather']['0']['description'];
  Img9b.src =  "http://openweathermap.org/img/w/" + iconcode9e + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetInfoEv5() {
  var Img9f = document.querySelector('.img-9f')
  var tempratureEvening = document.querySelector('.temprature-evening')
  var newName9c = document.querySelector(".input");
  var des23 = document.querySelector('.des23')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9c.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9f = data['list']['26']['weather']['0']['icon'];
  tempratureEvening.innerHTML = data['list']['26']['main']['temp']+ '°'
  des23.innerHTML = data['list']['26']['weather']['0']['description'];
  Img9f.src =  "http://openweathermap.org/img/w/" + iconcode9f + ".png"
  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}


function GetInfoNg5() {
  var Img9g = document.querySelector('.img-9g')
  var tempratureNight1 = document.querySelector('.tempraturenight')
  var newName9g = document.querySelector(".input");
  var des24 = document.querySelector('.des24')
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName9g.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
  var  iconcode9g = data['list']['27']['weather']['0']['icon'];
  tempratureNight1.innerHTML = data['list']['27']['main']['temp']+ '°'
  des24.innerHTML = data['list']['27']['weather']['0']['description'];
  Img9g.src =  "http://openweathermap.org/img/w/" + iconcode9g + ".png" 

  })
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function GetMid5() {
  var Imgmidnig = document.querySelector('.img-midnigh')
  var tempratureMidnig = document.querySelector('.temprature-midnigh')
  var newNamemidn = document.querySelector(".input");
  var des25 = document.querySelector('.des25')
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newNamemidn.value+'&appid=66a50a1215fdbe9bba268368d1acb534')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  var  iconcode4 = data['list']['28']['weather']['0']['icon'];
  tempratureMidnig.innerHTML = data['list']['28']['main']['temp']+ '°'
  des25.innerHTML = data['list']['28']['weather']['0']['description'];
  Imgmidnig.src =  "http://openweathermap.org/img/w/" + iconcode4 + ".png"
  })
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}