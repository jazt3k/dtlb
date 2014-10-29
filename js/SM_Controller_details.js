function SM_Controller() {

	var self = this;

	this.init = function() {
		self.bind_events();
		$('#slides').superslides();
		$("#product_info_wrap").css({left: -$("#product_info_wrap").width()});
	};

	this.bind_events = function() {
		$('.project_info_btn').click(function(e){
	        e.preventDefault();
	        var project_info_width = $("#product_info_wrap").width();
	        if($("#product_info_wrap").position().left != 0){
	            $("#project_info").removeClass("hidden");
	            console.log("adding class");
	            $("#product_info_wrap").stop(true,true).animate({left: 0 + 'px' }, 'fast');
	        }else{
	            $("#product_info_wrap").stop(true,true).animate({left: -(project_info_width) + 'px' }, 'fast');
	            $("#project_info").addClass("hidden");
	        }
	    });
	};
};

var _SMC_ = new SM_Controller();
$(window).ready(_SMC_.init());