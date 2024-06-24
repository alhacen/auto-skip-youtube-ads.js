function __(a) {
  return document.getElementsByClassName(a);
}
document.getElementById("logo-icon").innerHTML = document.getElementsByTagName("video")[0].playbackRate + " x";
document.getElementById("logo-icon").removeAttribute('hidden')
let playbackRate = document.getElementsByTagName("video")[0].playbackRate;
if (!window.skipAdInterval) {
	console.log("started");
  //if already activated
	window.skipAdInterval = setInterval(function () {
		if (__("ytp-ad-text").length != 0) { //if ad
			document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration
			document.getElementsByTagName("video")[0].playbackRate = 16; //play video on 16x speed
		} else {
			document.getElementsByTagName("video")[0].playbackRate = playbackRate; //play video on normal speed
		}
		if (__("ytp-skip-ad-button")[0] != undefined) { //if skip button is enabled
			__("ytp-skip-ad-button")[0].click();
		}
	}, 100);
	function speedController_(e) {
	  if (e.keyCode == 107 || e.keyCode == 187) {
		document.getElementsByTagName("video")[0].playbackRate += 0.25;
	  } else if (e.keyCode == 109 || e.keyCode == 189) {
		document.getElementsByTagName("video")[0].playbackRate -= 0.25;
	  }
	  playbackRate = document.getElementsByTagName("video")[0].playbackRate
	  document.getElementById("logo-icon").innerHTML = document.getElementsByTagName("video")[0].playbackRate + " x";
	}
	document.addEventListener("keydown", speedController_);
}

