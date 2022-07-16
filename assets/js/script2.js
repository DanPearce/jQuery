$(document).ready(function(){
  $(".box").on("click", function(){
    let classNames = $(this).attr("class").split(" ");
    $("." + classNames[1]).css("background-color", "red")
  });
});