
var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;




function start(){
timer=true;
stopWatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    document.getElementById("count").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    

}
function stopWatch(){
   
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        var hrStr=hr;
        var minStr=min;
        var secStr=sec;
        var countStr=count;

        if(hr<10){
            hrStr="0"+hrStr;
        }
        if(min<10){
            minStr="0"+minStr;
        }
        if(sec<10){
            secStr="0"+secStr;
        }
        if(count<10){
            countStr="0"+countStr;
        }
        document.getElementById("count").innerHTML=countStr;
        document.getElementById("min").innerHTML=minStr;
        document.getElementById("hr").innerHTML=hrStr;
        document.getElementById("sec").innerHTML=secStr;
        
        setTimeout("stopWatch()",10);
    }
}

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
    )
}
