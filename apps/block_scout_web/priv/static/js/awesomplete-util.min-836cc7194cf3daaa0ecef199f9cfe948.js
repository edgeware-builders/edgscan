window.AwesompleteUtil=function(){var t="awesomplete-",e=t+"loadcomplete",n=t+"close",r=t+"match",i=t+"prepop",l=t+"select",u="awe-found",a="awe-not-found",o=Awesomplete.$;function p(t,e,n){return o.fire(t,e,{detail:n})}function s(t,e){var n,l,o,s,c,d,v=t.input,f=v.classList,h=t.utilprops,m=h.selected,b=h.convertInput.call(t,v.value),y=t.opened,g=[],I=t._list;if(h.prepop=!1,I){for(s=0;s<I.length;s++)if(o=I[s],c=t.data(o,b),d=void 0,n={label:(d=Array.isArray(c)?{label:c[0],value:c[1]}:"object"==typeof c&&"label"in c&&"value"in c?c:{label:c,value:c}).label||d.value,value:d.value},0===t.maxItems&&(n.toString=function(){return""+this.label},t.filter(n,b)&&(y=!0)),l={input:{value:""}},t.replace.call(l,n),h.convertInput.call(t,l.input.value)===b){if(m&&m.value===n.value&&m.label===n.label){g=[o];break}g.push(o)}h.prevSelected!==g&&(g.length>0?e?p(v,i,g):h.changed&&(h.prevSelected=g,f.remove(a),f.add(u),p(v,r,g)):e?p(v,i,[]):h.changed&&(h.prevSelected=[],f.remove(u),y&&v===document.activeElement?f.remove(a):b.length>0&&(f.add(a),p(v,r,[]))))}}function c(t){var r=this;t.type!==n&&t.type!==e&&"blur"!==t.type||t.target!==r.input||s(r,r.utilprops.prepop&&t.type===e)}function d(t){t.target===this.input&&9===t.keyCode&&this.select()}function v(t){this.utilprops.changed=!0,this.utilprops.selected=t.text;const e=t.text.split(/<p>/)[0];window.open(`/search?q=${e}`,"_self")}function f(t,e,n){var r=t.utilprops;return!r.listQuery||!r.loadall&&0===e.lastIndexOf(n,0)&&(0!==e.lastIndexOf(r.listQuery,0)||"number"==typeof r.limit&&t._list.length>=r.limit)}function h(t,n,r){t.list=n,t.utilprops.listQuery=r,p(t.input,e,r)}function m(){var t,e,n=this,r=n.awe,i=n.xhr,l=n.queryVal,u=r.utilprops.val;if(200===i.status){if(t=JSON.parse(i.responseText),r.utilprops.convertResponse&&(t=r.utilprops.convertResponse(t)),!Array.isArray(t))if(0===r.utilprops.limit||1===r.utilprops.limit)t=function(t){return 0===Object.keys(t).length&&t.constructor===Object}(t)?[]:[t];else for(e in t)if(Array.isArray(t[e])){t=t[e];break}Array.isArray(t)&&f(r,u,l)&&h(r,t,l||r.utilprops.loadall)}}function b(t,e){var n;t.utilprops.url&&f(t,e,e)?(n=new XMLHttpRequest,t.utilprops.ajax.call(t,t.utilprops.url,t.utilprops.urlEnd,t.utilprops.loadall?"":e,m.bind({awe:t,xhr:n,queryVal:e}),n)):s(t,t.utilprops.prepop)}function y(t,e,n){return t.utilprops.prepop=n||!1,t.utilprops.val!==e&&(t.utilprops.selected=null,t.utilprops.changed=!0,t.utilprops.val=e,(e.length<t.minChars||0===e.length)&&function(t){var e=t.input,n=e.classList;n.remove(a),n.remove(u),p(e,r,[])}(t),e.length>=t.minChars&&b(t,e)),t}function g(t){var e,n=this;t.target===n.input&&(e=n.utilprops.convertInput.call(n,n.input.value),y(n,e))}function I(t){return o.create("li",{innerHTML:t,"aria-selected":"false"})}function w(t){var e,n,r=this,i=r.sourceId,l=r.dataField,u=r.targetId;t.target===o(i)&&("function"==typeof u?u(t,l):(e=o(u))&&e!==document.activeElement&&(n=Array.isArray(t.detail)&&1===t.detail.length?t.detail[0]:null,n=(l&&n?n[l]:n)||"",void 0!==e.value?(e.value=n,e.classList&&e.classList.remove&&e.classList.remove(a)):void 0!==e.src?e.src=n:e.innerHTML=n))}function C(t){var e,n;t.target===o(this.btnId)&&(t.preventDefault(),0===(e=this.awe).ul.childNodes.length||e.ul.hasAttribute("hidden")?(n=e.minChars,e.minChars=0,e.evaluate(),e.minChars=n):e.close())}function L(t,e,n){var r=o.regExpEscape(function(t){return t.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}(e).trim()),i=r.length<=0?null:n?RegExp("^"+r,"i"):RegExp("(?!<[^>]+?>)"+r+"(?![^<]*?>)","gi");return t.replace(i,"<mark>$&</mark>")}function E(t,e,n,r,i){var l,u=i.root,a=i.value,o=i.label||i.value,p=!0,s=[];if(0===r&&u&&n&&0!==(n+".").lastIndexOf(u+".",0)&&0!==(u+".").lastIndexOf(n+".",0))return t;if(Object(e)!==e)n?t[n]=e:t=e;else if(Array.isArray(e)){for(l=0;l<e.length;l++)s.push(E({},e[l],"",r+1,i));n?t[n]=s:t=s}else{for(l in e)p=!1,E(t,e[l],n?n+"."+l:l,r,i);p&&n&&(t[n]={})}return r<2&&n&&(a&&0===(n+".").lastIndexOf(a+".",0)&&(t.value=t[n]),o&&0===(n+".").lastIndexOf(o+".",0)&&(t.label=t[n])),0===r&&(a&&!("value"in t)&&(t.value=null),o&&!("label"in t)&&(t.label=null)),t}function A(){var t=this,r=t.awe.input,i=t.boundMatch,u=t.boundOnInput,a=t.boundOnKeydown,o=t.boundSelect;r.removeEventListener(l,o),r.removeEventListener(e,i),r.removeEventListener(n,i),r.removeEventListener("blur",i),r.removeEventListener("input",u),r.removeEventListener("keydown",a)}return{ajax:function(t,e,n,r,i){return(i=i||new XMLHttpRequest).open("GET",t+encodeURIComponent(n)+(e||"")),i.onload=r,i.send(),i},convertInput:function(t){return"string"==typeof t?t.trim().toLowerCase():""},item:I,load:h,mark:L,itemContains:function(t,e){var n;return e.trim().length>0&&((n=(""+t).split(/<p>/))[0]=L(n[0],e),t=n.join("<p>")),I(t)},itemMarkAll:function(t,e){return I(""===e.trim()?""+t:L(""+t,e))},itemStartsWith:function(t,e){return I(""===e.trim()?""+t:L(""+t,e,!0))},create:function(t,e,n){n.item=n.item||this.itemContains;var r=new Awesomplete(t,n);return r.utilprops=e||{},r.utilprops.url||void 0!==r.utilprops.loadall||(r.utilprops.loadall=!0),r.utilprops.ajax=r.utilprops.ajax||this.ajax,r.utilprops.convertInput=r.utilprops.convertInput||this.convertInput,r},attach:function(t){var r=t.input,i=c.bind(t),u=d.bind(t),a=g.bind(t),p=v.bind(t),s=A.bind({awe:t,boundMatch:i,boundOnInput:a,boundOnKeydown:u,boundSelect:p}),f={keydown:u,input:a};return f.blur=f[n]=f[e]=i,f[l]=p,o.bind(r,f),t.utilprops.detach=s,t.utilprops.prepop&&(t.utilprops.loadall||r.value.length>0)&&(t.utilprops.val=t.utilprops.convertInput.call(t,r.value),b(t,t.utilprops.val)),t},update:function(t,e,n){return t.input.value=e,y(t,e,n)},start:function(t,e,n){return this.attach(this.create(t,e,n))},detach:function(t){return t.utilprops.detach&&(t.utilprops.detach(),delete t.utilprops.detach),t},createCopyFun:function(t,e,n){return w.bind({sourceId:t,dataField:e,targetId:o(n)||n})},attachCopyFun:function(t,e,n){return e="boolean"!=typeof e||e,(n=n||document.body).addEventListener(r,t),e&&n.addEventListener(i,t),t},startCopy:function(t,e,n,r){var i=o(t);return this.attachCopyFun(this.createCopyFun(i||t,e,n),r,i)},detachCopyFun:function(t,e){return(e=e||document.body).removeEventListener(i,t),e.removeEventListener(r,t),t},createClickFun:function(t,e){return C.bind({btnId:t,awe:e})},attachClickFun:function(t,e){return(e=e||document.body).addEventListener("click",t),t},startClick:function(t,e){var n=o(t);return this.attachClickFun(this.createClickFun(n||t,e),n)},detachClickFun:function(t,e){return(e=e||document.body).removeEventListener("click",t),t},filterContains:function(t,e){return Awesomplete.FILTER_CONTAINS(t.value,e)},filterStartsWith:function(t,e){return Awesomplete.FILTER_STARTSWITH(t.value,e)},jsonFlatten:function(t){return E({},t,"",0,this)}}}();