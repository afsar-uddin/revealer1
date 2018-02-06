// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user ineration

 //Hide spoiler
 $(".spoiler span").hide();
 //Add a button
 $(".spoiler").append("<button>Reveal Spoiler</button>")
 //When button pressed
 $(".spoiler button").click(function(){
	// Show spoiler
 	// $(".spoiler span").show("slow");
 	$(this).prev().show("show");
	// Get rid of button
 	$(this).remove();
 });
