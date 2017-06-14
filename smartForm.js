// Your jQuery goes here

var userData = {
	name:"",
	email:""
	html: {likes: [], dislikes:[]},
	css: {likes: [], dislikes:[]},
	js: {likes: [], dislikes:[]},
};

$("#startBtn").click(function(event){
	consile.log("Start Clicked")
	$("#welcome").hide();
	$("#q1").show();
});

$("#name").change(function(event){
	consile.log($("#name".val());
		if ("#name").val()){
		userData.name = $("#name").val();
	}
});
	$("#email").change(function(event){
		
	});

