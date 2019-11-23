function __(a){return document.getElementsByClassName(a);}
	console.log("started");
	setInterval(function(){
		prev_playback_speed=document.getElementsByTagName("video")[0].playbackRate;
	    if(__("ytp-ad-text").length!=0){//if ad
	        document.getElementsByTagName("video")[0].playbackRate = 16;//play video on 16x speed
	    }else{
	        document.getElementsByTagName("video")[0].playbackRate = prev_playback_speed;//play video on normal speed
	    }
	    if(__("ytp-ad-skip-button-text")[0]!=undefined){//if skip button is enabled
	        __("ytp-ad-skip-button-text")[0].click();
	    }else{
	    }
	},100)