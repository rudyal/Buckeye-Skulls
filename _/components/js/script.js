
$( document ).ready(function() {

		$("#togglemenu").click(function(){
		  $(this).next("ul.nav").toggle();
		  $(this).toggleClass("active");
		});

		
		$("a#light").fancybox();
});

$(window).resize(function() {
  //resize just happened, pixels changed
    if ($(window).width() > 672) {
	   //alert('Less than 960');
	   $('ul.nav').show();
	}
	else {
		
	   //alert('More than 960');
	}
});


$("#bu-all").click(function(){
    myFunction("all");
});

$("#bu-camos").click(function(){
    myFunction("camos");
});

$("#bu-plaques").click(function(){
    myFunction("plaques");
});

$("#bu-beetles").click(function(){
    myFunction("beetles");
});

$("#bu-all2").click(function(){
    myFunction("all");
});

$("#bu-bear").click(function(){
    myFunction("bear");
});

$("#bu-boar").click(function(){
    myFunction("boar");
});

$("#bu-bobcat").click(function(){
    myFunction("bobcat");
});

$("#bu-coyote").click(function(){
    myFunction("coyote");
});

$("#bu-deer").click(function(){
   myFunction("deer");
});

$("#bu-mink").click(function(){
    myFunction("mink");
});

$("#bu-otter").click(function(){
    myFunction("otter");
});

$("#bu-ram").click(function(){
    myFunction("ram");
});

$("#bu-steer").click(function(){
    myFunction("steer");
});

$("#bu-turkey").click(function(){
    myFunction("turkey");
});

$("#bu-turtle").click(function(){
    myFunction("turtle");
});

function myFunction(tag) {
	var x=document.getElementById("photo-grid");
	console.log(x);
	for (var key in x) {
		if(key=="children"){
			var obj = x[key];
			for(var keyer in obj) {
				var objer = obj[keyer];
				if(objer.title==tag){
					//alert(objer.class);
					objer.style.display="block";
				}else if(tag=="all"){
					objer.style.display="block";
				}else{
					objer.style.display="none";
				}
			   console.log("keyer");
			   console.log(keyer);
			   console.log("objer");
			   console.log(objer);
			}
		}
	   
	   
	   //for (var prop in obj) {
	      // important check that this is objects own property 
	      // not from prototype prop inherited
	      // if(obj.hasOwnProperty(prop)){
	      //   alert(prop + " = " + obj[prop]);
	      // }
	   //}
	}
}