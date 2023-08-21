
const india=document.getElementById('india');
const name1=document.getElementById('name');

let d1=document.getElementById('1');
let d2=document.getElementById('2');
let d3=document.getElementById('3');
let d4=document.getElementById('4');

let d5=document.getElementById('5');
let d6=document.getElementById('6');
let d7=document.getElementById('7');
let d8=document.getElementById('8');

let d9=document.getElementById('9');
let d10=document.getElementById('10');
let d11=document.getElementById('11');
let d12=document.getElementById('12');


let d13=document.getElementById('13');
let d14=document.getElementById('14');
let d15=document.getElementById('15');
let d16=document.getElementById('16');


let d17=document.getElementById('17');
let d18=document.getElementById('18');
let d19=document.getElementById('19');
let d20=document.getElementById('20');


let d21=document.getElementById('21');
let d22=document.getElementById('22');
let d23=document.getElementById('23');
let d24=document.getElementById('24');


let d25=document.getElementById('25');
let d26=document.getElementById('26');
let d27=document.getElementById('27');






setInterval(() => {
  

    let d=new Date();
    
   d1.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Kolkata" }).split(',')[1];
    name1.innerHTML="India";
    
   })

   d2.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Tokyo" }).split(',')[1];
    name1.innerHTML="Japan";
    
   })
   d3.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Shanghai" }).split(',')[1];
    name1.innerHTML="China";
    
   })
   d4.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "America/Los_Angeles" }).split(',')[1];
    name1.innerHTML="USA";
    
   })
   d5.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Moscow" }).split(',')[1];
    name1.innerHTML="Russia";
    
   })
   d6.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Karachi" }).split(',')[1];
    name1.innerHTML="Pakistan";
    
   })
   d7.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Dubai" }).split(',')[1];
    name1.innerHTML="Dubai";
    
   })
   d8.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Bangkok" }).split(',')[1];
    name1.innerHTML="Bangkok";
    
   })
   d9.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Tehran" }).split(',')[1];
    name1.innerHTML="Tehran";
    
   })




   d10.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Indian/Maldives" }).split(',')[1];
    name1.innerHTML="Maldives";
    
   })

   d11.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Singapore" }).split(',')[1];
    name1.innerHTML="Singapore";
    
   })

   d12.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/London" }).split(',')[1];
    name1.innerHTML="London";
    
   })
   d13.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Andorra" }).split(',')[1];
    name1.innerHTML="Andorra";
    
   })
   d14.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Kabul" }).split(',')[1];
    name1.innerHTML="Kabul";
    
   })
   d15.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Antarctica/Casey" }).split(',')[1];
    name1.innerHTML="Casey";
    
   })
   d16.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Sofia" }).split(',')[1];
    name1.innerHTML="Sofia";
    
   })
   d17.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Atlantic/Bermuda" }).split(',')[1];
    name1.innerHTML="Bermuda";
    
   })
   d18.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Brunei" }).split(',')[1];
    name1.innerHTML="Brunei";
    
   })
   d19.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Berlin" }).split(',')[1];
    name1.innerHTML="Berlin";
    
   })
   d20.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "America/Santo_Domingo" }).split(',')[1];
    name1.innerHTML="Santo_Domingo";
    
   })
   d21.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Africa/Algiers" }).split(',')[1];
    name1.innerHTML="Algiers";
    
   })
   d22.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Vilnius" }).split(',')[1];
    name1.innerHTML="Vilnius";
    
   })
   d23.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Riga" }).split(',')[1];
    name1.innerHTML="Riga";
    
   })
   d24.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Monaco" }).split(',')[1];
    name1.innerHTML="Monaco";
    
   })
   d25.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Oslo" }).split(',')[1];
    name1.innerHTML="Oslo";
    
   })
   d26.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "America/Lima" }).split(',')[1];
    name1.innerHTML="Lima";
    
   })
   d27.addEventListener('click',function(){
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "America/Phoenix" }).split(',')[1];
    name1.innerHTML="Phoenix";
    
   })
   

    
}, 1000);




// let hr=document.getElementById('hr');

// let min=document.getElementById('min');

// let sec=document.getElementById('sec');
// setInterval(() => {
    
//     let d=new Date();
//     let hrr=d.getHours();
//     let minr=d.getMinutes();
//    let secr=d.getSeconds();
//     hro=30*hrr+minr/2;
//    mro=6*minr;
//     sro=6*secr;

//     hr.style.transform=`rotate(${hro}deg)`;
//     min.style.transform=`rotate(${mro}deg)`;
//     sec.style.transform=`rotate(${sro}deg)`;





// }, 1000);
const hindustan=document.getElementById('hindustan');
setInterval(() => {
    
    let d=new Date();
    hindustan.innerHTML=d.toLocaleString();
}, 1000);







function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
    )
}