﻿       
 function onloadR(){
            console.log("body loaded");
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.volume = 0.2;
            videoR_player.currentSrc();
            videoR_player.currentTime();
            
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.volume = 0.2;
            videoR2_player.currentSrc();
            videoR2_player.currentTime();

            timerR.start(10)
   }
  
/// all right side below //

 function ClickStartR() {
    timerR.stop();
    timerR.mode(1);
    videoR_player.play();
    videoR.playbackRate = 1.0; 
   }
   
  function ClickPauseR(){
    timerR.start(10);
    videoR_player.pause();
   }
   
  function onPauseR(){
    timerR.stop();
    videoR_player.pause();
   }
  
  function multiStopR() {
    timerR.stop();
    timerR.reset(0000);
    videoR_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartR() {
      var btn = document.getElementById("R5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
       if (btn.value == "Play Right") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Play";
             btn.innerHTML = "Pause";
             videoR_player.play();
             
                }
         else {
             btn.value = "Play Right";
             btn.innerHTML = "Pause";
             videoR_player.pause();
              }
              
     if(videoR_player.paused){
      
      timerR.start(10);
      timerR.mode(1);      
      videoR_player.play();
      videoR.playbackRate = 1.0;
     } 
       else {
            timerR.stop();
            videoR_player.pause();
            clearInterval(rewind);
         }
 }
 
 
 
  function multiResetR() {
    timerR.reset(0000)
   }
   
 
   
   
  
        var videoR_directory = ['https://www.dropbox.com/s/7mok9cprxrdrryq/XEasternWisdomSadhguru.mp4?raw=1',
                                'https://www.dropbox.com/s/iz4t7sfhte5ii2c/XPowerBeingAloneSadhguru.mp4?raw=1',
                                'https://www.dropbox.com/s/67km5q2s6u1q5bm/XConsciousnessUltimateIntelligenceSadhguru.mp4?raw=1',
                                'https://www.dropbox.com/s/gw1298kfmmob2aq/XPG-08-14-2021b.mp4?raw=1',
                                'https://www.dropbox.com/s/um8jz1a2p63idxe/10-10-2021-14_52.mp4?raw=1',
                                'https://www.dropbox.com/s/365bhju44j7zlj7/V1.mp4?raw=1',
                                'https://www.dropbox.com/s/43ewvwpf48p1qos/v2.mp4?raw=1',
                                'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                                'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1'
                               ];                      
 
  
        var videoR_index = 0;
        var videoR_player = null;
        var videoR = document.getElementsByTagName("video")[0];  
       
            
       function onvideoEndedR(){
            console.log("videoR ended");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index++;
            }
            else{
                videoR_index = 1;
            }
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
       function onvideoNextR(){
            console.log("videoR next");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index++;
            }
            else{
                videoR_index = 1;
            }
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
       function onvideoBackR(){
              console.log("videoR back");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index--;
            }
            else{
                videoR_index--;
            }
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
            
       function on0R(){
            console.log("0 ended");
            videoR_index = 0;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();

                       
         }
        
        function on1R(){
            console.log("1 ended");
            videoR_index = 1;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();

           
         }
           
          function on2R(){
            console.log("2 ended");
            videoR_index = 2;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();

                   
         }
                      
          function on3R(){
            console.log("3 ended");
            videoR_index = 3;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on4R(){
            console.log("4 ended");
            videoR_index = 4;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
           
         function on5R(){
            console.log("5 ended");
            videoR_index = 5;            
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
         function on6R(){
            console.log("6 ended");
            videoR_index = 6;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
         
          function on7R(){
            console.log("7 ended");
            videoR_index = 7;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on8R(){
            console.log("8 ended");
            videoR_index = 8;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on9R(){
           console.log("9 ended");
           videoR_index = 9;
           videoR_player = document.getElementsByTagName("video")[0];
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           videoR_player.play();
       }
       
          function on10R(){
           console.log("10 ended");
           videoR_index = 10;
           videoR_player = document.getElementsByTagName("video")[0];
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           videoR_player.play();
       }
       
       
       
   //   directory two below //
   
    var videoR2_directory = ['https://www.dropbox.com/s/76ie7lw8412m2lb/X4MustStretches.mp4?raw=1',
                             'https://www.dropbox.com/s/k59bbd1yhybb3gh/XImpingement.mp4?raw=1',
                             'https://www.dropbox.com/s/3iezsqiaolub43g/XNeck1.mp4?raw=1',
                             'https://www.dropbox.com/s/en3jex3gpfqk0pm/XStiffNeck.mp4?raw=1',
                             'https://www.dropbox.com/s/cutfo76owr1shin/X2BackStretches.mp4?raw=1',
                             'https://www.dropbox.com/s/opba225bqkdqt9i/XLBPC.mp4?raw=1',
                             'https://www.dropbox.com/s/cqo8bktmhbzatzv/XQuadratusLumborumStretch.mp4?raw=1',
                             'https://www.dropbox.com/s/odnyngndjwh6utq/XPiriformis.mp4?raw=1',
                             'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1',
                             'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                             'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1',
                             'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                             'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1',
                             'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                             'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1'



                             ];                      
 
  
        var videoR2_index = 0;
        var videoR2_player = null;
        var videoR2 = document.getElementsByTagName("video")[0];  
       
            
       function onvideoEndedR2(){
            console.log("videoR2 ended");
            if(videoR2_index < videoR2_directory.length - 1){
                videoR2_index++;
            }
            else{
                videoR2_index = 1;
            }
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
       function onvideoNextR2(){
            console.log("videoR next");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index++;
            }
            else{
                videoR_index = 1;
            }
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
       function onvideoBackR2(){
              console.log("videoR2 back");
            if(videoR2_index < videoR2_directory.length - 1){
                videoR2_index--;
            }
            else{
                videoR2_index--;
            }
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
            
       function on0R2(){
            console.log("0 ended");
            videoR2_index = 0;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

                       
         }
        
        function on1R2(){
            console.log("1 ended");
            videoR2_index = 1;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

           
         }
           
          function on2R(){
            console.log("2 ended");
            videoR_index = 2;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();

                   
         }
                      
          function on3R(){
            console.log("3 ended");
            videoR_index = 3;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on4R(){
            console.log("4 ended");
            videoR_index = 4;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
           
         function on5R(){
            console.log("5 ended");
            videoR_index = 5;            
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
         function on6R(){
            console.log("6 ended");
            videoR_index = 6;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
         
          function on7R(){
            console.log("7 ended");
            videoR_index = 7;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on8R(){
            console.log("8 ended");
            videoR_index = 8;
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
          function on9R(){
           console.log("9 ended");
           videoR_index = 9;
           videoR_player = document.getElementsByTagName("video")[0];
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           videoR_player.play();
       }
       
          function on10R(){
           console.log("10 ended");
           videoR_index = 10;
           videoR_player = document.getElementsByTagName("video")[0];
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           videoR_player.play();
       }

    










