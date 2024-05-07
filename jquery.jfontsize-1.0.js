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

/*
 * jQuery jFontSize Plugin
 * Examples and documentation: http://jfontsize.com
 * Author: Frederico Soares Vanelli
 *         fredsvanelli@gmail.com
 *         http://twitter.com/fredvanelli
 *         http://facebook.com/fred.vanelli
 *
 * Copyright (c) 2011
 * Version: 1.0 (2011-07-13)
 * Dual licensed under the MIT and GPL licenses.
 * http://jfontsize.com/license
 * Requires: jQuery v1.2.6 or later
 */

(function($){
    $.fn.jfontsize = function(opcoes) {
        var $this=$(this);
      var defaults = {
        btnMinusClasseId: '#jfontsize-minus',
        btnDefaultClasseId: '#jfontsize-default',
        btnPlusClasseId: '#jfontsize-plus',
            btnMinusMaxHits: 10,
            btnPlusMaxHits: 10,
            sizeChange: 1
      };

      opcoes = $.extend(defaults, opcoes);

        var limite=new Array();
        var fontsize_padrao=new Array();

        $(this).each(function(i){
            limite[i]=0;
            fontsize_padrao[i];
        })
    var allItems = opcoes.btnMinusClasseId + ',' + opcoes.btnDefaultClasseId  + ',' + opcoes.btnPlusClasseId;
    
        $(allItems).click(function (e) { e.preventDefault() });
        $(allItems).css('cursor', 'pointer');

        $(opcoes.btnMinusClasseId).click(function(){
            $this.each(function(i){
                if (limite[i]>(-(opcoes.btnMinusMaxHits))){
                    fontsize_padrao[i]=$(this).css('font-size');
                    fontsize_padrao[i]=fontsize_padrao[i].replace('px', '');
                    var fontsize=$(this).css('font-size');
                    fontsize=parseInt(fontsize.replace('px', ''));
                    fontsize=fontsize-(opcoes.sizeChange);
                    fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);
                    limite[i]--;
                    $(this).css('font-size', fontsize+'px');
                }
            })
        })

        
        $(opcoes.btnDefaultClasseId).click(function(){
            $this.each(function(i){
                limite[i]=0;
                $(this).css('font-size', fontsize_padrao[i]+'px');
            })
        })

        $(opcoes.btnPlusClasseId).click(function(){
            $this.each(function(i){
                if (limite[i]<opcoes.btnPlusMaxHits){
                    fontsize_padrao[i]=$(this).css('font-size');
                    fontsize_padrao[i]=fontsize_padrao[i].replace('px', '');
                    var fontsize=$(this).css('font-size');
                    fontsize=parseInt(fontsize.replace('px', ''));
                    fontsize=fontsize+opcoes.sizeChange;
                    fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);
                    limite[i]++;
                    $(this).css('font-size', fontsize+'px');
                }
            })
        })
    };
})(jQuery);

}
/*
     FILE ARCHIVED ON 07:37:12 Sep 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:47:16 May 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.721
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.072
  cdx.remote: 0.064
  esindex: 0.013
  LoadShardBlock: 54.876 (3)
  PetaboxLoader3.datanode: 41.506 (4)
  PetaboxLoader3.resolve: 56.34 (2)
  load_resource: 63.679
*/