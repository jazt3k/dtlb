// Needs revolution plugin from themepunch
function SM_Controller() {

	var self = this;

	this.init = function() {
		self.bind_events();
		self.startRevolution();
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

	this.startRevolution = function() {
		var revapi;
	
		   revapi = $('.tp-banner').revolution(
			{
				delay:15000,
				startwidth:1170,
				startheight:600,
				hideThumbs:1,
				fullWidth:"off",
				fullScreen:"on",
				soloArrowLeftHalign:"right",
				soloArrowLeftValign:"bottom",
				soloArrowLeftHOffset:90,
				soloArrowLeftVOffset:20,
	
				soloArrowRightHalign:"right",
				soloArrowRightValign:"bottom",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:20
			});
	
	
	};
};

var _SMC_ = new SM_Controller();
$(window).ready(_SMC_.init());