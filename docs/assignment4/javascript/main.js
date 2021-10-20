$(document).ready(function() {
    // Handles swapping from dark to light.
  $("#frontLight").dblclick(function() {
    $("html").css("background-color", "#241e20");
    $("#frontLight").css("display", "none");
    $("#frontPage").css("display", "none");
    $("#backLight").css("display", "block");
  });

  // Handles the lightbulb/torch mechanic. Hover over lightbulb and carry it around.
  $("#backLight").draggable();
  $(document).mouseover(function() {
  if($("#backLight:hover").length != 0) {
      $("#backPage").fadeIn("slow").delay(5000);
  }
  else {
    $("#backPage").fadeOut("slow", function() {
    });
  }
  }); 
  

  // Handles turning on lightbulb in backPage.
  // $("#backLight").click(function() {
  //   $("#backPage").fadeToggle("slow", function() {
  //   });
  // });

    
  // Handles swapping from light to dark.
  $("#backLight").dblclick(function() {
    $("html").css("background-color", "white");
    $("#backLight").css("display", "none");
    $("#backPage").css("display", "none");
    $("#frontLight").css("display", "block");
    $("#frontPage").fadeIn("slow", function() {
    });
  });
  
  // Opens the double div containers on hover over image.
  $("#banner1").hover(function() {
    $(".doubleLeft").toggle("clip", 1000);
    $(".doubleRight").toggle("clip", 1000);
  });
  $("#banner2").hover(function() {
    $(".container").toggle("clip", 1000);
  });
  $(".smallContainer").toggle("clip", 1000);

  // Opens the images on button click.
  $("button").click(function() {
    $(".tripleLeft").toggle("scale");
    $(".tripleMid").toggle("scale");
    $(".tripleRight").toggle("scale");
  });
});