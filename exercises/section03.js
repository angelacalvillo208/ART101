let count = 0;
$("#kitty-button").click( function() {
   count = count + 1;
   $("#kitty-button").html("hello kitty" + " Hangouts: " + count + " times");
   if (count==5) { $("#kitty-button").html("You've hung out 5 times! Try hanging out with someone else."); count=0; } // new line


});
