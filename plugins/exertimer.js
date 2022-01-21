﻿

var alarmTime = "0000~00:00:00";
var aDays = "000";
var dayTimeR = "0"; // adds days to the current time
var dayTimeRD = 0; // Displays counter
var secctrR = 0;  // daily seconds counter
var secctrRD = 0;  // Displays counter
var RemainingTime = 0; // countdown timer
var RemainingTimeRD = 0; // Displays countdown timer
var curTime;
var check = new Date();
var dayNum;
var hourNum;
var minNum;
var secNum;
var milliNum;
var cdayNum;
var chourNum;
var cminNum;
var csecNum;
var cmilliNum;
var Message = "";
var TypeMessage = "";
var snd = new Audio("audio/dogs.mp3"); // buffers automatically when created



function _timer(callback)
{
    var time = 1000;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0000;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 0000;
 
        if(status == 0000)
        {
            status = 1000;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400000)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1000)
        {
            status = 0000;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0000;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stopped (1)
    this.getStatus
    {
        return status;
    }


    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var milli = time % 100;
        var second = Math.round(time / 100) % 60;
        var minute = Math.floor(time / 6000) % 60;
        var hour = Math.floor(time / 360000) % 24;
        
        milli = (milli < 10) ? '0'+milli : milli;
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.milli').html(milli);
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}


function _timer2(callback)
{
    var time = 1000;     //  The default time of the timer
    var mode = 0;     //    Mode: count up or count down
    var status = 0000;    //    Status: timer is running or stoped
    var timer2_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 0000;
 
        if(status == 0000)
        {
            status = 1000;
            timer2_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime2();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400000)
                    {
                        time++;
                        generateTime2();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1000)
        {
            status = 0000;
            clearInterval(timer2_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0000;
        time = sec;
        generateTime2(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stopped (1)
    this.getStatus
    {
        return status;
    }


    
    // This methode will render the time variable to hour:minute:second format
    function generateTime2()
    {
        var milli = time % 100;
        var second = Math.round(time / 100);
        var minute = Math.floor(time / 6000) % 60;
        var hour = Math.floor(time / 360000) % 24;
        
        milli = (milli < 10) ? '0'+milli : milli;
        second = (second < 1000) ? RemainingTime-second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
       $('div.timer2 span.milli').html(milli);
       $('div.timer2 span.second').html(second);
       $('div.timer3 span.second').html(second);
       $('div.timer2 span.minute').html(minute);
       $('div.timer2 span.hour').html(hour);
    }
}

 
// example use
var timer;
var snd2 = new Audio("audio/bells.mp3"); // buffers automatically when created

$(document).ready(function(e) 
  { timer = new _timer
    (function(time)
        {if(time == 90000){
             snd2.play();
             timer.start();
             alert('15 Minutes Elapsed');
          }
      }
   );
    timer.reset(0);
    timer.mode(10);
    snd2.stop();
  }
);


var timer2;
var snd2 = new Audio("audio/bells.mp3"); // buffers automatically when created

$(document).ready(function(e) 
  { timer2 = new _timer2
    (function(time)
        {if(time == 90000){
             snd2.play();
             timer2.start();
             alert('15 Minutes Elapsed');
          }
      }
   );
    timer2.reset(0);
    timer2.mode(10);
    snd2.stop();
  }
);


    

//calculate function
function calc(){
//variables convert mph to mps
var milesperhour = document.converter.mph.value
var calculated = Math.round(milesperhour * 0.44704*1000)/1000
//write in text box
document.converter.mps.value=calculated
}

function calc2(){
//variables convert mps to mph
var meterspersecond = document.converter.mps.value
var calculated = Math.round(meterspersecond * 3600/1610.3)
//write in text box
document.converter.mph.value=calculated
}

function calc3(){
//variables convert kph to mph
var milesperhour = document.converter.mph.value
var calculated = Math.round(milesperhour * 1.609344*1000)/1000
//write in text box
document.converter.kph.value=calculated
}

function calc4(){
//variables convert kph to mph
var kilometersperhour = document.converter.kph.value
var calculated = Math.round(kilometersperhour * 6214)/10000
//write in text box
document.converter.mph.value=calculated
}

function calc5(){
//variables convert kph to mps
var kilometersperhour = document.converter.kph.value
var calculated = Math.round(kilometersperhour * 10)/36
//write in text box
document.converter.mps.value=calculated
}

function calc6(){
//variables convert mps to kph
var meterspersecond = document.converter.mps.value
var calculated = Math.round(meterspersecond * 36)/10
//write in text box
document.converter.kph.value=calculated
}





function GetTime() {
var dt = new Date();
// format the years
if ((dayTimeR.length) == 1) {
dayTimeR = "000" + dayTimeR;}
if ((dayTimeR.length) == 2) {
dayTimeR = "00" + dayTimeR;}
if ((dayTimeR.length) == 3) {
dayTimeR = "0" + dayTimeR;}
if (dayTimeR.length >= 4) {
dayTimeR = dayTimeR.slice(-4);} // right 4 characters
// end format
document.clock.local.value = dt.getFullYear() + "~" + IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()) + "." + IfZero(dt.getMilliseconds());
setTimeout("GetTime()", 10);
curTimeD = (IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()));
document.clock.DalarmTime.value = alarmTime;
curTime = (IfZero(aDays) + "~" + IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()));
if (alarmTime == "0000~00:00:00") {document.clock.Dstatus.value = "Not Set ";}
if (alarmTime == curTime) {alarmOn();}
if (alarmTime > curTime) {document.clock.Dstatus.value = "Counting";
secctrR = secctrR + 1;
 
document.clock.secctrRD.value = secctrR; // Display up to 24 hours of Elapsed Ticks
	if (secctrR == 86399){
	dayTimeR = dayTimeR + 1; // add a day to Day Ticks
	document.clock.dayTimeRD.value = dayTimeR; // Display
	secctrR = 0; // reset Elapsed Ticks
	}
  }
}



