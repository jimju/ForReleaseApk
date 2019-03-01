jQuery(function() {
	$("#tips").hide();
	if (navigator.userAgent.indexOf("Android") > 0) {
		$('div[class="ios_container"]').hide();
		$('div[name="ios"]').hide();
	} else if (navigator.userAgent.indexOf("iPhone") > 0) {
		$('div[class="android_container"]').hide();
		$('div[name="android"]').hide();
	}
	if(isWeiXin()){
		$("#tips").show();
	}
	function isWeiXin() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {			
			return true;
		} else {		
			return false;
		}
	}
});