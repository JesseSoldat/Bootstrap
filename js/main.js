// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

$( document ).ready(function() {
   



//Carousel rotates
$('.carousel').carousel({
  interval: false
});


//Carousel Indicators
  var slideqty = $('#home .item').length;
//Automatically generate indicators
  for (var i = 0; i < slideqty; i++) {
    var insertText = '<li data-target="#home" data-slide-to="' + i + '" ></li>';
    var ol = $('#home ol');
    $('ol').append(insertText);
  }
  
  $( "ol li" ).first().addClass( "active" );



//Change the Nav color each time a new photo in shown 
$('.carousel').on('slide.bs.carousel', function (ev) {
  // console.log(ev);
  var id = ev.relatedTarget.id;
  // console.log(id);
  switch (id) {

    case "jp1":
      $('header nav').addClass('jp1');
      $('header nav').removeClass('jp2 hi3 hi4 th5 th6');
      break;

    case "hi3":
      $('header nav').addClass('hi3');
      $('header nav').removeClass('jp1 jp2 hi4 th5 th6');
      break;

    case "th6":
      $('header nav').addClass('th6');
      $('header nav').removeClass('jp1 jp2 hi3 hi4 th5');
      break;

    case "jp2":
      $('header nav').addClass('jp2');
      $('header nav').removeClass('jp1 hi3, hi4 th5 th6');
      break;

    case "hi4":
      $('header nav').addClass('hi4');
      $('header nav').removeClass('jp1 jp2 hi3 th5 th6');
      break;

    case "th5":
      $('header nav').addClass('th5');
      $('header nav').removeClass('jp1 jp2 hi3 hi4 th6');
      break;

    default:
      console.log('default');
  }
})

  var topoffset = 50;

  // Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });
  //Target the BODY without JAVASCRIPT
  //data-spy="scroll" data-target=".navbar-fixed-top" BODY TAG

  //Add an inbody class on PAGE LOAD
    var hash = $(this).find('li.active a').attr('href');

    switch (hash) {
    case "#home":
      $('header nav').addClass('jp1');
      $('header nav').removeClass('about work skills experience contact jp2 hi3 hi4 th5 th6'); 
      break;

    case "#about":
      $('header nav').addClass('about');
      $('header nav').removeClass('work skills experience contact jp1 jp2 hi3 hi4 th5 th6');
      break;

    case "#work":
      $('header nav').addClass('work');
      $('header nav').removeClass('about skills experience contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#skills":
      $('header nav').addClass('skills');
      $('header nav').removeClass('about work experience contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#experience":
      $('header nav').addClass('experience');
      $('header nav').removeClass('about skills work contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#contact":
      $('header nav').addClass('contact');
      $('header nav').removeClass('about skills work experience jp1 jp2 hi3 hi4 th5 th6');
      break

    default:
    
   }


  //Add an inbody class on event fired
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){

    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#home') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });

   //Add an inbody class on event fired
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){

     var hash = $(this).find('li.active a').attr('href');

    switch (hash) {
    case "#home":
      $('header nav').addClass('jp1');
      $('header nav').removeClass('about work skills experience contact jp2 hi3 hi4 th5 th6'); 

      var active = $('div.active').attr('id');
      console.log(active);

      //check to see which image is displaying

      switch (active) {
        case "jp1":
          console.log('case jp1');
          $('header nav').addClass('jp1');
          $('header nav').removeClass('about work skills experience contact jp2 hi3 hi4 th5 th6'); 
          break;

        case "hi3":
          console.log('case hi3');
          $('header nav').addClass('hi3');
          $('header nav').removeClass('about work skills experience contact jp1 jp2 hi4 th5 th6');
          break;

        case "th6":
          $('header nav').addClass('th6');
          $('header nav').removeClass('about work skills experience contactjp1 jp2 hi3 hi4 th5');
          break;

        case "jp2":
          $('header nav').addClass('jp2');
          $('header nav').removeClass('about work skills experience contact jp1 hi3, hi4 th5 th6');
          break;

        case "hi4":
          $('header nav').addClass('hi4');
          $('header nav').removeClass('about work skills experience contact jp1 jp2 hi3 th5 th6');
          break;

        case "th5":
          $('header nav').addClass('th5');
          $('header nav').removeClass('about work skills experience contact jp1 jp2 hi3 hi4 th6');
          break;

          default:
        }
      break;

           

    case "#about":
      $('header nav').addClass('about');
      $('header nav').removeClass('work skills experience contact jp1 jp2 hi3 hi4 th5 th6');
      break;

    case "#work":
      $('header nav').addClass('work');
      $('header nav').removeClass('about skills experience contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#skills":
      $('header nav').addClass('skills');
      $('header nav').removeClass('about work experience contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#experience":
      $('header nav').addClass('experience');
      $('header nav').removeClass('about skills work contact jp1 jp2 hi3 hi4 th5 th6');
      break

    case "#contact":
      $('header nav').addClass('contact');
      $('header nav').removeClass('about skills work experience jp1 jp2 hi3 hi4 th5 th6');
      break

    default:
    
   }

  }); //event fired

//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 1000);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling



}); //on page load