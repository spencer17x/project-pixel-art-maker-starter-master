


// When size is submitted by the user, call makeGrid()

function makeGrid() {

	$("#pixelCanvas").empty();//clean table

	var  color,width,height;

	width = $("#inputWeight").val();
	height = $("#inputHeight").val();// Select size input

	if (width > 30 && height <= 30) {
		alert("the width is over 30,please enter a number not more than 30");
	} else if (width <= 30 && height > 30) {
		alert("the height is over 30,please enter a number not more than 30");
	} else if (height > 30 && width > 30) {
		alert("please enter a number not more than 30");
	} else {
		for (var i = 0; i < height; i++) {
			$("#pixelCanvas").append("<tr></tr>");
			for (var j = 0; j < width; j++) {
				$("tr").eq(i).append("<td></td>");
			}
		}
	}

	$("td").click(function (e) {
		color = $("#colorPicker").val();// Select color
		$(e.target).css("background",color);
	});

}

$("#btn").click(makeGrid);

$(function () {
	$("#rst").click(function () {
		$("#pixelCanvas").empty();
	});
});