function IfZero(num) {
return ((num <= 9) ? ("0" + num) : num);
}

function alarmOn() {
document.clock.alarmOnOff[0].checked = true;
document.clock.messagesD.value = "The " + TypeMessage + "timer has been started and it is running!";

if (alarmTime == curTime) {
snd.play();
snd.currentTime=0;
document.clock.Dstatus.value = "Complete";
document.clock.RemainingTimeRD.value = "Complete";
document.clock.secctrRD.value = "Complete";
document.clock.dayTimeRD.value = "Complete";
document.clock.messagesD.value = "The " + TypeMessage + "selected time has been reached and the ALERT player activated! You should hear it!  ";
document.clock.DalarmTime.value = document.clock.DalarmTime.value + " ON  "; // Displays when alarm turns on and stays on
document.all.sound.src = document.clock.alarmSound.value;
document.clock.alarmOnNow.checked = true;
if (document.clock.alarmSound.value == "") {document.all.sound.src = "";}
     
  }
 
else {
setTimeout("alarmOn()", 1000)
   }
}


function alarmOff() {
snd.removeEventListener("ended", onEvent);
        snd = null;
snd.currentTime=0;
document.clock.alarmOnOff[1].checked = true;
document.clock.alarmOnNow.checked = false;
document.all.sound.src = "";
document.clock.snoozeOptD.value = "0";
document.clock.snoozeOptH.value = "0";
document.clock.snoozeOptM.value = "0";
document.clock.snoozeOptS.value = "0";
document.clock.messagesD.value = "The Alert Off button has been clicked and the ALERT player deactivated! You should not hear it!        ";
secctrR = 0; // reset
RemainingTime = 0; // reset
dayTimeR = 0; // reset
alarmTime="0000~00:00:00"; // reset
}

function alarmNow() {
alarmTime=curTime;
TypeMessage = "Alarm Now "
alarmOn();

}

function snooze() {
document.all.sound.src = "";

var snooze = new Date();

//cdayNum = (snooze.getDay());
cdayNum = dayTimeR;
chourNum = (snooze.getHours());
cminNum = (snooze.getMinutes());
csecNum = (snooze.getSeconds());

dayNum = (parseInt(document.clock.snoozeOptD.value) * 1) + (cdayNum * 1);
hourNum = (parseInt(document.clock.snoozeOptH.value) * 1) + (chourNum * 1);
minNum = (parseInt( document.clock.snoozeOptM.value) * 1) + (cminNum * 1);
secNum = (parseInt(document.clock.snoozeOptS.value) * 1) + (csecNum * 1);

while(secNum >= 60){secNum = secNum - 60;minNum++;}
while(minNum >= 60){minNum = minNum - 60;hourNum++;}
while(hourNum >= 24){hourNum = hourNum - 24;dayNum++;}
while(secNum < 0){secNum += 60;minNum--;}
while(minNum < 0){minNum += 60;hourNum--;}
while(hourNum < 0){hourNum += 24;dayNum--;}

// format the output for display = 0000~00:00:00

var dayNumS = parseInt(dayNum).toString();
var hourNumS = parseInt(hourNum).toString();
var minNumS = parseInt(minNum).toString();
var secNumS = parseInt(secNum).toString();
var milliNumS = parseInt(milliNum).toString();
if ((milliNumS.length) == 1) {
milliNumS = "0" + milliNumS;}
if ((secNumS.length) == 1) {
secNumS = "0" + secNumS;}
if ((minNumS.length) == 1) {
minNumS = "0" + minNumS;}
if ((hourNumS.length) == 1) {
hourNumS = "0" + hourNumS;}
if ((dayNumS.length) == 1) {
dayNumS = "000" + dayNumS;}
if ((dayNumS.length) == 2) {
dayNumS = "00" + dayNumS;}
if ((dayNumS.length) == 3) {
dayNumS = "0" + dayNumS;}

RemainingTime = (parseInt((dayNum * 1 * 86400)) + parseInt((hourNum * 1) * 3600) + parseInt((minNum * 1 * 60)) + parseInt((secNum * 1))) - (parseInt((cdayNum * 1 * 86400)) + parseInt((chourNum * 1) * 3600) + parseInt((cminNum * 1 * 60)) + parseInt((csecNum * 1)));
document.clock.RemainingTimeRD.value = RemainingTime; // sets initially and displays RT only once
alarmTime = dayNumS + "~" + hourNumS + ":" + minNumS + ":" + secNumS;
document.clock.DalarmTime.value = alarmTime; // sets initially and displays only once
document.clock.messagesD.value = "days "+dayNum+" hours "+hourNum+" minutes "+minNum+" seconds "+secNum+" alarmtime "+alarmTime+ " secctrR "+secctrR+" dayTimerR "+dayTimeR;
//
// var snoozeM = set up the input
//
//var snooze = new Date();
alarmOn();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);

}

