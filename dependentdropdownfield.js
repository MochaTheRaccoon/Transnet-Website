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

jQuery.entwine("dependentdropdown", function ($) {
	
	$(":input.dependent-dropdown").entwine({
		onadd: function () {
			var drop = this;
			var depends = ($(":input[name=" + drop.data('depends').replace(/[#;&,.+*~':"!^$[\]()=>|\/]/g, "\\$&") + "]"));

			this.parents('.field:first').addClass('dropdown');

			depends.change(function () {
				if (!this.value) {
					drop.disable(drop.data('unselected'));
				} else {
					drop.disable("Loading...");

					var reqUrl = drop.data('link').split('?');
					var url = reqUrl[0] + '/' + this.value;
					if (reqUrl.length > 1) {
						url += '?' + reqUrl[1];
					}

					$.get(url, {}, function (data) {
						drop.enable();

						if (drop.data('empty') || drop.data('empty') === "") {
							drop.append($("<option />").val("").text(drop.data('empty')));
						}

						$.each(data, function () {
							drop.append($("<option />").val(this.k).text(this.v));
						});
						drop.trigger("liszt:updated").trigger("chosen:updated");
					});
				}
			});

			if (!depends.val()) {
				drop.disable(drop.data('unselected'));
			}
		},
		disable: function (text) {
			this.empty().append($("<option />").val("").text(text)).attr("disabled", "disabled").trigger("liszt:updated").trigger("chosen:updated");
		},
		enable: function () {
			this.empty().removeAttr("disabled").next().removeClass('chzn-disabled').removeClass('chosen-disabled');
		}
	});

});


}
/*
     FILE ARCHIVED ON 18:02:11 Oct 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:47:16 May 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.573
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.081
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 152.155 (3)
  PetaboxLoader3.datanode: 78.216 (4)
  PetaboxLoader3.resolve: 96.697 (2)
  load_resource: 41.13
*/