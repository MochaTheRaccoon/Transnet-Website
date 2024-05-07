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

;(function ($) {
	var accessibilityConfig;
	
	$(function () {
		
		if ($('#__ss_access').length) {
			accessibilityConfig = JSON.parse($('#__ss_access').val());
		}
		
		if (!accessibilityConfig && window.sabotConfig) {
			accessibilityConfig = window.sabotConfig;
		}
		
		var bindActions = function () {
			var skipMenu = accessibilityConfig.skipMenu || '#main-skip-block';
			var skipMenuLinks = skipMenu + ' a';
			var menuCombo = accessibilityConfig.menuCombo || 'ctrl+m';

			$(document).bind('keydown', menuCombo, function () {
				$(skipMenuLinks).first().focus();
			});

			var closeSkiplinks = null;

			// skip link highlighting
			$(skipMenuLinks).focus(function (e) {
				clearTimeout(closeSkiplinks);
				$(this).parents(skipMenu).addClass('activated');
			});

			$(skipMenuLinks).blur(function (e) {
				var _this = this;
				closeSkiplinks = setTimeout(function () {
					$(_this).parents(skipMenu).removeClass('activated');
				}, 300);
			});

			// cleaning up the links for SS URL structures
			var curLink = location.pathname;
			var slashedUrl = curLink[curLink.length - 1] == '/';
			// fix trailing slashes for skip links
			$(skipMenuLinks).each(function () {
				var link = $(this).attr('href');
				if (link.length <= 0) {
					return;
				}
				var hashPos = link.indexOf('#');
				if (hashPos == 0) {
					// need to pre-pend with the path name to ensure we're working within the base href
					$(this).attr('href', curLink + link);
				} else if (link[hashPos-1] == '/') {
					if (!slashedUrl) {
						// remove the slash from the link
						var newLink = link.slice(0, hashPos - 1) + link.slice(hashPos, link.length);
						$(this).attr('href', newLink);
					}
				} else if (slashedUrl) {
					// otherwise, if it wasn't slashed, but the URL is, add a new character in
					var newLink = link.slice(0, hashPos) + '/' + link.slice(hashPos, link.length);
					$(this).attr('href', newLink);
				}
			});

			if (accessibilityConfig.fontSizeElements) {
				var jfontsize_options = {
					btnMinusClasseId: accessibilityConfig.minusButton || '#text-decrease',
					btnPlusClasseId: accessibilityConfig.plusButton || '#text-increase',
					btnMinusMaxHits: 3,
					btnPlusMaxHits: 3,
					sizeChange: 1
				};
				// 'span', 'ul', 'input', 'a', 'td', 'th', 'tr', 'dd', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5'
				var els = accessibilityConfig.fontSizeElements.split(',');
				$(els).each(function(k,v){
					$(v.trim()).jfontsize(jfontsize_options);
				});
			}


			if (accessibilityConfig.showScrollup) {
				var topElem = accessibilityConfig.scrollTop || 'header';
				var messageHolder = accessibilityConfig.scrollMessage || '#sabotScrollMessage';
				var scroll_timer;
				var offset = $(topElem).offset();
				var top = offset ? offset.top : 0;
				var $window = $(window);
				var displayed = false;

				var $scrollMessage = $(messageHolder);

				$scrollMessage.find('a').mouseup(function (e) { 
					if (e.which != 1) {
						return;
					}
					e.preventDefault(); 

					$(document).scrollTo(topElem + ':visible', {
						offset: {
							top: -50
						}, 
						duration: 100
					}); 

					$(topElem).next().find(":focusable").first().focus();
					return false;
				});

				$window.scroll(function () {
					window.clearTimeout(scroll_timer);
					scroll_timer = window.setTimeout(function () {
						if($window.scrollTop() <= top) {
							displayed = false;
							$scrollMessage.hide();
							$scrollMessage.css('position', 'absolute');
						} else if(displayed == false) {
							displayed = true;
							$scrollMessage.stop();
							$scrollMessage.css('position', 'fixed');
							$scrollMessage.show();
						}
					}, 100);
				});
			}

		}

		if (accessibilityConfig) {
			bindActions();
		}

		window.sabotBind = bindActions;

	});
})(jQuery);

}
/*
     FILE ARCHIVED ON 07:37:00 Sep 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:47:16 May 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.722
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.072
  cdx.remote: 0.068
  esindex: 0.011
  LoadShardBlock: 253.586 (3)
  PetaboxLoader3.datanode: 211.568 (4)
  PetaboxLoader3.resolve: 106.396 (2)
  load_resource: 144.345
*/