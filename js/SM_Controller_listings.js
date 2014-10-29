function SM_Controller() {

	var self = this;

	this.init = function() {
		self.bind_events();
		$('#mixit-up').mixItUp();
	};

	this.bind_events = function() {
		
	};
};

var _SMC_ = new SM_Controller();
$(window).ready(_SMC_.init());