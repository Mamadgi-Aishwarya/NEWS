var date = new Date();
var hours = date.getHours();
if(id>=300 && id<=321){
    document.body.style.background = "url('images/drizzle.jpg') no-repeat ";
    document.body.style.backgroundSize="cover";
}
if(id>=200 && id<=232){
    document.body.style.background = "url('images/thunderstorm.jpg') no-repeat ";
    document.body.style.backgroundSize="cover";
}
if(id>=701 && id<=781){
    document.body.style.background = "url('images/misty.jpg') no-repeat";
    document.body.style.backgroundSize="cover";
}
else if((hours>=19 && hours<=24)||(hours>=1 && hours<=5)){
    if(id>=500 && id<=531){
        document.body.style.background = "url('images/rain_night.jpg') no-repeat ";
        document.body.style.backgroundSize="cover";
    }
    else if(id>=600 && id<=622){
        document.body.style.background = "url('images/snow_night.jpeg') no-repeat ";
        document.body.style.backgroundSize="cover";
    }
    else if(id==800){
        document.body.style.background = "url('images/clear_night.jpeg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
    else if(id==801){
        document.body.style.background = "url('images/few_clouds_night.jpeg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
    else if(id==802){
        document.body.style.background = "url('images/scattered_clouds_night.jpg') no-repeat";
        document.body.style.backgroundSize="100vw 100vh";
    }
    else if(id==803){
        document.body.style.background = "url('images/broken_clouds_night.jpeg') no-repeat";
        document.body.style.backgroundSize ="cover";
    }
   else if(id==804){
        document.body.style.background = "url('images/overcast_clouds_night.jpeg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
}
else if((hours>=6 && hours<=18)){
    if(id>=500 && id<=531){
        document.body.style.background = "url('images/rain_day.jpeg') no-repeat ";
        document.body.style.backgroundSize="cover";
    }
    else if(id>=600 && id<=622){
        document.body.style.background = "url('images/snow_day.jpg') no-repeat ";
        document.body.style.backgroundSize="cover";
    }
    else if(id==800){
        document.body.style.background = "url('images/clear_day.jpg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
    else if(id==801){
        document.body.style.background = "url('images/few_clouds_day.jpg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
    else if(id==802){
        document.body.style.background = "url('images/scattered_clouds_day.jpg') no-repeat";
        document.body.style.backgroundSize="cover";
    }
    else if(id==803){
        document.body.style.background = "url('images/broken_clouds_day.jpg') no-repeat";
        document.body.style.backgroundSize ="cover";
    }
    else if(id==804){
        document.body.style.background = "url('images/overcast_clouds_day.jpeg') no-repeat";
        document.body.style.backgroundSize ="cover";
    }
}
function getLocation(){
    var flag=1;
    if(flag==1){
   if ('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition(function(position){
       const latitude=position.coords.latitude;
       const longitude=position.coords.longitude;
       const data={lat:latitude,lon:longitude};
       const options={method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify(data)};
       fetch('/weather',options).then(console.log("success")).catch(err=>{console.log(err);});
   })
   } else {
       document.write("Geolocation is not supported by this browser.");
   }
   flag=0;
   }
 };



