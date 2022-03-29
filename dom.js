// function dummy(){

//     // console.log('my button is clicked');

//     // document.getElementById('elevation').innerText="This is my dev tag"

//     // let result  =document.getElementsByClassName('div')
//     // result[0].innerText="Hello world"

//     let res = document.getElementsByTagName('div')
//     res[0].innerText='Hello Nayan'

// }

// function dummy(){
//     document.getElementById('change').innerHTML="Welcome to Elevation Academy"
// }

// function clickme(){
//     document.getElementById("container").style.flexDirection="column";
  
// }

// const res= document.getElementById('intro');

// document.getElementById('demo').innerHTML=' Hello Nayan ' + res.innerHTML;

// function color(){
//     document.getElementById('heading').style.color="red"
// }

// function getOptional(){
//     var result= document.getElementById("text")
//     var result2= result.value
//     document.getElementById('output').innerText=result2
// }


function clock(){
    var hour = document.getElementById("hour")
    var Min = document.getElementById("min")
    var Sec = document.getElementById("sec")
    var Am = document.getElementById("ampm")
    
    var time = new Date();
    var hrs = time.getHours()
    var min= time.getMinutes()
    var sec = time.getSeconds()
    var am_pm ="AM";
    
    if (hrs===0){
        hrs=12;
    }
    if (hrs>12){
        hrs = hrs-12;
        {
        am_pm="PM"}
    }
    
    if (hrs<10){
        hrs = "0"+hrs;
    }
    
    if (min<10){
        min = "0"+min;
    }
    
    if (sec<10){
        sec = "0"+sec;
    }
    
    hour.innerText=hrs;
    Min.innerText=min;
    Sec.innerText=sec;
    Am.innerText=am_pm;}
    
    setInterval(clock,1000);
    