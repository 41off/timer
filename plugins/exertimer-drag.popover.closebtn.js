﻿/// uses jquery and jquery ui from 2021





   $( function() {
    $(".controlsL").draggable();
} );
//   $( function() {
//    $(").draggable({axis:"x"});
//  } );
   $( function() {
    $(".menubarB").draggable();
} );
   $( function() {
    $(".menubarL").draggable();
} );
   $( function() {
    $(".menubarR").draggable();
} );
   $( function() {
    $("#d3").draggable({axis :"y"});
} );
   $( function() {
    $(".convertor").draggable();
} );
   $( function() {
    $(".timer").draggable();
} );
   $( function() {
    $(".timerR").draggable();
} );
   $( function() {
    $(".popover").draggable();
} );




/// dropdown drag option ///

   $( function() {
    $(".footer").draggable();
} );

   $( function() {
    $(".dropdownR").draggable();
} );

$( function() {
    $( ".dirbtn" ).draggable();
  } );
  
$( function() {
    $( "#table" ).draggable();
  } );

$( function() {
    $( ".timer" ).resizable();
  } );
 
$( function() {
    $( "#table" ).resizable({axis :"x"});
  } );
  
$( function() {
    $( ".popover" ).resizable();
  } );
 

  

  




$(document).ready(function() {

 $('[data-toggle="popover"]').popover({
    placement: 'bottom',
    html: true,
    sanitize: false,
     
    title:function(){
          return $('.popover-title').html();
       },
       content:video
  });


  $('[data-toggle="popover"]').on("click", function() {
    $(this).popover('show');
           
 //   setTimeout(function () {
 //           timeout = $('.popover').fadeOut(120000);
 //       }, 5000);
    
  });





  
  $('.popmenu').on('click', function(e) {
  
    $('[data-toggle=popover]').each(function() {
       
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
        }
    });
  });
});






//  closbnt2 script below //





