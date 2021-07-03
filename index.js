// $(window).load( function (){
 
//    console.log('aww');
// });
var ut_word_rotator = function() {
   var ut_rotator_words = [
      'I AM GELFORD PENARANDA',
      'I LIKE TO RIDE SCOOTER',
      'I AM A FAN OF ANIME SERIES'
   ] ,
   counter = 0;                
   setInterval(function() {
   $(".banner-text-rotator").fadeOut(function(){$(this).html(ut_rotator_words[counter=(counter+1)%ut_rotator_words.length]).fadeIn();});}, 4000 );
}
ut_word_rotator();
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
   // $('#about').on('inview', function (event, visible) {
   //    if (visible === true) {
   //       var container = $("#about .title h1");
   //       container.shuffleLetters();
   //    }
   // });
   // $('.services').bind('inview', (event, visible) => {
   //    if (visible) {
   //       var container = $(".services h2");
   //       container.shuffleLetters();
   //    }
   // });
 });

