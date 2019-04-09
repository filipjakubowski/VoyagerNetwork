/*!
 * froala_editor v2.8.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(x){x.extend(x.FE.DEFAULTS,{codeMirror:window.CodeMirror,codeMirrorOptions:{lineNumbers:!0,tabMode:"indent",indentWithTabs:!0,lineWrapping:!0,mode:"text/html",tabSize:2},codeBeautifierOptions:{end_with_newline:!0,indent_inner_html:!0,extra_liners:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol","table","dl"],brace_style:"expand",indent_char:"\t",indent_size:1,wrap_line_length:0},codeViewKeepActiveButtons:["fullscreen"]}),x.FE.PLUGINS.codeView=function(l){var c,d;function h(){return l.$box.hasClass("fr-code-view")}function u(){return d?d.getValue():c.val()}function f(){h()&&(d&&d.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin||l.opts.height?l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",l.opts.heightMin||l.opts.height):l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",""))}var p,g=!1;function m(){h()&&l.events.trigger("blur")}function b(){h()&&g&&l.events.trigger("focus")}function s(e){c||(!function(){c=x('<textarea class="fr-code" tabIndex="-1">'),l.$wp.append(c),c.attr("dir",l.opts.direction),l.$box.hasClass("fr-basic")||(p=x('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'+(l.helpers.isMobile()?"":" fr-desktop")+'" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>'),l.$box.append(p),l.events.bindClick(l.$box,"a.html-switch",function(){v(!1)}));var e=function(){return!h()};l.events.on("buttons.refresh",e),l.events.on("copy",e,!0),l.events.on("cut",e,!0),l.events.on("paste",e,!0),l.events.on("destroy",M,!0),l.events.on("html.set",function(){h()&&v(!0)}),l.events.on("codeView.update",f),l.events.on("form.submit",function(){h()&&(l.html.set(u()),l.events.trigger("contentChanged",[],!0))},!0)}(),!d&&l.opts.codeMirror?((d=l.opts.codeMirror.fromTextArea(c.get(0),l.opts.codeMirrorOptions)).on("blur",m),d.on("focus",b)):(l.events.$on(c,"keydown keyup change input",function(){l.opts.height?this.removeAttribute("rows"):(this.rows=1,0===this.value.length?this.style.height="auto":this.style.height=this.scrollHeight+"px")}),l.events.$on(c,"blur",m),l.events.$on(c,"focus",b))),l.undo.saveStep(),l.html.cleanEmptyTags(),l.html.cleanWhiteTags(!0),l.core.hasFocus()&&(l.core.isEmpty()||(l.selection.save(),l.$el.find('.fr-marker[data-type="true"]:first').replaceWith('<span class="fr-tmp fr-sm">F</span>'),l.$el.find('.fr-marker[data-type="false"]:last').replaceWith('<span class="fr-tmp fr-em">F</span>')));var t=l.html.get(!1,!0);l.$el.find("span.fr-tmp").remove(),l.$box.toggleClass("fr-code-view",!0);var n,i,s=!1;if(l.core.hasFocus()&&(s=!0,l.events.disableBlur(),l.$el.blur()),t=(t=t.replace(/<span class="fr-tmp fr-sm">F<\/span>/,"FROALA-SM")).replace(/<span class="fr-tmp fr-em">F<\/span>/,"FROALA-EM"),l.codeBeautifier&&(t=l.codeBeautifier.run(t,l.opts.codeBeautifierOptions)),d){n=t.indexOf("FROALA-SM"),(i=t.indexOf("FROALA-EM"))<n?n=i:i-=9;var o=(t=t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).substring(0,n).length-t.substring(0,n).replace(/\n/g,"").length,r=t.substring(0,i).length-t.substring(0,i).replace(/\n/g,"").length;n=t.substring(0,n).length-t.substring(0,t.substring(0,n).lastIndexOf("\n")+1).length,i=t.substring(0,i).length-t.substring(0,t.substring(0,i).lastIndexOf("\n")+1).length,d.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin&&l.$box.find(".CodeMirror-scroll").css("min-height",l.opts.heightMin),d.setValue(t),g=!s,d.focus(),g=!0,d.setSelection({line:o,ch:n},{line:r,ch:i}),d.refresh(),d.clearHistory()}else{n=t.indexOf("FROALA-SM"),i=t.indexOf("FROALA-EM")-9,l.opts.heightMin&&c.css("min-height",l.opts.heightMin),l.opts.height&&c.css("height",l.opts.height),l.opts.heightMax&&c.css("max-height",l.opts.height||l.opts.heightMax),c.val(t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).trigger("change");var a=x(l.o_doc).scrollTop();g=!s,c.focus(),g=!0,c.get(0).setSelectionRange(n,i),x(l.o_doc).scrollTop(a)}l.$tb.find(" > .fr-command").not(e).filter(function(){return l.opts.codeViewKeepActiveButtons.indexOf(x(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!0),e.addClass("fr-active").attr("aria-pressed",!0),!l.helpers.isMobile()&&l.opts.toolbarInline&&l.toolbar.hide()}function v(e){void 0===e&&(e=!h());var t,n,i=l.$tb.find('.fr-command[data-cmd="html"]');e?(l.popups.hideAll(),s(i)):(l.$box.toggleClass("fr-code-view",!1),t=i,n=u(),l.html.set(n),l.$el.blur(),l.$tb.find(" > .fr-command").not(t).removeClass("fr-disabled").attr("aria-disabled",!1),t.removeClass("fr-active").attr("aria-pressed",!1),l.selection.setAtStart(l.el),l.selection.restore(),l.placeholder.refresh(),l.undo.saveStep())}function M(){h()&&v(!1),d&&d.toTextArea(),c.val("").removeData().remove(),c=null,p&&(p.remove(),p=null)}return{_init:function(){if(!l.$wp)return!1},toggle:v,isActive:h,get:u}},x.FE.RegisterCommand("html",{title:"Code View",undo:!1,focus:!1,forcedRefresh:!0,toggle:!0,callback:function(){this.codeView.toggle()},plugin:"codeView"}),x.FE.DefineIcon("html",{NAME:"code"})});
