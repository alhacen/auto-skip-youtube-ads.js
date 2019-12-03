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
function speedController_(e){
    if(e.keyCode==107 || e.keyCode==187){document.getElementsByTagName("video")[0].playbackRate += .25;}else if(e.keyCode==109 || e.keyCode==189){document.getElementsByTagName("video")[0].playbackRate -= .25;}
document.getElementById("logo-icon-container").innerHTML=document.getElementsByTagName("video")[0].playbackRate+" x"
}
document.addEventListener('keydown', speedController_);