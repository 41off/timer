       
 function onloadA(){
            console.log("body loaded");
            audio_player = document.getElementsByTagName("audio")[0];
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.volume = 0.8;
            audio_player.currentSrc();
            audio_player.currentTime();
            
   }
  
 

  function ClickStartA() {
    
    audio_player.play();
    audio.playbackRate = 1.0; 
   }
   
  function ClickPauseA(){
    
    audio_player.pause();
   }
  function onPauseR(){
   
    audio_player.pause();
   }
  
  function on1XA(){
   
    audio_player.pause();
    audio.pause();
    clearInterval(rewind);
    audio.playbackRate = 1.0;
   }
 
  function onFastFwdA(){
    audio.playbackRate = 4.0;
    audio_player.play();
   }
   
  function onSupFwdA(){
    audio.playbackRate = 16.0;
    audio_player.play();
   }
   
  function onSlowA(){
    audio.playbackRate = 0.125;
    audio_player.play();
   }
   
  function onSuperSlowA(){
    audio.playbackRate = 0.0625;
    audio_player.play();
   }
   
  function multiStopA() {
    audio_player.pause();
    clearInterval(rewind);
   }
 
 

 
   
   function multiFwdA() {
    var btn = document.getElementById("R4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             audio_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             audio_player.pause();
                }
     if(audio_player.paused){
      timerA.start(2);
      timerA.mode(1);
      audio_player.play();
      audio.playbackRate = 4.0;
      } 
       else {
            timerA.stop();
            audio_player.pause();
         }   
  }
   
   function multiSupFwdA() {
    var btn = document.getElementById("R16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             audio_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             audio_player.pause();
                }
     if(audio_player.paused){
      timerA.start(0.3125);
      timerA.mode(1);
      audio_player.play();
      audio.playbackRate = 16.0;
      } 
       else {
            timerA.stop();
            audio_player.pause();
         }   
   }
  
        var audio_directory = ['https://www.dropbox.com/s/ockrpjtnurzpwyq/S2E2-TakeItToTheWater-Timber.mp3?raw=1',
                               'https://www.dropbox.com/s/7fmkp0w5xvj0n6u/CoreFundamentals.mp3?raw=1',
                               'https://www.dropbox.com/s/i8u3mb5b7jp6kov/StrengthsWeaknesses.mp3?raw=1',
                               'https://www.dropbox.com/s/42er45tras9dip4/Stacked.mp3?raw=1',
                               'https://www.dropbox.com/s/vf5q5zmze60rxhk/SkiSetup.mp3?raw=1',
                               'https://www.dropbox.com/s/b37syrdozunzfj9/LineLengthProgression.mp3?raw=1',
                               'https://www.dropbox.com/s/uwkr7y8558dpws8/Gates.mp3?raw=1',
                               'https://www.dropbox.com/s/kga5l3v71zeybd9/EdgeChange.mp3?raw=1',
                               'https://www.dropbox.com/s/anf3ga36i8wwhsb/HandleControl.mp3?raw=1',
                               'https://www.dropbox.com/s/351tju3zy9lix9p/LightOnTheLine.mp3?raw=1',
                               'https://www.dropbox.com/s/d7hrr8ttbw856bm/Onsideturns.mp3?raw=1',
                               'https://www.dropbox.com/s/o9eoof625hd16g3/Offsideturns.mp3?raw=1',
                               'https://www.dropbox.com/s/k6x24rm9neeoxl0/CounterRotation.mp3?raw=1',
                               'https://www.dropbox.com/s/yv2psh8az0d72pe/Boots.mp3?raw=1',
                               'https://www.dropbox.com/s/ek9pqio92pj9jmp/LeftBehind.mp3?raw=1',
                               'https://www.dropbox.com/s/5zv2prhri0j4x1c/RecurringThemes.mp3?raw=1',
                               'https://www.dropbox.com/s/agt732ygnve46f9/OffSeason.mp3?raw=1',
                               'https://www.dropbox.com/s/sphfc452o4eo7ut/S2E1BoysareBack.mp3?raw=1',
                               'https://www.dropbox.com/s/ockrpjtnurzpwyq/S2E2-TakeItToTheWater-Timber.mp3?raw=1',
                               'https://www.dropbox.com/s/qs7qzpcg39t399q/S2E3Vision.mp3?raw=1',
                               'https://www.dropbox.com/s/5irqlo83uui9fm5/S2E4-Planning.mp3?raw=1',
                               'https://www.dropbox.com/s/i4q679uy2v3zp3n/S2E5OnTheWater.mp3?raw=1',
                               'https://www.dropbox.com/s/096t9ojgq11gp1i/S2E6FatalFlaws.mp3?raw=1',
                               'https://www.dropbox.com/s/h8sfbe8093kxth1/S2E7WorkZone.mp3?raw=1',
                               'https://www.dropbox.com/s/yvyhpvczym9dbpd/S2E8TraingRegiment.mp3?raw=1',
                               'https://www.dropbox.com/s/dmnqe7m5pkxtyn0/S2E9PerfectPath.mp3?raw=1',
                               'https://www.dropbox.com/s/yv0x5ert5ku4q1p/S2E10-Turning.mp3?raw=1',
                               'https://www.dropbox.com/s/jppc431o08nf0a5/S2E11-Gates.mp3?raw=1',
                               'https://www.dropbox.com/s/s09cfri3uvh0txb/S2E12-FinSetup.mp3?raw=1',
                               'https://www.dropbox.com/s/fplt2zx3ozdpt9t/S2E13-UnwrittenRules.mp3?raw=1',
                               'https://www.dropbox.com/s/sd8d1etuert1en3/S2E14-Tournaments.mp3?raw=1',
                               'https://www.dropbox.com/s/aos3nvxz780g4wz/S2E15-Speed.mp3?raw=1',
                               'https://www.dropbox.com/s/9lehtp7r1betpim/S2E16-TheHandle.mp3?raw=1',
                               'https://www.dropbox.com/s/0h77j5a4bwpbxw1/S2E17-Vision.mp3?raw=1',
                               
                               'https://www.dropbox.com/s/38jphq204u093m1/S2E18-Roadblocks.mp3?raw=1',
                               'https://www.dropbox.com/s/0kgi5xq32cbuw3q/S2E19-MaximizeCoaching.mp3?raw=1',
                               'https://www.dropbox.com/s/r1djjbzcivku218/S2E20-Plateaus.mp3?raw=1',
                               'https://www.dropbox.com/s/0ht6j9zc5f92aqs/S2E21-WearandTear.mp3?raw=1',
                               'https://www.dropbox.com/s/az6l1tpjs7g65rp/S2E22-Slack.mp3?raw=1',
                               'https://www.dropbox.com/s/a2ca8cgaxtxscie/S2E23-Housekeeping.mp3?raw=1',
                               'https://www.dropbox.com/s/zlr5v5a50x4528k/S2E24-MakingMistakes.mp3?raw=1',
                               'https://www.dropbox.com/s/n8otph06sr7514o/S2E25-SettingUpForSuccess.mp3?raw=1',
                               'https://www.dropbox.com/s/w92qfioyhh72u5e/S2E26-ChangingDirection.mp3?raw=1',
                               'https://www.dropbox.com/s/isokr8t4sz89r70/S2E27-ListernerFeedback.mp3?raw=1',
                               'https://www.dropbox.com/s/dkm0uc3lj7wa7q6/S2E28-ListernerQuestions.mp3?raw=1',
                               'https://www.dropbox.com/s/l3rvc0u1hpg1i67/S2E29-QuestionsRd3.mp3?raw=1',
                               'https://www.dropbox.com/s/psqh3nf8t225rx4/S2E30-Season2End.mp3?raw=1',
                                                     
                               ];                      
 
  
        var audio_index = 0;
        var audio_player = null;
        var audio = document.getElementsByTagName("audio")[0];  
         
        
       function onaudioEndedA(){
            console.log("audio ended");
            if(audio_index < audio_directory.length - 1){
                audio_index++;
            }
            else{
                audio_index = 1;
            }
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
        }
        
       function onaudioNextA(){
            console.log("audio next");
            if(audio_index < audio_directory.length - 1){
                audio_index++;
            }
            else{
                audio_index = 1;
            }
            audio_player = document.getElementsByTagName("audio")[0];
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
        }
        
       function onaudioBackA(){
              console.log("audio back");
            if(audio_index < audio_directory.length - 1){
                audio_index--;
            }
            else{
                audio_index--;
            }
            audio_player = document.getElementsByTagName("audio")[0];
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
        }
        
            
       function on0A(){
            console.log("0 ended");
            audio_index = 0;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                       
        var btn = document.getElementById("modalA");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtextA">Latest</button>';              
              timerA.reset();
              audio_player.play();
             
              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              
              audio_player.pause();
              }
          }
        
        function on1A(){
            console.log("1 ended");
            audio_index = 1;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
           
         var btn = document.getElementById("modalA");
              
            if (btn.value == "V1.mp4") {
              btn.value = "V1.mp4";
              btn.innerHTML = '<button id="modtextA">V1.mp4</button>';             
              audio_player.play();
              
              }
            else {
              btn.value = "V1.mp4";
              btn.innerHTML =  '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              audio_player.pause();              
              }
        }
           
          function on2A(){
            console.log("2 ended");
            audio_index = 2;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
            
          var btn = document.getElementById("modalA");
      
            if (btn.value == "V2.mp4") {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtextA">V2.mp4</button>';
              
              audio_player.play();
              
              }
            else {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
           
              audio_player.pause();
              }
        }
                      
          function on3A(){
            console.log("3 ended");
            audio_index = 3;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
            
           var btn = document.getElementById("modalA");
      
            if (btn.value == "V3.mp4") {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtextA">V3.mp4</button>';
              
              audio_player.play();
             
              }
            else {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              
              audio_player.pause();
              }
        }
        
          function on4A(){
            console.log("4 ended");
            audio_index = 4;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
           var btn = document.getElementById("modalA");
      
            if (btn.value == "V4.mp4") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextA">V4.mp4</button>';
            
              audio_player.play();
             
              }
            else {
              btn.value = "Clip 5";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
             
              audio_player.pause();              
              }
        }
           
         function on5A(){
            console.log("5 ended");
            audio_index = 5;            
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
          var btn = document.getElementById("modalA");
      
            if (btn.value == "V5.mp4") {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtextA">V5.mp4</button>';
             
              audio_player.play();
             
              }
            else {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              
              audio_player.pause();
              }
        }
        
         function on6A(){
            console.log("6 ended");
            audio_index = 6;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
          var btn = document.getElementById("modalA");
      
            if (btn.value == "Clip 7") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextA">Clip 7</button>';
             
              audio_player.play();
             
              }
            else {
              btn.value = "Clip 7";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
            
              audio_player.pause();
              }
        }
         
          function on7A(){
            console.log("7 ended");
            audio_index = 7;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
           var btn = document.getElementById("modalA");
      
            if (btn.value == "Clip 8") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextA">Clip 8</button>';
             
              audio_player.play();
            
              }
            else {
              btn.value = "Clip 8";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
             
              audio_player.pause();
              }
        }
        
          function on8A(){
            console.log("8 ended");
            audio_index = 8;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
            
           var btn = document.getElementById("modalA");
      
            if (btn.value == "Clip 9") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextA">Clip 9</button>';              
              
              audio_player.play();
           
              }
            else {
              btn.value = "Clip 9";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
             
              audio_player.pause();
              }
        }
        
          function on9A(){
           console.log("9 ended");
           audio_index = 9;
           audio_player.setAttribute("src", audio_directory[audio_index]);
           audio_player.play();
           
          var btn = document.getElementById("modalA");
      
            if (btn.value == "Clip 10") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 10</button>';
              
              audio_player.play();
             
              }
            else {
              btn.value = "Clip 10";
              btn.innerHTML = '<button id="modtextA">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
             
              audio_player.pause();
              }
       }
       
          function on10A(){
           console.log("10 ended");
           audio_index = 10;
           audio_player.setAttribute("src", audio_directory[audio_index]);
           audio_player.play();       
}
       
          function on11A(){
            console.log("11 ended");
            audio_index = 11;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
         
}
        
        
           function on12A(){
            console.log("12 ended");
            audio_index = 12;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
}      

   function on13A(){
            console.log("13 ended");
            audio_index = 13;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on14A(){
            console.log("14 ended");
            audio_index = 14;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on15A(){
            console.log("15 ended");
            audio_index = 15;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on16A(){
            console.log("16 ended");
            audio_index = 16;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on17A(){
            console.log("17 ended");
            audio_index = 17;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on18A(){
            console.log("18 ended");
            audio_index = 18;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on19A(){
            console.log("19 ended");
            audio_index = 19;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on20A(){
            console.log("20 ended");
            audio_index = 20;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on21A(){
            console.log("21 ended");
            audio_index = 21;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on22A(){
            console.log("22 ended");
            audio_index = 22;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on23A(){
            console.log("23 ended");
            audio_index = 23;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on24A(){
            console.log("24 ended");
            audio_index = 24;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on25A(){
            console.log("25 ended");
            audio_index = 25;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on26A(){
            console.log("26 ended");
            audio_index = 26;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on27A(){
            console.log("27 ended");
            audio_index = 27;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on28A(){
            console.log("28 ended");
            audio_index = 28;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on29A(){
            console.log("29 ended");
            audio_index = 29;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on30A(){
            console.log("30 ended");
            audio_index = 30;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on31A(){
            console.log("31 ended");
            audio_index = 31;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on32A(){
            console.log("32 ended");
            audio_index = 32;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on33A(){
            console.log("33 ended");
            audio_index = 33;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on34A(){
            console.log("34 ended");
            audio_index = 34;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on35A(){
            console.log("35 ended");
            audio_index = 35;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on36A(){
            console.log("36 ended");
            audio_index = 36;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}


   function on37A(){
            console.log("37 ended");
            audio_index = 37;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on38A(){
            console.log("38 ended");
            audio_index = 38;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on39A(){
            console.log("39 ended");
            audio_index = 39;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on40A(){
            console.log("40 ended");
            audio_index = 40;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on41A(){
            console.log("41 ended");
            audio_index = 41;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on42A(){
            console.log("42 ended");
            audio_index = 42;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on43A(){
            console.log("43 ended");
            audio_index = 43;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on44A(){
            console.log("44 ended");
            audio_index = 44;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on45A(){
            console.log("45 ended");
            audio_index = 45;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on46A(){
            console.log("46 ended");
            audio_index = 46;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on47A(){
            console.log("47 ended");
            audio_index = 47;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on48A(){
            console.log("48 ended");
            audio_index = 48;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}









