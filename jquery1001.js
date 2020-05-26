$(document).ready(function(){
  $("button.index").click(function(){
    $("p").slideToggle();
    $("p:second").show();
  });
  $("#btn1").click(function(){
    $("#first").text("Computer Architecture");
    $("#firstclass").text("Tandon School of Engineering");
    $("#firstcredit").text("4");
    $("#second").text("Algorithms");
    $("#secondclass").text("Tandon School of Engineering");
    $("#secondcredit").text("3");
    $("#third").text("Computer Networking");
    $("#thirdclass").text("Tandon School of Engineering");
    $("#thirdcredit").text("3");
    $("#fourth").text("African American Vernacular English");
    $("#fourthclass").text("College of Arts and Sciences");
    $("#fourthcredit").text("4");
    $("#fifth").text("Hip Hop Dance Culture");
    $("#fifthclass").text("Steinhardt School of Culture, Education, and Human Development");
    $("#fifthcredit").text("2");
  });
  $("button.second").click(function(){
    $("p").css("background-color", "white");
  });
  $("button.fourth").click(function(){
    $("img").fadeOut();
  });
  
  $("commentForm").validate();
});