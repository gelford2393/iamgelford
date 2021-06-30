let navMenu = $('#nav-menu');
$(document).ready(function(){
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
   $('.nav-button').click(() => {
      $('.nav-bar .nav-bar-menu').toggleClass('active')
      $('.nav-button img').toggleClass('active')
   });
   $('.nav-bar .nav-bar-menu li a').click(() => {
      $('.nav-bar .nav-bar-menu').removeClass('active');
   })
 });

