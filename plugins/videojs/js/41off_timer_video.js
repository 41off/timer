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
   
 
   
   
  
        var videoR_directory = ['https://www.dropbox.com/s/cef0z3gdft153s1/XLaneVsHitch.mp4?raw=1',
                                'https://www.dropbox.com/s/ss5q4l3cq3vahx3/XJBP_12_rules.mp4?raw=1',
                                'https://www.dropbox.com/s/yeoi0mso09tqkw7/XJBP_12Rules_Tour_02-16-2019.mp4?raw=1',
                                'https://www.dropbox.com/s/5xb98xprifqw810/XJBP_Theism.mp4?raw=1',
                                'https://www.dropbox.com/s/3uw657r6nerdm88/XTurekvsHitchens.mp4?raw=1',
                                'https://www.dropbox.com/s/y1kprh51kcm1q39/XAllenParrFalsehoods.mp4?raw=1',
                                'https://www.dropbox.com/s/cqyr9r63yr6ej64/X7_Essential_Knots.mp4?raw=1',
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
                             'https://www.dropbox.com/scl/fi/ilhspitr1qwvilwgrteah/Longevity-Training.mp4?rlkey=vjqh792bkrvj882te85uxgoad&raw=1',
                             'https://www.dropbox.com/s/k59bbd1yhybb3gh/XImpingement.mp4?raw=1',
                             'https://www.dropbox.com/s/jasjosa8fo55x8y/XPerfectShoulderWorkout.mp4?raw=1',
                             'https://www.dropbox.com/s/xgf7k7v89b5m9vd/XRotatorCuffExercises.mp4?raw=1',
                             'https://www.dropbox.com/s/c4w76a9kb893a1b/XRotatorCuffExerciseMyths.mp4?raw=1',
                             'https://www.dropbox.com/s/3iezsqiaolub43g/XNeck1.mp4?raw=1',
                             'https://www.dropbox.com/s/en3jex3gpfqk0pm/XStiffNeck.mp4?raw=1',
                             'https://www.dropbox.com/s/cutfo76owr1shin/X2BackStretches.mp4?raw=1',
                             'https://www.dropbox.com/s/opba225bqkdqt9i/XLBPC.mp4?raw=1',
                             'https://www.dropbox.com/s/cqo8bktmhbzatzv/XQuadratusLumborumStretch.mp4?raw=1',
                             'https://www.dropbox.com/s/odnyngndjwh6utq/XPiriformis.mp4?raw=1',
                             'https://www.dropbox.com/scl/fi/369lspmc3zyoz5wd4vz7y/Glutes.mp4?rlkey=ptxxa64q29tkysbfa6a2yfjn2&raw=1',
                             'https://www.dropbox.com/scl/fi/qkd5iwiyil6p6h9l471uk/Glutes-Hamstrings.mp4?rlkey=udhzzzgzrlmwjwssjd81wg9xa&raw=1',
                             'https://www.dropbox.com/s/qj4qwbct1ilm2ic/XMedius.mp4?raw=1',
                             'https://www.dropbox.com/s/cof4htyz4rrf733/XMaximus.mp4?raw=1',
                             'https://www.dropbox.com/s/uq38omei6tq4vi8/X22DayGlutes.mp4?raw=1',
                             'https://www.dropbox.com/s/eonw9ztvbdsae05/X22Day_Hamstring_Flexibility.mp4?raw=1',
                             'https://www.dropbox.com/s/to14p7stkhr4fhq/XHips.mp4?raw=1',
                             'https://www.dropbox.com/s/w4yvx6616fb191l/XBarbellHipThrusts.mp4?raw=1',
                             'https://www.dropbox.com/scl/fi/dikutfmjnb0q0kv9uye1x/AB-Workout-5-min.mp4?rlkey=m0c9ydtx9pq7tot6dkt79v8hj&raw=1',
                             'https://www.dropbox.com/scl/fi/62g31y7gdyvfl709zd5x5/AB-Workout-10-min.mp4?rlkey=bci8v8xnjnh3fs72z4t69z9iv&raw=1',
                             'https://www.dropbox.com/scl/fi/uyugwuviv9d8ewqtwjc0g/ChestWorkout-10min.mp4?rlkey=sypeuh5zq5mgq9jxwhvorabgl&raw=1',
                             'https://www.dropbox.com/s/q6zbxoifj8bcv2x/XAchillesAlfredson.mp4?raw=1',
                             'https://www.dropbox.com/s/bhyj2t3o02szyo1/XProneDecompression.mp4?raw=1',
                             'https://www.dropbox.com/s/2hrwt41hu737jo1/XStaticLunge.mp4?raw=1',
                             'https://www.dropbox.com/s/e006shc7j8msq5d/XYogaDude.mp4?raw=1',
                             'https://www.dropbox.com/s/i8mn7t1q8bkttqv/XFoundationTrainingHelpingPain.mp4?raw=1',
                             'https://www.dropbox.com/s/qccjjb8ix4wkbas/XBasicFoundationTraining.mp4?raw=1',
                             'https://www.dropbox.com/s/jw2glcg9yr05ojv/X4MinuteFoundation.mp4?raw=1',
                             'https://www.dropbox.com/s/e006shc7j8msq5d/XYogaDude.mp4?raw=1',
                                              
                             
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
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
       function onvideoNextR2(){
            console.log("videoR2 next");
            if(videoR2_index < videoR2_directory.length - 1){
                videoR2_index++;
            }
            else{
                videoR2_index = 1;
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
           
          function on2R2(){
            console.log("2 ended");
            videoR2_index = 2;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

                   
         }
                      
          function on3R2(){
            console.log("3 ended");
            videoR2_index = 3;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
          function on4R2(){
            console.log("4 ended");
            videoR2_index = 4;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
           
         function on5R2(){
            console.log("5 ended");
            videoR2_index = 5;            
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
         function on6R2(){
            console.log("6 ended");
            videoR2_index = 6;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
         
          function on7R2(){
            console.log("7 ended");
            videoR2_index = 7;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
          function on8R2(){
            console.log("8 ended");
            videoR2_index = 8;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
          function on9R2(){
           console.log("9 ended");
           videoR2_index = 9;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
          function on10R2(){
           console.log("10 ended");
           videoR2_index = 10;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }

          function on11R2(){
            console.log("11 ended");
            videoR2_index = 11;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

                       
         }
        
        function on12R2(){
            console.log("12 ended");
            videoR2_index = 12;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

           
         }
           
          function on13R2(){
            console.log("13 ended");
            videoR2_index = 13;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

                   
         }
                      
          function on14R2(){
            console.log("14 ended");
            videoR2_index = 14;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
          function on15R2(){
            console.log("15 ended");
            videoR2_index = 15;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
           
         function on16R2(){
            console.log("16 ended");
            videoR2_index = 16;            
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
         function on17R2(){
            console.log("17 ended");
            videoR2_index = 17;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
         
          function on18R2(){
            console.log("18 ended");
            videoR2_index = 18;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();
        }
        
          function on19R2(){
            console.log("19 ended");
            videoR2_index = 19;
            videoR2_player = document.getElementsByTagName("video")[0];
            videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
            videoR2_player.play();

        }
        
          function on20R2(){
           console.log("20 ended");
           videoR2_index = 20;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
          function on21R2(){
           console.log("21 ended");
           videoR2_index = 21;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       

          function on22R2(){
           console.log("22 ended");
           videoR2_index = 22;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
      
          function on23R2(){
           console.log("23 ended");
           videoR2_index = 23;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
          function on24R2(){
           console.log("24 ended");
           videoR2_index = 24;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }


       function on25R2(){
           console.log("25 ended");
           videoR2_index = 25;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
         function on26R2(){
           console.log("26 ended");
           videoR2_index = 26;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
 
     function on27R2(){
           console.log("7 ended");
           videoR2_index = 27;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
          function on28R2(){
           console.log("28 ended");
           videoR2_index = 28;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }


       function on29R2(){
           console.log("29 ended");
           videoR2_index = 29;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }
       
         function on30R2(){
           console.log("30 ended");
           videoR2_index = 30;
           videoR2_player = document.getElementsByTagName("video")[0];
           videoR2_player.setAttribute("src", videoR2_directory[videoR2_index]);
           videoR2_player.play();
       }


       

       
       

    










