// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

$( document ).ready(function() {
   




$('.carousel').carousel({
  interval: false
});


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
      $('header nav').removeClass('about work skills experience contact'); 
      break;

    case "#about":
      $('header nav').addClass('about');
      $('header nav').removeClass('work skills experience contact');
      break;

    case "#work":
      $('header nav').addClass('work');
      $('header nav').removeClass('about skills experience contact');
      break

    case "#skills":
      $('header nav').addClass('skills');
      $('header nav').removeClass('about work experience contact');
      break

    case "#experience":
      $('header nav').addClass('experience');
      $('header nav').removeClass('about skills work contact');
      break

    case "#contact":
      $('header nav').addClass('contact');
      $('header nav').removeClass('about skills work experience');
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
      $('header nav').removeClass('about work skills experience contact'); 
      break;

    case "#about":
      $('header nav').addClass('about');
      $('header nav').removeClass('work skills experience contact');
      break;

    case "#work":
      $('header nav').addClass('work');
      $('header nav').removeClass('about skills experience contact');
      break

    case "#skills":
      $('header nav').addClass('skills');
      $('header nav').removeClass('about work experience contact');
      break

    case "#experience":
      $('header nav').addClass('experience');
      $('header nav').removeClass('about skills work contact');
      break

    case "#contact":
      $('header nav').addClass('contact');
      $('header nav').removeClass('about skills work experience');
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