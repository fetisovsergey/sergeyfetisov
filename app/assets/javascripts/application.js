// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
  $(document).ready(function() { 
  	  var $ = jQuery.noConflict();
      $('#myCarousel1').carousel({ interval: 3000, cycle: true, pause: false });
      $('#myCarousel2').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel3').carousel({ interval: 8000, cycle: true, pause: false });
      $('#myCarousel4').carousel({ interval: 3000, cycle: true, pause: false });
      $('#myCarousel5').carousel({ interval: 9000, cycle: true, pause: false });
      $('#myCarousel6').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel7').carousel({ interval: 8000, cycle: true, pause: false });
      $('#myCarousel8').carousel({ interval: 10000, cycle: true, pause: false });
      $('#myCarousel9').carousel({ interval: 5000, cycle: true, pause: false });
      $('#myCarousel10').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel27').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel13').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel14').carousel({ interval: 8000, cycle: true, pause: false });
      $('#myCarousel15').carousel({ interval: 4000, cycle: true, pause: false });
      $('#myCarousel16').carousel({ interval: 3000, cycle: true, pause: false });
      $('#myCarousel17').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel18').carousel({ interval: 3000, cycle: true, pause: false });
      $('#myCarousel19').carousel({ interval: 4000, cycle: true, pause: false });
      $('#myCarousel20').carousel({ interval: 5000, cycle: true, pause: false });
      $('#myCarousel21').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel22').carousel({ interval: 8000, cycle: true, pause: false });
      $('#myCarousel23').carousel({ interval: 6000, cycle: true, pause: false });
      $('#myCarousel24').carousel({ interval: 3000, cycle: true, pause: false });
      $('#myCarousel25').carousel({ interval: 4000, cycle: true, pause: false });
      $('#myCarousel26').carousel({ interval: 3000, cycle: true, pause: false });
  }); 