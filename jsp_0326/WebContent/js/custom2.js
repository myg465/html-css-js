
$(document).ready(function(){
  $(".buy").hide();
  $("#c1").change(function(){
	if($("#c1").is(":checked")){
		$(".buy").show();
	}
	else{
		$(".buy").hide();
	}
  });
  $("#del").click(function(){
	  $(".buy").hide();
	  $("#c1").prop("checked",false);
  });
	
});