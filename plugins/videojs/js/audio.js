       
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
                               
                               
                               'https://www.dropbox.com/s/rbihmngpmtslxcx/001.mp3?raw=1',
                               'https://www.dropbox.com/s/ujdla2fgay6rkks/002.mp3?raw=1',
                               'https://www.dropbox.com/s/lseekrhq1ukfklk/003.mp3?raw=1',
                               'https://www.dropbox.com/s/r2bxwm3tgud2f6q/004.mp3?raw=1',
                               'https://www.dropbox.com/s/yud3ls27rum493x/005.mp3?raw=1',
                               'https://www.dropbox.com/s/4i792o4w8u3vj94/006.mp3?raw=1',
                               'https://www.dropbox.com/s/mcwhfzc3h5f2a2l/007.mp3?raw=1',
                               'https://www.dropbox.com/s/lyp22ce3nrflg6a/008.mp3?raw=1',
                               'https://www.dropbox.com/s/zorhcgykhjwon4r/009.mp3?raw=1',
                               'https://www.dropbox.com/s/yfqmkj1k60nhuhp/010.mp3?raw=1',
                               'https://www.dropbox.com/s/iqlpp1dw1e1kph6/011.mp3?raw=1',
                               'https://www.dropbox.com/s/dtkjklgp8dbiuok/012.mp3?raw=1',
                               'https://www.dropbox.com/s/5a5rjt6oypujw1y/013.mp3?raw=1',
                               'https://www.dropbox.com/s/g6ch59mcxdk3fjf/014.mp3?raw=1',
                               'https://www.dropbox.com/s/4txi0ee6e8pef3z/015.mp3?raw=1',
                               'https://www.dropbox.com/s/id3bz8sz40inq56/016.mp3?raw=1',
                               'https://www.dropbox.com/s/rbnzbypsir0koei/017.mp3?raw=1',
                               'https://www.dropbox.com/s/1iqak7tnwkrt74e/018.mp3?raw=1',
                               'https://www.dropbox.com/s/vfz8myjaoq92bm1/019.mp3?raw=1',
                               'https://www.dropbox.com/s/sut10mf7sc43tsa/020.mp3?raw=1',
                               'https://www.dropbox.com/s/ycupbxw680nky25/021.mp3?raw=1',
                               'https://www.dropbox.com/s/7g92qjekukpphqo/022.mp3?raw=1',
                               'https://www.dropbox.com/s/1lm7gjec9dbzm19/023.mp3?raw=1',
                               'https://www.dropbox.com/s/ek1wvzsk8stbib5/024.mp3?raw=1',
                               'https://www.dropbox.com/s/qoe1pxuq3y1zczr/025.mp3?raw=1',
                               'https://www.dropbox.com/s/iqd7hmt2kjznmu9/026.mp3?raw=1',
                               'https://www.dropbox.com/s/aqor65ee109nkhf/027.mp3?raw=1',
                               'https://www.dropbox.com/s/z8uzhg8s0n6ttpw/028.mp3?raw=1',
                               'https://www.dropbox.com/s/6ua2whj3a6yz411/029.mp3?raw=1',
                               'https://www.dropbox.com/s/nhuzzu7j19ex2yz/030.mp3?raw=1',
                               'https://www.dropbox.com/s/ukbjthn1g2a8z54/031.mp3?raw=1',
                               'https://www.dropbox.com/s/5ciltwf7s8ybqos/032.mp3?raw=1',
                               'https://www.dropbox.com/s/a8890qzhg8mrenv/033.mp3?raw=1',
                               'https://www.dropbox.com/s/epfjhimdgus4vg9/034.mp3?raw=1',
                               'https://www.dropbox.com/s/4n25ewxjmlhiiiv/035.mp3?raw=1',
                               'https://www.dropbox.com/s/dyd1ntb0jahu3vl/036.mp3?raw=1',
                               'https://www.dropbox.com/s/xuwgzwaubm8sbaw/037.mp3?raw=1',
                               'https://www.dropbox.com/s/7en89784qzus1qt/038.mp3?raw=1',
                               'https://www.dropbox.com/s/6uur1rqmsx3fcbw/039.mp3?raw=1',
                               'https://www.dropbox.com/s/2uhe0fnrdoztoa1/040.mp3?raw=1',
                               'https://www.dropbox.com/s/z1zacvputwbgau4/041.mp3?raw=1',
                               'https://www.dropbox.com/s/gtnqxbdo8ooyzbr/042.mp3?raw=1',
                               'https://www.dropbox.com/s/a6rvvihluutvkw4/043.mp3?raw=1',
                               'https://www.dropbox.com/s/j65eu9kwv6jqpno/044.mp3?raw=1',
                               'https://www.dropbox.com/s/wsbpm5l9mog580s/045.mp3?raw=1',
                               'https://www.dropbox.com/s/ulielujosei62iu/046.mp3?raw=1',
                               'https://www.dropbox.com/s/12yw7gy9fn74vk7/047.mp3?raw=1',
                               'https://www.dropbox.com/s/gl1xofsq24o666e/048.mp3?raw=1',
                               'https://www.dropbox.com/s/mnw6joyo9tosktm/049.mp3?raw=1',
                               'https://www.dropbox.com/s/1kt2tajqtqojk50/050.mp3?raw=1',
                               'https://www.dropbox.com/s/s3fq0pcqf5pcf6p/051.mp3?raw=1',
                               'https://www.dropbox.com/s/gjnsljmts8t8ido/052.mp3?raw=1',
                               'https://www.dropbox.com/s/gjnsljmts8t8ido/052.mp3?raw=1',
                               'https://www.dropbox.com/s/qfijq9lcttje67b/054.mp3?raw=1',
                               'https://www.dropbox.com/s/uehsfedof3f7mzu/055.mp3?raw=1',
                               'https://www.dropbox.com/s/koedkqsjbpt9ns9/056.mp3?raw=1',
                               'https://www.dropbox.com/s/bbrns41k1nud1f5/057.mp3?raw=1',
                               'https://www.dropbox.com/s/5y8xli6z6fn6aae/058.mp3?raw=1',
                               'https://www.dropbox.com/s/9esodkvh97ls67h/059.mp3?raw=1',
                               'https://www.dropbox.com/s/kpmw6d0yizaju7d/060.mp3?raw=1',
                               'https://www.dropbox.com/s/qn2y80c2gl1tzmm/061.mp3?raw=1',
                               'https://www.dropbox.com/s/fowe172exjplwjx/062.mp3?raw=1',
                               'https://www.dropbox.com/s/9ompi913c4w8dnw/063.mp3?raw=1',
                               'https://www.dropbox.com/s/lyx6zcwo36tc1mq/064.mp3?raw=1',
                               'https://www.dropbox.com/s/monq12o1kk0y10o/065.mp3?raw=1',
                               'https://www.dropbox.com/s/xxvmo8mgu11vscr/066.mp3?raw=1',
                               'https://www.dropbox.com/s/taimbd46vejydo8/067.mp3?raw=1',
                               'https://www.dropbox.com/s/oqu9my2fj0u8sar/068.mp3?raw=1',
                               'https://www.dropbox.com/s/2w7hdcfwohwz7xb/069.mp3?raw=1',
                               'https://www.dropbox.com/s/wj3ucy0tsibxcdo/070.mp3?raw=1',
                               'https://www.dropbox.com/s/urlj8xhyntocleh/071.mp3?raw=1',
                               'https://www.dropbox.com/s/mhap7yps0s1njhg/072.mp3?raw=1',
                               'https://www.dropbox.com/s/j1ju5r7jcahpq5v/073.mp3?raw=1',
                               'https://www.dropbox.com/s/t0b6bowheouusmp/074.mp3?raw=1',
                               'https://www.dropbox.com/s/ifs2o86vri76u56/075.mp3?raw=1',
                               'https://www.dropbox.com/s/w0orunqmdkwhvwv/076.mp3?raw=1',
                               'https://www.dropbox.com/s/tsdd8pucg5ev5v7/077.mp3?raw=1',
                               'https://www.dropbox.com/s/8pc328lpd0pfby3/078.mp3?raw=1',
                               'https://www.dropbox.com/s/u6d41g4bhge4osw/079.mp3?raw=1',
                               'https://www.dropbox.com/s/kw2h3h6k3x633ap/080.mp3?raw=1',
                               'https://www.dropbox.com/s/igi8r3s9xw1fgyq/081.mp3?raw=1',
                               'https://www.dropbox.com/s/4mai77qepkcsnfe/082.mp3?raw=1',
                               'https://www.dropbox.com/s/5dzsnv2n5wv2t2k/083.mp3?raw=1',
                               'https://www.dropbox.com/s/pi21c6mnfla7ub3/084.mp3?raw=1',
                               'https://www.dropbox.com/s/8i9soqptctjaizx/085.mp3?raw=1',
                               'https://www.dropbox.com/s/wyrt05v46v32oo1/086.mp3?raw=1',
                               'https://www.dropbox.com/s/chi547f46t75hci/087.mp3?raw=1',
                               'https://www.dropbox.com/s/fu1yy34iqz6p6da/088.mp3?raw=1',
                               'https://www.dropbox.com/s/7wjb21frg7gc3la/089.mp3?raw=1',
                               'https://www.dropbox.com/s/ll7oukg4l1hxy09/090.mp3?raw=1',
                               'https://www.dropbox.com/s/ujqoc8aerpxaq6p/091.mp3?raw=1',
                               'https://www.dropbox.com/s/5kvpu94gnyu8nyb/092.mp3?raw=1',
                               'https://www.dropbox.com/s/o3t7snjvih7h139/093.mp3?raw=1',
                               'https://www.dropbox.com/s/29b3mqkxw3875d5/094.mp3?raw=1',
                               'https://www.dropbox.com/s/1fypmcujbmujqs1/095.mp3?raw=1',
                               'https://www.dropbox.com/s/0g7d047tq323xed/096.mp3?raw=1',
                               'https://www.dropbox.com/s/ofm1fgd716ved90/097.mp3?raw=1',
                               'https://www.dropbox.com/s/sxgcdmqjniyoxtv/098.mp3?raw=1',
                               'https://www.dropbox.com/s/37x0tlwxivm95rx/099.mp3?raw=1',
                               
                               'https://www.dropbox.com/s/xme6tegllb4srwy/S3E4-PathOfTheHandle.mp3?raw=1',

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




   function on49A(){
            console.log("49 ended");
            audio_index = 49;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on50A(){
            console.log("50 ended");
            audio_index = 50;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on51A(){
            console.log("51 ended");
            audio_index = 51;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on52A(){
            console.log("52 ended");
            audio_index = 52;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on53A(){
            console.log("53 ended");
            audio_index = 53;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on54A(){
            console.log("54 ended");
            audio_index = 54;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on55A(){
            console.log("55 ended");
            audio_index = 55;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on56A(){
            console.log("56 ended");
            audio_index = 56;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on57A(){
            console.log("57 ended");
            audio_index = 57;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on58A(){
            console.log("58 ended");
            audio_index = 58;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on59A(){
            console.log("59 ended");
            audio_index = 59;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on60A(){
            console.log("60 ended");
            audio_index = 60;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}



          function on61A(){
           console.log("61 ended");
           audio_index = 61;
           audio_player.setAttribute("src", audio_directory[audio_index]);
           audio_player.play();       
}
       
          function on62A(){
            console.log("62 ended");
            audio_index = 62;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
         
}
        
        
           function on63A(){
            console.log("63 ended");
            audio_index = 63;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
                        
}      

   function on64A(){
            console.log("64 ended");
            audio_index = 64;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on65A(){
            console.log("65 ended");
            audio_index = 65;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on66A(){
            console.log("66 ended");
            audio_index = 67;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on67A(){
            console.log("67 ended");
            audio_index = 67;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on68A(){
            console.log("68 ended");
            audio_index = 68;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on69A(){
            console.log("69 ended");
            audio_index = 69;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on70A(){
            console.log("70 ended");
            audio_index = 70;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on71A(){
            console.log("71 ended");
            audio_index = 71;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on72A(){
            console.log("72 ended");
            audio_index = 72;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on73A(){
            console.log("73 ended");
            audio_index = 73;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on74A(){
            console.log("74 ended");
            audio_index = 74;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on75A(){
            console.log("75 ended");
            audio_index = 75;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on76A(){
            console.log("76 ended");
            audio_index = 76;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on77A(){
            console.log("77 ended");
            audio_index = 77;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on78A(){
            console.log("78 ended");
            audio_index = 78;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on79A(){
            console.log("79 ended");
            audio_index = 79;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on80A(){
            console.log("80 ended");
            audio_index = 80;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on81A(){
            console.log("81 ended");
            audio_index =81;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on82A(){
            console.log("82 ended");
            audio_index = 82;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on83A(){
            console.log("83 ended");
            audio_index = 83;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on84A(){
            console.log("84 ended");
            audio_index = 84;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on85A(){
            console.log("85 ended");
            audio_index = 85;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on86A(){
            console.log("86 ended");
            audio_index = 86;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on87A(){
            console.log("87 ended");
            audio_index = 87;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}


   function on88A(){
            console.log("88 ended");
            audio_index = 88;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on89A(){
            console.log("89 ended");
            audio_index = 89;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on90A(){
            console.log("90 ended");
            audio_index = 90;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on91A(){
            console.log("91 ended");
            audio_index = 91;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on92A(){
            console.log("92 ended");
            audio_index = 92;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on93A(){
            console.log("93 ended");
            audio_index = 93;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on94A(){
            console.log("94 ended");
            audio_index = 94
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on95A(){
            console.log("95 ended");
            audio_index = 95;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on96A(){
            console.log("96 ended");
            audio_index = 96;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on97A(){
            console.log("97 ended");
            audio_index = 97;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on98A(){
            console.log("98 ended");
            audio_index = 98;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on99A(){
            console.log("99 ended");
            audio_index = 99;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}


   function on100A(){
            console.log("100 ended");
            audio_index = 100;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on101A(){
            console.log("101 ended");
            audio_index = 101;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on102A(){
            console.log("102 ended");
            audio_index = 102;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on103A(){
            console.log("103 ended");
            audio_index = 103;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on104A(){
            console.log("104 ended");
            audio_index = 104;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on105A(){
            console.log("105 ended");
            audio_index = 105;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on106A(){
            console.log("106ended");
            audio_index = 106;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on107A(){
            console.log("107 ended");
            audio_index = 107;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on108A(){
            console.log("108 ended");
            audio_index = 108;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on109A(){
            console.log("109 ended");
            audio_index = 109
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on110A(){
            console.log("110 ended");
            audio_index =110;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on111A(){
            console.log("111 ended");
            audio_index = 111;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

  function on112A(){
            console.log("112 ended");
            audio_index = 112;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on113A(){
            console.log("113 ended");
            audio_index = 113;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on114A(){
            console.log("114 ended");
            audio_index = 114;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on115A(){
            console.log("115 ended");
            audio_index = 115;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on116A(){
            console.log("116 ended");
            audio_index = 116;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on117A(){
            console.log("117 ended");
            audio_index = 117;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on118A(){
            console.log("118 ended");
            audio_index = 118;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on119A(){
            console.log("119 ended");
            audio_index = 119;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on120A(){
            console.log("120 ended");
            audio_index = 120
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on121A(){
            console.log("121 ended");
            audio_index =121;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on122A(){
            console.log("122 ended");
            audio_index = 122;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}



   function on123A(){
            console.log("123 ended");
            audio_index = 123;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on124A(){
            console.log("124 ended");
            audio_index = 124;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on125A(){
            console.log("125 ended");
            audio_index = 125;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on126A(){
            console.log("126 ended");
            audio_index = 126;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on127A(){
            console.log("127 ended");
            audio_index = 127;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on128A(){
            console.log("105 ended");
            audio_index = 128;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on129A(){
            console.log("129 ended");
            audio_index = 129;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on130A(){
            console.log("130 ended");
            audio_index = 130;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on131A(){
            console.log("131 ended");
            audio_index = 131;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on132A(){
            console.log("32 ended");
            audio_index = 132
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on133A(){
            console.log("133 ended");
            audio_index =133;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on134A(){
            console.log("34 ended");
            audio_index = 134;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

  function on135A(){
            console.log("135 ended");
            audio_index = 135;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on136A(){
            console.log("136 ended");
            audio_index = 136;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on137A(){
            console.log("137 ended");
            audio_index = 137;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on138A(){
            console.log("138 ended");
            audio_index = 138;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on139A(){
            console.log("139 ended");
            audio_index = 139;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on140A(){
            console.log("140 ended");
            audio_index = 140;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on141A(){
            console.log("141 ended");
            audio_index = 141;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on142A(){
            console.log("142 ended");
            audio_index = 142;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on143A(){
            console.log("143 ended");
            audio_index = 143
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on144A(){
            console.log("144 ended");
            audio_index =144;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on145A(){
            console.log("145 ended");
            audio_index =145;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

   function on146A(){
            console.log("146 ended");
            audio_index =146;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}

  function on147A(){
            console.log("147 ended");
            audio_index =147;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}


  function on148A(){
            console.log("148 ended");
            audio_index =148;
            audio_player.setAttribute("src", audio_directory[audio_index]);
            audio_player.play();
}










