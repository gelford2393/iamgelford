// $(window).load( function (){
 
//    console.log('aww');
// });

const wordRotator = function() {
   var rotatorWords = [
      'I AM GELFORD PENARANDA',
      'I LIKE TO RIDE SCOOTER',
      'I AM A FAN OF ANIME SERIES'
   ] ,
   counter = 0;                
   setInterval(function() {
   $(".banner-text-rotator").fadeOut(function(){$(this).html(rotatorWords[counter=(counter+1)%rotatorWords.length]).fadeIn();});}, 4000 );
}
wordRotator();
let navMenu = $('#nav-menu');
$(document).ready(function(){
   "use strict"
   $("#status").fadeOut(3300);
   $("#preloader").delay(3500).fadeOut();
   let navBar = $('.nav-bar')
   $(window).scroll(function() {
      if (this.scrollY > 25) {
         navBar.addClass('sticky');
      } else {
         navBar.removeClass('sticky');
      }
   });
   $('.nav-bar-menu li a').click(() => {
      $('html').css('scrollBehavior', 'smooth');
   });
   $('.home .smooth-scroll').click(() => {
      $('html').css('scrollBehavior', 'smooth');
   })
   $('.nav-button').click(() => {
      $('.nav-bar .nav-bar-menu').toggleClass('active')
      $('.nav-button img').toggleClass('active')
   });
   $('.nav-bar .nav-bar-menu li a').click(() => {
      $('.nav-bar .nav-bar-menu').removeClass('active');
   });
   $(window).scroll(function(){
      if (this.scrollY > 1000) {
         $('.skills .skills-content .right .ofhtml').addClass('html');
         $('.skills .skills-content .right .ofcss').addClass('css');
         $('.skills .skills-content .right .ofjs').addClass('js');
         $('.skills .skills-content .right .ofphp').addClass('php');
         $('.skills .skills-content .right .ofmysql').addClass('mysql');
      } else {
         $('.skills .skills-content .right .ofhtml').removeClass('html');
         $('.skills .skills-content .right .ofcss').removeClass('css');
         $('.skills .skills-content .right .ofjs').removeClass('js');
         $('.skills .skills-content .right .ofphp').removeClass('php');
         $('.skills .skills-content .right .ofmysql').removeClass('mysql');
      }
   }); 
 });

