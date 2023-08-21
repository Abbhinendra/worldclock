
const india=document.getElementById('india');
const usa=document.getElementById('usa');
const china=document.getElementById('china');
const japan=document.getElementById('japan');
const russia=document.getElementById('russia');
const pakistan=document.getElementById('pakistan');
const dubai=document.getElementById('dubai');
const bangkok=document.getElementById('bangkok');
const tehran=document.getElementById('tehran');
const maldives=document.getElementById('maldives');
const singapore=document.getElementById('singapore');
const london=document.getElementById('london');

const updateTime=()=>{

    let d=new Date();
    india.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Kolkata" }).split(',')[1];
    usa.innerHTML=d.toLocaleString('en-US', { timeZone: "America/Los_Angeles" }).split(',')[1];
    china.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Shanghai" }).split(',')[1];
    
    japan.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Tokyo" }).split(',')[1];
    russia.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/Moscow" }).split(',')[1];
    pakistan.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Karachi" }).split(',')[1];

    dubai.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Dubai" }).split(',')[1];
    bangkok.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Bangkok" }).split(',')[1];
    tehran.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Tehran" }).split(',')[1];

    
    maldives.innerHTML=d.toLocaleString('en-US', { timeZone: "Indian/Maldives" }).split(',')[1];
    singapore.innerHTML=d.toLocaleString('en-US', { timeZone: "Asia/Singapore" }).split(',')[1];
    london.innerHTML=d.toLocaleString('en-US', { timeZone: "Europe/London" }).split(',')[1];
let stop=document.getElementById('stop');
let alarmHour=alarm.value.split(':')[0];
let alarmMin=alarm.value.split(':')[1];
if(d.getHours()==alarmHour&& d.getMinutes()==alarmMin){
    let audioElement=new Audio('1.mp3');
    audioElement.play();
}


}


    

setInterval(updateTime,1000);





function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
    )
}
