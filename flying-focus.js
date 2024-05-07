var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
	'use strict';

var DURATION = 150;
var CLEAR_DURATION = 1111;

var ringElem = null;
var movingId = 0;
var prevFocused = null;
var keyDownTime = 0;

var win = window;
var doc = document;
var docElem = doc.documentElement;
var body = doc.body;


docElem.addEventListener('keydown', function(event) {
	var code = event.which;
	// Show animation only upon Tab or Arrow keys press.
	if (code === 9 || (code > 36 && code < 41)) {
		keyDownTime = Date.now();
	}
}, false);


docElem.addEventListener('focus', function(event) {
	var target = event.target;
	if (target.id === 'flying-focus') {
		return;
	}

	var isFirstFocus = false;
	if (!ringElem) {
		isFirstFocus = true;
		initialize();
	}

	var offset = offsetOf(target);
	ringElem.style.left = offset.left + 'px';
	ringElem.style.top = offset.top + 'px';
	ringElem.style.width = target.offsetWidth + 'px';
	ringElem.style.height = target.offsetHeight + 'px';

	if (isFirstFocus || !isJustPressed()) {
		return;
	}

	onEnd();
	target.classList.add('flying-focus_target');
	ringElem.classList.add('flying-focus_visible');
	prevFocused = target;
	movingId = setTimeout(onEnd, CLEAR_DURATION);
}, true);


docElem.addEventListener('blur', function() {
	onEnd();
}, true);


function initialize() {
	ringElem = doc.createElement('flying-focus'); // use uniq element name to decrease the chances of a conflict with website styles
	ringElem.id = 'flying-focus';
	ringElem.style.transitionDuration = ringElem.style.WebkitTransitionDuration = DURATION / 1000 + 's';
	body.appendChild(ringElem);
}


function onEnd() {
	if (!movingId) {
		return;
	}
	clearTimeout(movingId);
	movingId = 0;
	ringElem.classList.remove('flying-focus_visible');
	prevFocused.classList.remove('flying-focus_target');
	prevFocused = null;
}


function isJustPressed() {
	return Date.now() - keyDownTime < 42
}


function offsetOf(elem) {
	var rect = elem.getBoundingClientRect();
	var clientLeft = docElem.clientLeft || body.clientLeft;
	var clientTop  = docElem.clientTop  || body.clientTop;
	var scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop;
	var left = rect.left + scrollLeft - clientLeft;
	var top =  rect.top  + scrollTop  - clientTop;
	return {
		top: top || 0,
		left: left || 0
	};
}


	var style = doc.createElement('style');
	style.textContent = "#flying-focus {\
	position: absolute;\
	margin: 0;\
	background: transparent;\
	-webkit-transition-property: left, top, width, height;\
	transition-property: left, top, width, height;\
	-webkit-transition-timing-function: cubic-bezier(0,1,0,1);\
	transition-timing-function: cubic-bezier(0,1,0,1);\
	visibility: hidden;\
	pointer-events: none;\
	box-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;\
}\
#flying-focus.flying-focus_visible {\
	visibility: visible;\
	z-index: 9999;\
}\
.flying-focus_target {\
	outline: none !important; /* Doesn't work in Firefox :( */\
}\
/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\
.flying-focus_target::-moz-focus-inner {\
	border: 0 !important;\
}\
/* Replace it with @supports rule when browsers catch up */\
@media screen and (-webkit-min-device-pixel-ratio: 0) {\
	#flying-focus {\
		box-shadow: none;\
		outline: 5px auto -webkit-focus-ring-color;\
		outline-offset: -3px;\
	}\
}\
";
	body.appendChild(style);
})();


}
/*
     FILE ARCHIVED ON 07:37:25 Sep 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:47:16 May 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.483
  exclusion.robots: 0.057
  exclusion.robots.policy: 0.05
  cdx.remote: 0.049
  esindex: 0.008
  LoadShardBlock: 77.351 (3)
  PetaboxLoader3.datanode: 38.879 (4)
  PetaboxLoader3.resolve: 81.177 (2)
  load_resource: 95.844
*/