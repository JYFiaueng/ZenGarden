requirejs.config({
	paths:{
		jquery : "jquery-2.2.2.min.js"
	}
});

requirejs(["jquery", "backTop"], function($, backtop){
	$("#extraDiv1").backTop({
		mode:"move",
		speed: 400
	});
});