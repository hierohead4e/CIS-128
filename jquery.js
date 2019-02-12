$(document).ready(function() {
	$("#animationButton").on("click", function() {
		var title = $("#title");
		var myPicture = $("#myPicture");
		myPicture.css("border", "2px solid black");
		title.animate({ fontSize: '3em' }, "1000");
		title.animate({ fontSize: '2em' }, "500", function() {
			title.css( "color", "red" );
		});
	});
});