$(document).ready(function(){
	
	$("#btn_small").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(200).height(150);
	})
	
	$("#btn_med").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(400).height(300);
	})
	
	$("#btn_large").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(600).height(450);
	})
	
	
	
})