$(document).ready(function () {
    // Hide the mobile menu initially
    $('.mobile_menu').hide();
  
    $('#btn_open').click(function () {
      // Show the mobile menu
      $('.mobile_menu').show();
    });
  
    $('#btn_close').click(function () {
      // Hide the mobile menu
      $('.mobile_menu').hide();
    });
  });
  