function audiotrigger()  {
    snooze();
    timer.mode(1);
    timer.start(10);
    

}


function whichSlalomcl() {

x = 900;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = true;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "15";
TypeMessage = "15 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);


setTimeout(whichSlalomcl, x*10000/10);
}
whichSlalomcl();
timer.start(10); // execute function
timer2.start(10);
timer2.reset(00);


function whichSlalomsm() {

x = 600;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = true;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "10";
TypeMessage = "10 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);


setTimeout(whichSlalomsm, x*10000/10);
}
whichSlalomsm();
timer.start(10); // execute function
timer2.start(10);
timer2.reset(00);

function whichSlalomme() {

x = 300;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = true;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "5";
TypeMessage = "5 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);


setTimeout(whichSlalomme, x*10000/10);
}
whichSlalomme();
timer.start(10); // execute function
timer2.start(10);
timer2.reset(00);


function whichSlalomlg() {

x = 180;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = true;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "3";
TypeMessage = "3 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);

setTimeout(whichSlalomlg, x*10000/10);
}
whichSlalomlg();
timer.start(10); // execute function
timer2.start(10);
timer2.reset(00);


function whichSlalomxl() {

x = 120;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = true;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "2";
TypeMessage = "2 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);


setTimeout(whichSlalomxl, x*10000/10);
}
whichSlalomxl(); // execute function
timer.start(10);
timer2.start(10);
timer2.reset(00);



function whichSlalomjb() {

x = 60;  // x Seconds

document.clock.jbSlalom.checked = true;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptM.value = "1";
TypeMessage = "1 Minute ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);

setTimeout(whichSlalomjb, x*10000/10);
}
whichSlalomjb(); // execute function
timer.start(10);
timer2.start(10);
timer2.reset(00);


function whichSlalomwm() {

x = 30;  // x Seconds

document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = true;
document.clock.noSlalom.checked = false;
document.clock.snoozeOptS.value = "30";
TypeMessage = "30 Second ";
snooze();
timer2.reset(00);
timer.mode(1);
timer.start(10);
timer2.mode(1);
timer2.start(10);



setTimeout(whichSlalomwm, x*10000/10);
}
whichSlalomwm(); // execute function
timer.start(10);
timer2.start(10);
timer2.reset(00);

function whichSlalomno() {
document.clock.jbSlalom.checked = false;
document.clock.xlSlalom.checked = false;
document.clock.lgSlalom.checked = false;
document.clock.meSlalom.checked = false;
document.clock.smSlalom.checked = false;
document.clock.clSlalom.checked = false;
document.clock.wmSlalom.checked = false;
document.clock.noSlalom.checked = true;
document.clock.snoozeOptS.value = "0";
document.clock.messagesD.value = "";
TypeMessage = "Time Select Seconds"
alarmOff();
}



function XTimes(callback, interval, repeatTimes) {
    let repeated = 0;
    const intervalTask = setInterval(doTask, interval)

    function doTask() {
        if ( repeated < repeatTimes ) {
            callback()
            repeated += 1
        } else {
            clearInterval(intervalTask)
        }
    }
}
 
// clears field of default value
function clear_field(field) {
                if (field.value==field.defaultValue) {
                        field.value=''
                }
        }

// -->

