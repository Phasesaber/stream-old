/*
 *  Remodal - v0.3.0
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a){"use strict";function b(a){var b=a.css("transition-duration")||a.css("-webkit-transition-duration")||a.css("-moz-transition-duration")||a.css("-o-transition-duration")||a.css("-ms-transition-duration")||0,c=a.css("transition-delay")||a.css("-webkit-transition-delay")||a.css("-moz-transition-delay")||a.css("-o-transition-delay")||a.css("-ms-transition-delay")||0;return 1e3*(parseFloat(b)+parseFloat(c))}function c(){if(a(document.body).height()<=a(window).height())return 0;var b,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),b=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),b-c}function d(){var b=a(document.body),d=parseInt(b.css("padding-right"),10)+c();b.css("padding-right",d+"px"),a("html, body").addClass(k+"_lock")}function e(){var b=a(document.body),d=parseInt(b.css("padding-right"),10)-c();b.css("padding-right",d+"px"),a("html, body").removeClass(k+"_lock")}function f(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function g(c,d){var e,f,g,h=this;h.settings=a.extend({},l,d),h.$body=a(document.body),h.$bg=a("."+k+"-bg"),h.$closeButton=a("<a href='#'>").addClass(k+"-close"),h.$overlay=a("<div>").addClass(k+"-overlay"),h.$modal=c,h.$modal.addClass(k),h.$modal.css("visibility","visible"),h.$modal.append(h.$closeButton),h.$overlay.append(h.$modal),h.$body.append(h.$overlay),h.$confirmButton=h.$modal.find("."+k+"-confirm"),h.$cancelButton=h.$modal.find("."+k+"-cancel"),e=b(h.$overlay),f=b(h.$modal),g=b(h.$bg),h.td=f>e?f:e,h.td=g>h.td?g:h.td,h.$closeButton.bind("click."+k,function(a){a.preventDefault(),h.close()}),h.$cancelButton.bind("click."+k,function(a){a.preventDefault(),h.$modal.trigger("cancel"),h.settings.closeOnCancel&&h.close()}),h.$confirmButton.bind("click."+k,function(a){a.preventDefault(),h.$modal.trigger("confirm"),h.settings.closeOnConfirm&&h.close()}),a(document).bind("keyup."+k,function(a){27===a.keyCode&&h.settings.closeOnEscape&&h.close()}),h.$overlay.bind("click."+k,function(b){var c=a(b.target);c.hasClass(k+"-overlay")&&h.settings.closeOnAnyClick&&h.close()}),h.index=a[k].lookup.push(h)-1,h.busy=!1}function h(b,c){var d,e,f=location.hash.replace("#","");if("undefined"==typeof c&&(c=!0),f){try{e=a("[data-"+k+"-id="+f.replace(new RegExp("/","g"),"\\/")+"]")}catch(g){}e&&e.length&&(d=a[k].lookup[e.data(k)],d&&d.settings.hashTracking&&d.open())}else c&&i&&!i.busy&&i.settings.hashTracking&&i.close()}var i,j,k="remodal",l={hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnAnyClick:!0};g.prototype.open=function(){if(!this.busy){var b,c=this;c.busy=!0,c.$modal.trigger("open"),b=c.$modal.attr("data-"+k+"-id"),b&&c.settings.hashTracking&&(j=a(window).scrollTop(),location.hash=b),i&&i!==c&&(i.$overlay.hide(),i.$body.removeClass(k+"_active")),i=c,d(),c.$overlay.show(),setTimeout(function(){c.$body.addClass(k+"_active"),setTimeout(function(){c.busy=!1,c.$modal.trigger("opened")},c.td+50)},25)}},g.prototype.close=function(){if(!this.busy){this.busy=!0,this.$modal.trigger("close");var b=this;b.settings.hashTracking&&b.$modal.attr("data-"+k+"-id")===location.hash.substr(1)&&(location.hash="",a(window).scrollTop(j)),b.$body.removeClass(k+"_active"),setTimeout(function(){b.$overlay.hide(),e(),b.busy=!1,b.$modal.trigger("closed")},b.td+50)}},a[k]={lookup:[]},a.fn[k]=function(b){var c,d;return this.each(function(e,f){d=a(f),null==d.data(k)&&(c=new g(d,b),d.data(k,c.index),c.settings.hashTracking&&d.attr("data-"+k+"-id")===location.hash.substr(1)&&c.open())}),c},a(document).ready(function(){a(document).on("click","[data-"+k+"-target]",function(b){b.preventDefault();var c=b.currentTarget,d=c.getAttribute("data-"+k+"-target"),e=a("[data-"+k+"-id="+d+"]");a[k].lookup[e.data(k)].open()}),a(document).find("."+k).each(function(b,c){var d=a(c),e=d.data(k+"-options");e?("string"==typeof e||e instanceof String)&&(e=f(e)):e={},d[k](e)})}),a(window).bind("hashchange."+k,h)}(window.jQuery||window.Zepto);
