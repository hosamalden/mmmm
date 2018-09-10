;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="cb2f02f05a953e93d324d41bbb0bc33e";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["DhqQw7IOJME8"]={appId:"P1xGIF6Nk8Zs",scope:{}};;CloudflareApps.installs["DhqQw7IOJME8"].options={"body":{"category":"sansSerif","fancy":"Lobster::latin","handwriting":"Indie+Flower::latin","monospace":"Inconsolata:400,700:latin","sansSerif":"Open+Sans:400,400italic,700:latin","serif":"Slabo+27px::latin"},"custom":[{"category":"monospace","fancy":"Lobster::latin","handwriting":"Indie+Flower::latin","monospace":"Ubuntu+Mono:400,400italic,700:latin","sansSerif":"Source+Sans+Pro:400,400italic,700:latin","serif":"Arvo:400,400italic,700:latin"}],"headers":{"category":"sansSerif","fancy":"Lobster::latin","handwriting":"Lateef:400:arabic","monospace":"VT323::latin","sansSerif":"Cairo:300,400:arabic","serif":"Scheherazade:400,700:arabic"}};;CloudflareApps.installs["GopMrXEiBG2B"]={appId:"XzVIEqe1R2kW",scope:{}};;CloudflareApps.installs["GopMrXEiBG2B"].options={"chrome":56,"edge":14.14393,"firefox":52.4,"ie":9,"safari":10};;CloudflareApps.installs["Krg0zgWQ00wm"]={appId:"FKAQLLHf4tr5",scope:{}};;CloudflareApps.installs["Krg0zgWQ00wm"].options={"behavior":{"outMode":"out"},"fewerParticles":false,"interaction":{"onClick":"push","onHover":"grab"},"showAdvanced":false};;CloudflareApps.installs["W8sRtzU3457g"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["W8sRtzU3457g"].options={"blocks":[]};;CloudflareApps.installs["bH2AX64PbVR2"]={appId:"lQNVixFXFXhM",scope:{}};;CloudflareApps.installs["bH2AX64PbVR2"].options={"buttons":[{"backgroundColor":"#fba884","borderRadius":0.37,"color":"#ffffff","fontSize":"large","targetBlank":true,"text":"NourBot Plus","url":"https://discord.gg/Eg9vh9x"}],"horizontalAlignment":"center","location":{"method":"after","pages":{"URLPatterns":["^nourbot.tk/?$"]},"selector":"body \u003e div:first-child \u003e .container \u003e .box.special.features"},"stacked":false};;CloudflareApps.installs["bH2AX64PbVR2"].selectors={"location.selector":"body \u003e div:first-child \u003e .container \u003e .box.special.features"};;CloudflareApps.installs["bzEdirDUdyjR"]={appId:"xHj1ehSJR69D",scope:{}};;CloudflareApps.installs["bzEdirDUdyjR"].options={};;CloudflareApps.installs["x57B5QY7EQPW"]={appId:"b9dwZce78j9q",scope:{}};;CloudflareApps.installs["x57B5QY7EQPW"].options={"account":{"accountId":"2O8i2cu9cpdI","service":"chatra","userId":"xTHPB7DcgkTZ6BLga"},"advanced":{"devices":"all","enabled":false,"groupId":"","language":"","zIndex":1000000},"button":{"bgColor":"#7e95fe","position":"bl","size":60,"style":"tab","textColor":"#ffffff","useChatraSettings":false},"window":{"agentBubbleBg":"#f1f3f5","clientBubbleBg":"#d4f2fc","height":600,"width":380}};;if(CloudflareApps.matchPage(CloudflareApps.installs['Krg0zgWQ00wm'].URLPatterns)){(function(Math){var trimLeft=/^\s+/,trimRight=/\s+$/,tinyCounter=0,mathRound=Math.round,mathMin=Math.min,mathMax=Math.max,mathRandom=Math.random;function tinycolor(color,opts){color=(color)?color:'';opts=opts||{};if(color instanceof tinycolor){return color;}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts);}
var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format;this._gradientType=opts.gradientType;if(this._r<1){this._r=mathRound(this._r);}
if(this._g<1){this._g=mathRound(this._g);}
if(this._b<1){this._b=mathRound(this._b);}
this._ok=rgb.ok;this._tc_id=tinyCounter++;}
tinycolor.prototype={isDark:function(){return this.getBrightness()<128;},isLight:function(){return!this.isDark();},isValid:function(){return this._ok;},getOriginalInput:function(){return this._originalInput;},getFormat:function(){return this._format;},getAlpha:function(){return this._a;},getBrightness:function(){var rgb=this.toRgb();return(rgb.r*299+rgb.g*587+rgb.b*114)/1000;},getLuminance:function(){var rgb=this.toRgb();var RsRGB,GsRGB,BsRGB,R,G,B;RsRGB=rgb.r/255;GsRGB=rgb.g/255;BsRGB=rgb.b/255;if(RsRGB<=0.03928){R=RsRGB/12.92;}else{R=Math.pow(((RsRGB+0.055)/1.055),2.4);}
if(GsRGB<=0.03928){G=GsRGB/12.92;}else{G=Math.pow(((GsRGB+0.055)/1.055),2.4);}
if(BsRGB<=0.03928){B=BsRGB/12.92;}else{B=Math.pow(((BsRGB+0.055)/1.055),2.4);}
return(0.2126*R)+(0.7152*G)+(0.0722*B);},setAlpha:function(value){this._a=boundAlpha(value);this._roundA=mathRound(100*this._a)/100;return this;},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a};},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b);var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100);return(this._a==1)?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")";},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a};},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b);var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100);return(this._a==1)?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")";},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char);},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char);},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a);},toHex8String:function(){return'#'+this.toHex8();},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a};},toRgbString:function(){return(this._a==1)?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")";},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+"%",g:mathRound(bound01(this._g,255)*100)+"%",b:mathRound(bound01(this._b,255)*100)+"%",a:this._a};},toPercentageRgbString:function(){return(this._a==1)?"rgb("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%)":"rgba("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%, "+this._roundA+")";},toName:function(){if(this._a===0){return"transparent";}
if(this._a<1){return false;}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false;},toFilter:function(secondColor){var hex8String='#'+rgbaToHex(this._r,this._g,this._b,this._a);var secondHex8String=hex8String;var gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String();}
return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=false;var hasAlpha=this._a<1&&this._a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format==="hex"||format==="hex6"||format==="hex3"||format==="name");if(needsAlphaFormat){if(format==="name"&&this._a===0){return this.toName();}
return this.toRgbString();}
if(format==="rgb"){formattedString=this.toRgbString();}
if(format==="prgb"){formattedString=this.toPercentageRgbString();}
if(format==="hex"||format==="hex6"){formattedString=this.toHexString();}
if(format==="hex3"){formattedString=this.toHexString(true);}
if(format==="hex8"){formattedString=this.toHex8String();}
if(format==="name"){formattedString=this.toName();}
if(format==="hsl"){formattedString=this.toHslString();}
if(format==="hsv"){formattedString=this.toHsvString();}
return formattedString||this.toHexString();},clone:function(){return tinycolor(this.toString());},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));this._r=color._r;this._g=color._g;this._b=color._b;this.setAlpha(color._a);return this;},lighten:function(){return this._applyModification(lighten,arguments);},brighten:function(){return this._applyModification(brighten,arguments);},darken:function(){return this._applyModification(darken,arguments);},desaturate:function(){return this._applyModification(desaturate,arguments);},saturate:function(){return this._applyModification(saturate,arguments);},greyscale:function(){return this._applyModification(greyscale,arguments);},spin:function(){return this._applyModification(spin,arguments);},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)));},analogous:function(){return this._applyCombination(analogous,arguments);},complement:function(){return this._applyCombination(complement,arguments);},monochromatic:function(){return this._applyCombination(monochromatic,arguments);},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments);},triad:function(){return this._applyCombination(triad,arguments);},tetrad:function(){return this._applyCombination(tetrad,arguments);}};tinycolor.fromRatio=function(color,opts){if(typeof color=="object"){var newColor={};for(var i in color){if(color.hasOwnProperty(i)){if(i==="a"){newColor[i]=color[i];}
else{newColor[i]=convertToPercentage(color[i]);}}}
color=newColor;}
return tinycolor(color,opts);};function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var s=null;var v=null;var l=null;var ok=false;var format=false;if(typeof color=="string"){color=stringInputToObject(color);}
if(typeof color=="object"){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==="%"?"prgb":"rgb";}
else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=convertToPercentage(color.s);v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,s,v);ok=true;format="hsv";}
else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=convertToPercentage(color.s);l=convertToPercentage(color.l);rgb=hslToRgb(color.h,s,l);ok=true;format="hsl";}
if(color.hasOwnProperty("a")){a=color.a;}}
a=boundAlpha(a);return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a};}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}
function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;}
else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,l:l};}
function hslToRgb(h,s,l){var r,g,b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
if(s===0){r=g=b=l;}
else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};}
function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,v=max;var d=max-min;s=max===0?0:d/max;if(max==min){h=0;}
else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,v:v};}
function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=Math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}
return hex.join("");}
function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("");}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false;}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();};tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()});};function desaturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s-=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function saturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s+=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function greyscale(color){return tinycolor(color).desaturate(100);}
function lighten(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l+=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function brighten(color,amount){amount=(amount===0)?0:(amount||10);var rgb=tinycolor(color).toRgb();rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255* -(amount/100))));rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255* -(amount/100))));rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255* -(amount/100))));return tinycolor(rgb);}
function darken(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l-=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function spin(color,amount){var hsl=tinycolor(color).toHsl();var hue=(hsl.h+amount)%360;hsl.h=hue<0?360+hue:hue;return tinycolor(hsl);}
function complement(color){var hsl=tinycolor(color).toHsl();hsl.h=(hsl.h+180)%360;return tinycolor(hsl);}
function triad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})];}
function tetrad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})];}
function splitcomplement(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})];}
function analogous(color,results,slices){results=results||6;slices=slices||30;var hsl=tinycolor(color).toHsl();var part=360/slices;var ret=[tinycolor(color)];for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(tinycolor(hsl));}
return ret;}
function monochromatic(color,results){results=results||6;var hsv=tinycolor(color).toHsv();var h=hsv.h,s=hsv.s,v=hsv.v;var ret=[];var modification=1/results;while(results--){ret.push(tinycolor({h:h,s:s,v:v}));v=(v+modification)%1;}
return ret;}
tinycolor.mix=function(color1,color2,amount){amount=(amount===0)?0:(amount||50);var rgb1=tinycolor(color1).toRgb();var rgb2=tinycolor(color2).toRgb();var p=amount/100;var w=p*2-1;var a=rgb2.a-rgb1.a;var w1;if(w*a==-1){w1=w;}else{w1=(w+a)/(1+w*a);}
w1=(w1+1)/2;var w2=1-w1;var rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba);};tinycolor.readability=function(color1,color2){var c1=tinycolor(color1);var c2=tinycolor(color2);return(Math.max(c1.getLuminance(),c2.getLuminance())+0.05)/(Math.min(c1.getLuminance(),c2.getLuminance())+0.05);};tinycolor.isReadable=function(color1,color2,wcag2){var readability=tinycolor.readability(color1,color2);var wcag2Parms,out;out=false;wcag2Parms=validateWCAG2Parms(wcag2);switch(wcag2Parms.level+wcag2Parms.size){case"AAsmall":case"AAAlarge":out=readability>=4.5;break;case"AAlarge":out=readability>=3;break;case"AAAsmall":out=readability>=7;break;}
return out;};tinycolor.mostReadable=function(baseColor,colorList,args){var bestColor=null;var bestScore=0;var readability;var includeFallbackColors,level,size;args=args||{};includeFallbackColors=args.includeFallbackColors;level=args.level;size=args.size;for(var i=0;i<colorList.length;i++){readability=tinycolor.readability(baseColor,colorList[i]);if(readability>bestScore){bestScore=readability;bestColor=tinycolor(colorList[i]);}}
if(tinycolor.isReadable(baseColor,bestColor,{"level":level,"size":size})||!includeFallbackColors){return bestColor;}
else{args.includeFallbackColors=false;return tinycolor.mostReadable(baseColor,["#fff","#000"],args);}};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexNames=tinycolor.hexNames=flip(names);function flip(o){var flipped={};for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i;}}
return flipped;}
function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}
return a;}
function bound01(n,max){if(isOnePointZero(n)){n="100%";}
var processPercent=isPercentage(n);n=mathMin(max,mathMax(0,parseFloat(n)));if(processPercent){n=parseInt(n*max,10)/100;}
if((Math.abs(n-max)<0.000001)){return 1;}
return(n%max)/parseFloat(max);}
function clamp01(val){return mathMin(1,mathMax(0,val));}
function parseIntFromHex(val){return parseInt(val,16);}
function isOnePointZero(n){return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;}
function isPercentage(n){return typeof n==="string"&&n.indexOf('%')!=-1;}
function pad2(c){return c.length==1?'0'+c:''+c;}
function convertToPercentage(n){if(n<=1){n=(n*100)+"%";}
return n;}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255);}
var matchers=(function(){var CSS_INTEGER="[-\\+]?\\d+%?";var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};})();function isValidCSSUnit(color){return!!matchers.CSS_UNIT.exec(color);}
function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase();var named=false;if(names[color]){color=names[color];named=true;}
else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:"name"};}
var match;if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]};}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]};}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]};}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]};}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]};}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]};}
if((match=matchers.hex8.exec(color))){return{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"};}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"};}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?"name":"hex"};}
return false;}
function validateWCAG2Parms(parms){var level,size;parms=parms||{"level":"AA","size":"small"};level=(parms.level||"AA").toUpperCase();size=(parms.size||"small").toLowerCase();if(level!=="AA"&&level!=="AAA"){level="AA";}
if(size!=="small"&&size!=="large"){size="small";}
return{"level":level,"size":size};}
if(typeof module!=="undefined"&&module.exports){module.exports=tinycolor;}
else if(typeof define==='function'&&define.amd){define(function(){return tinycolor;});}
else{window.tinycolor=tinycolor;}})(Math);};if(CloudflareApps.matchPage(CloudflareApps.installs['Krg0zgWQ00wm'].URLPatterns)){var pJS=function(tag_id,params){var canvas_el=document.querySelector("#"+tag_id+" > .particles-js-canvas-el")
this.pJS={canvas:{el:canvas_el,w:canvas_el.offsetWidth,h:canvas_el.offsetHeight},particles:{number:{value:400,density:{enable:true,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:false,anim:{enable:false,speed:2,opacity_min:0,sync:false}},size:{value:20,random:false,anim:{enable:false,speed:20,size_min:0,sync:false}},line_linked:{enable:true,distance:100,color:"#fff",opacity:1,width:1},move:{enable:true,speed:2,direction:"none",random:false,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:3000,rotateY:3000}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:0.4},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:false,fn:{interact:{},modes:{},vendors:{}},tmp:{}}
var pJS=this.pJS
if(params){Object.deepExtend(pJS,params)}
pJS.tmp.obj={size_value:pJS.particles.size.value,size_anim_speed:pJS.particles.size.anim.speed,move_speed:pJS.particles.move.speed,line_linked_distance:pJS.particles.line_linked.distance,line_linked_width:pJS.particles.line_linked.width,mode_grab_distance:pJS.interactivity.modes.grab.distance,mode_bubble_distance:pJS.interactivity.modes.bubble.distance,mode_bubble_size:pJS.interactivity.modes.bubble.size,mode_repulse_distance:pJS.interactivity.modes.repulse.distance}
pJS.fn.retinaInit=function(){if(pJS.retina_detect&&window.devicePixelRatio>1){pJS.canvas.pxratio=window.devicePixelRatio
pJS.tmp.retina=true}
else{pJS.canvas.pxratio=1
pJS.tmp.retina=false}
pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio
pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio
pJS.particles.size.value=pJS.tmp.obj.size_value*pJS.canvas.pxratio
pJS.particles.size.anim.speed=pJS.tmp.obj.size_anim_speed*pJS.canvas.pxratio
pJS.particles.move.speed=pJS.tmp.obj.move_speed*pJS.canvas.pxratio
pJS.particles.line_linked.distance=pJS.tmp.obj.line_linked_distance*pJS.canvas.pxratio
pJS.interactivity.modes.grab.distance=pJS.tmp.obj.mode_grab_distance*pJS.canvas.pxratio
pJS.interactivity.modes.bubble.distance=pJS.tmp.obj.mode_bubble_distance*pJS.canvas.pxratio
pJS.particles.line_linked.width=pJS.tmp.obj.line_linked_width*pJS.canvas.pxratio
pJS.interactivity.modes.bubble.size=pJS.tmp.obj.mode_bubble_size*pJS.canvas.pxratio
pJS.interactivity.modes.repulse.distance=pJS.tmp.obj.mode_repulse_distance*pJS.canvas.pxratio}
pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")}
pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w
pJS.canvas.el.height=pJS.canvas.h
if(pJS&&pJS.interactivity.events.resize){window.addEventListener("resize",function(){pJS.canvas.w=pJS.canvas.el.offsetWidth
pJS.canvas.h=pJS.canvas.el.offsetHeight
if(pJS.tmp.retina){pJS.canvas.w*=pJS.canvas.pxratio
pJS.canvas.h*=pJS.canvas.pxratio}
pJS.canvas.el.width=pJS.canvas.w
pJS.canvas.el.height=pJS.canvas.h
if(!pJS.particles.move.enable){pJS.fn.particlesEmpty()
pJS.fn.particlesCreate()
pJS.fn.particlesDraw()
pJS.fn.vendors.densityAutoParticles()}
pJS.fn.vendors.densityAutoParticles()})}}
pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)}
pJS.fn.canvasClear=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)}
pJS.fn.particle=function(color,opacity,position){this.radius=(pJS.particles.size.random?Math.random():1)*pJS.particles.size.value
if(pJS.particles.size.anim.enable){this.size_status=false
this.vs=pJS.particles.size.anim.speed/100
if(!pJS.particles.size.anim.sync){this.vs=this.vs*Math.random()}}
this.x=position?position.x:Math.random()*pJS.canvas.w
this.y=position?position.y:Math.random()*pJS.canvas.h
if(this.x>pJS.canvas.w-this.radius*2)this.x=this.x-this.radius
else if(this.x<this.radius*2)this.x=this.x+this.radius
if(this.y>pJS.canvas.h-this.radius*2)this.y=this.y-this.radius
else if(this.y<this.radius*2)this.y=this.y+this.radius
if(pJS.particles.move.bounce){pJS.fn.vendors.checkOverlap(this,position)}
this.color={}
if(typeof color.value==="object"){if(Array.isArray(color.value)){var color_selected=color.value[Math.floor(Math.random()*pJS.particles.color.value.length)]
this.color.rgb=hexToRgb(color_selected)}else{if(color.value.r!=undefined&&color.value.g!=undefined&&color.value.b!=undefined){this.color.rgb={r:parseInt(color.value.r,10),g:parseInt(color.value.g,10),b:parseInt(color.value.b,10)}}
if(color.value.h!=undefined&&color.value.s!=undefined&&color.value.l!=undefined){this.color.hsl={h:color.value.h,s:color.value.s,l:color.value.l}}}}
else if(color.value==="random"){this.color.rgb={r:(Math.floor(Math.random()*(255-0+1))+0),g:(Math.floor(Math.random()*(255-0+1))+0),b:(Math.floor(Math.random()*(255-0+1))+0)}}
else if(typeof color.value==="string"){this.color=color
this.color.rgb=hexToRgb(this.color.value)}
this.opacity=(pJS.particles.opacity.random?Math.random():1)*pJS.particles.opacity.value
if(pJS.particles.opacity.anim.enable){this.opacity_status=false
this.vo=pJS.particles.opacity.anim.speed/100
if(!pJS.particles.opacity.anim.sync){this.vo=this.vo*Math.random()}}
var velbase={}
switch(pJS.particles.move.direction){case"top":velbase={x:0,y:-1}
break
case"top-right":velbase={x:0.5,y:-0.5}
break
case"right":velbase={x:1,y:-0}
break
case"bottom-right":velbase={x:0.5,y:0.5}
break
case"bottom":velbase={x:0,y:1}
break
case"bottom-left":velbase={x:-0.5,y:1}
break
case"left":velbase={x:-1,y:0}
break
case"top-left":velbase={x:-0.5,y:-0.5}
break
default:velbase={x:0,y:0}
break}
if(pJS.particles.move.straight){this.vx=velbase.x
this.vy=velbase.y
if(pJS.particles.move.random){this.vx=this.vx*(Math.random())
this.vy=this.vy*(Math.random())}}else{this.vx=velbase.x+Math.random()-0.5
this.vy=velbase.y+Math.random()-0.5}
this.vx_i=this.vx
this.vy_i=this.vy
var shape_type=pJS.particles.shape.type
if(typeof(shape_type)=="object"){if(shape_type instanceof Array){var shape_selected=shape_type[Math.floor(Math.random()*shape_type.length)]
this.shape=shape_selected}}else{this.shape=shape_type}
if(this.shape=="image"){var sh=pJS.particles.shape
this.img={src:sh.image.src,ratio:sh.image.width/sh.image.height}
if(!this.img.ratio)this.img.ratio=1
if(pJS.tmp.img_type=="svg"&&pJS.tmp.source_svg!=undefined){pJS.fn.vendors.createSvgImg(this)
if(pJS.tmp.pushing){this.img.loaded=false}}}}
pJS.fn.particle.prototype.draw=function(){var p=this
if(p.radius_bubble!=undefined){var radius=p.radius_bubble}else{var radius=p.radius}
if(p.opacity_bubble!=undefined){var opacity=p.opacity_bubble}else{var opacity=p.opacity}
if(p.color.rgb){var color_value="rgba("+p.color.rgb.r+","+p.color.rgb.g+","+p.color.rgb.b+","+opacity+")"}else{var color_value="hsla("+p.color.hsl.h+","+p.color.hsl.s+"%,"+p.color.hsl.l+"%,"+opacity+")"}
pJS.canvas.ctx.fillStyle=color_value
pJS.canvas.ctx.beginPath()
switch(p.shape){case"circle":pJS.canvas.ctx.arc(p.x,p.y,radius,0,Math.PI*2,false)
break
case"edge":pJS.canvas.ctx.rect(p.x-radius,p.y-radius,radius*2,radius*2)
break
case"triangle":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius,p.y+radius/1.66,radius*2,3,2)
break
case"polygon":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius/(pJS.particles.shape.polygon.nb_sides/3.5),p.y-radius/(2.66/3.5),radius*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,1)
break
case"star":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius*2/(pJS.particles.shape.polygon.nb_sides/4),p.y-radius/(2*2.66/3.5),radius*2*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,2)
break
case"image":function draw(){pJS.canvas.ctx.drawImage(img_obj,p.x-radius,p.y-radius,radius*2,radius*2/p.img.ratio)}
if(pJS.tmp.img_type=="svg"){var img_obj=p.img.obj}else{var img_obj=pJS.tmp.img_obj}
if(img_obj){draw()}
break}
pJS.canvas.ctx.closePath()
if(pJS.particles.shape.stroke.width>0){pJS.canvas.ctx.strokeStyle=pJS.particles.shape.stroke.color
pJS.canvas.ctx.lineWidth=pJS.particles.shape.stroke.width
pJS.canvas.ctx.stroke()}
pJS.canvas.ctx.fill()}
pJS.fn.particlesCreate=function(){for(var i=0;i<pJS.particles.number.value;i++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value))}}
pJS.fn.particlesUpdate=function(){for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i]
if(pJS.particles.move.enable){var ms=pJS.particles.move.speed/2
p.x+=p.vx*ms
p.y+=p.vy*ms}
if(pJS.particles.opacity.anim.enable){if(p.opacity_status==true){if(p.opacity>=pJS.particles.opacity.value)p.opacity_status=false
p.opacity+=p.vo}else{if(p.opacity<=pJS.particles.opacity.anim.opacity_min)p.opacity_status=true
p.opacity-=p.vo}
if(p.opacity<0)p.opacity=0}
if(pJS.particles.size.anim.enable){if(p.size_status==true){if(p.radius>=pJS.particles.size.value)p.size_status=false
p.radius+=p.vs}else{if(p.radius<=pJS.particles.size.anim.size_min)p.size_status=true
p.radius-=p.vs}
if(p.radius<0)p.radius=0}
if(pJS.particles.move.out_mode=="bounce"){var new_pos={x_left:p.radius,x_right:pJS.canvas.w,y_top:p.radius,y_bottom:pJS.canvas.h}}else{var new_pos={x_left:-p.radius,x_right:pJS.canvas.w+p.radius,y_top:-p.radius,y_bottom:pJS.canvas.h+p.radius}}
if(p.x-p.radius>pJS.canvas.w){p.x=new_pos.x_left
p.y=Math.random()*pJS.canvas.h}
else if(p.x+p.radius<0){p.x=new_pos.x_right
p.y=Math.random()*pJS.canvas.h}
if(p.y-p.radius>pJS.canvas.h){p.y=new_pos.y_top
p.x=Math.random()*pJS.canvas.w}
else if(p.y+p.radius<0){p.y=new_pos.y_bottom
p.x=Math.random()*pJS.canvas.w}
switch(pJS.particles.move.out_mode){case"bounce":if(p.x+p.radius>pJS.canvas.w)p.vx=-p.vx
else if(p.x-p.radius<0)p.vx=-p.vx
if(p.y+p.radius>pJS.canvas.h)p.vy=-p.vy
else if(p.y-p.radius<0)p.vy=-p.vy
break}
if(isInArray("grab",pJS.interactivity.events.onhover.mode)){pJS.fn.modes.grabParticle(p)}
if(isInArray("bubble",pJS.interactivity.events.onhover.mode)||isInArray("bubble",pJS.interactivity.events.onclick.mode)){pJS.fn.modes.bubbleParticle(p)}
if(isInArray("repulse",pJS.interactivity.events.onhover.mode)||isInArray("repulse",pJS.interactivity.events.onclick.mode)){pJS.fn.modes.repulseParticle(p)}
if(pJS.particles.line_linked.enable||pJS.particles.move.attract.enable){for(var j=i+1;j<pJS.particles.array.length;j++){var p2=pJS.particles.array[j]
if(pJS.particles.line_linked.enable){pJS.fn.interact.linkParticles(p,p2)}
if(pJS.particles.move.attract.enable){pJS.fn.interact.attractParticles(p,p2)}
if(pJS.particles.move.bounce){pJS.fn.interact.bounceParticles(p,p2)}}}}}
pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)
pJS.fn.particlesUpdate()
for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i]
p.draw()}}
pJS.fn.particlesEmpty=function(){pJS.particles.array=[]}
pJS.fn.particlesRefresh=function(){cancelRequestAnimFrame(pJS.fn.checkAnimFrame)
cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
pJS.tmp.source_svg=undefined
pJS.tmp.img_obj=undefined
pJS.tmp.count_svg=0
pJS.fn.particlesEmpty()
pJS.fn.canvasClear()
pJS.fn.vendors.start()}
pJS.fn.interact.linkParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=pJS.particles.line_linked.distance){var opacity_line=pJS.particles.line_linked.opacity-(dist/(1/pJS.particles.line_linked.opacity))/pJS.particles.line_linked.distance
if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line
pJS.canvas.ctx.strokeStyle="rgba("+color_line.r+","+color_line.g+","+color_line.b+","+opacity_line+")"
pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width
pJS.canvas.ctx.beginPath()
pJS.canvas.ctx.moveTo(p1.x,p1.y)
pJS.canvas.ctx.lineTo(p2.x,p2.y)
pJS.canvas.ctx.stroke()
pJS.canvas.ctx.closePath()}}}
pJS.fn.interact.attractParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=pJS.particles.line_linked.distance){var ax=dx/(pJS.particles.move.attract.rotateX*1000),ay=dy/(pJS.particles.move.attract.rotateY*1000)
p1.vx-=ax
p1.vy-=ay
p2.vx+=ax
p2.vy+=ay}}
pJS.fn.interact.bounceParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy),dist_p=p1.radius+p2.radius
if(dist<=dist_p){p1.vx=-p1.vx
p1.vy=-p1.vy
p2.vx=-p2.vx
p2.vy=-p2.vy}}
pJS.fn.modes.pushParticles=function(nb,pos){pJS.tmp.pushing=true
for(var i=0;i<nb;i++){pJS.particles.array.shift()
pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value,{"x":pos?pos.pos_x:Math.random()*pJS.canvas.w,"y":pos?pos.pos_y:Math.random()*pJS.canvas.h}))
if(i==nb-1){if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}
pJS.tmp.pushing=false}}}
pJS.fn.modes.removeParticles=function(nb){pJS.particles.array.splice(0,nb)
if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}}
pJS.fn.modes.bubbleParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray("bubble",pJS.interactivity.events.onhover.mode)){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),ratio=1-dist_mouse/pJS.interactivity.modes.bubble.distance
function init(){p.opacity_bubble=p.opacity
p.radius_bubble=p.radius}
if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(ratio>=0&&pJS.interactivity.status=="mousemove"){if(pJS.interactivity.modes.bubble.size!=pJS.particles.size.value){if(pJS.interactivity.modes.bubble.size>pJS.particles.size.value){var size=p.radius+(pJS.interactivity.modes.bubble.size*ratio)
if(size>=0){p.radius_bubble=size}}else{var dif=p.radius-pJS.interactivity.modes.bubble.size,size=p.radius-(dif*ratio)
if(size>0){p.radius_bubble=size}else{p.radius_bubble=0}}}
if(pJS.interactivity.modes.bubble.opacity!=pJS.particles.opacity.value){if(pJS.interactivity.modes.bubble.opacity>pJS.particles.opacity.value){var opacity=pJS.interactivity.modes.bubble.opacity*ratio
if(opacity>p.opacity&&opacity<=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}else{var opacity=p.opacity-(pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio
if(opacity<p.opacity&&opacity>=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}}}}else{init()}
if(pJS.interactivity.status=="mouseleave"){init()}}
else if(pJS.interactivity.events.onclick.enable&&isInArray("bubble",pJS.interactivity.events.onclick.mode)){if(pJS.tmp.bubble_clicking){var dx_mouse=p.x-pJS.interactivity.mouse.click_pos_x,dy_mouse=p.y-pJS.interactivity.mouse.click_pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),time_spent=(new Date().getTime()-pJS.interactivity.mouse.click_time)/1000
if(time_spent>pJS.interactivity.modes.bubble.duration){pJS.tmp.bubble_duration_end=true}
if(time_spent>pJS.interactivity.modes.bubble.duration*2){pJS.tmp.bubble_clicking=false
pJS.tmp.bubble_duration_end=false}}
function process(bubble_param,particles_param,p_obj_bubble,p_obj,id){if(bubble_param!=particles_param){if(!pJS.tmp.bubble_duration_end){if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(p_obj_bubble!=undefined)var obj=p_obj_bubble
else var obj=p_obj
if(obj!=bubble_param){var value=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration)
if(id=="size")p.radius_bubble=value
if(id=="opacity")p.opacity_bubble=value}}else{if(id=="size")p.radius_bubble=undefined
if(id=="opacity")p.opacity_bubble=undefined}}else{if(p_obj_bubble!=undefined){var value_tmp=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration),dif=bubble_param-value_tmp
value=bubble_param+dif
if(id=="size")p.radius_bubble=value
if(id=="opacity")p.opacity_bubble=value}}}}
if(pJS.tmp.bubble_clicking){process(pJS.interactivity.modes.bubble.size,pJS.particles.size.value,p.radius_bubble,p.radius,"size")
process(pJS.interactivity.modes.bubble.opacity,pJS.particles.opacity.value,p.opacity_bubble,p.opacity,"opacity")}}}
pJS.fn.modes.repulseParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray("repulse",pJS.interactivity.events.onhover.mode)&&pJS.interactivity.status=="mousemove"){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse)
var normVec={x:dx_mouse/dist_mouse,y:dy_mouse/dist_mouse},repulseRadius=pJS.interactivity.modes.repulse.distance,velocity=100,repulseFactor=clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity,0,50)
var pos={x:p.x+normVec.x*repulseFactor,y:p.y+normVec.y*repulseFactor}
if(pJS.particles.move.out_mode=="bounce"){if(pos.x-p.radius>0&&pos.x+p.radius<pJS.canvas.w)p.x=pos.x
if(pos.y-p.radius>0&&pos.y+p.radius<pJS.canvas.h)p.y=pos.y}else{p.x=pos.x
p.y=pos.y}}
else if(pJS.interactivity.events.onclick.enable&&isInArray("repulse",pJS.interactivity.events.onclick.mode)){if(!pJS.tmp.repulse_finish){pJS.tmp.repulse_count++
if(pJS.tmp.repulse_count==pJS.particles.array.length){pJS.tmp.repulse_finish=true}}
if(pJS.tmp.repulse_clicking){var repulseRadius=Math.pow(pJS.interactivity.modes.repulse.distance/6,3)
var dx=pJS.interactivity.mouse.click_pos_x-p.x,dy=pJS.interactivity.mouse.click_pos_y-p.y,d=dx*dx+dy*dy
var force=-repulseRadius/d*1
function process(){var f=Math.atan2(dy,dx)
p.vx=force*Math.cos(f)
p.vy=force*Math.sin(f)
if(pJS.particles.move.out_mode=="bounce"){var pos={x:p.x+p.vx,y:p.y+p.vy}
if(pos.x+p.radius>pJS.canvas.w)p.vx=-p.vx
else if(pos.x-p.radius<0)p.vx=-p.vx
if(pos.y+p.radius>pJS.canvas.h)p.vy=-p.vy
else if(pos.y-p.radius<0)p.vy=-p.vy}}
if(d<=repulseRadius){process()}}else{if(pJS.tmp.repulse_clicking==false){p.vx=p.vx_i
p.vy=p.vy_i}}}}
pJS.fn.modes.grabParticle=function(p){if(pJS.interactivity.events.onhover.enable&&pJS.interactivity.status=="mousemove"){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse)
if(dist_mouse<=pJS.interactivity.modes.grab.distance){var opacity_line=pJS.interactivity.modes.grab.line_linked.opacity-(dist_mouse/(1/pJS.interactivity.modes.grab.line_linked.opacity))/pJS.interactivity.modes.grab.distance
if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line
pJS.canvas.ctx.strokeStyle="rgba("+color_line.r+","+color_line.g+","+color_line.b+","+opacity_line+")"
pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width
pJS.canvas.ctx.beginPath()
pJS.canvas.ctx.moveTo(p.x,p.y)
pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y)
pJS.canvas.ctx.stroke()
pJS.canvas.ctx.closePath()}}}}
pJS.fn.vendors.eventsListeners=function(){if(pJS.interactivity.detect_on=="window"){pJS.interactivity.el=window}else{pJS.interactivity.el=pJS.canvas.el}
if(pJS.interactivity.events.onhover.enable||pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener("mousemove",function(e){if(pJS.interactivity.el==window){var pos_x=e.clientX,pos_y=e.clientY}
else{var pos_x=e.offsetX||e.clientX,pos_y=e.offsetY||e.clientY}
pJS.interactivity.mouse.pos_x=pos_x
pJS.interactivity.mouse.pos_y=pos_y
if(pJS.tmp.retina){pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio
pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio}
pJS.interactivity.status="mousemove"})
pJS.interactivity.el.addEventListener("mouseleave",function(e){pJS.interactivity.mouse.pos_x=null
pJS.interactivity.mouse.pos_y=null
pJS.interactivity.status="mouseleave"})}
if(pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener("click",function(){pJS.interactivity.mouse.click_pos_x=pJS.interactivity.mouse.pos_x
pJS.interactivity.mouse.click_pos_y=pJS.interactivity.mouse.pos_y
pJS.interactivity.mouse.click_time=new Date().getTime()
if(pJS.interactivity.events.onclick.enable){switch(pJS.interactivity.events.onclick.mode){case"push":if(pJS.particles.move.enable){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}else{if(pJS.interactivity.modes.push.particles_nb==1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}
else if(pJS.interactivity.modes.push.particles_nb>1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb)}}
break
case"remove":pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb)
break
case"bubble":pJS.tmp.bubble_clicking=true
break
case"repulse":pJS.tmp.repulse_clicking=true
pJS.tmp.repulse_count=0
pJS.tmp.repulse_finish=false
setTimeout(function(){pJS.tmp.repulse_clicking=false},pJS.interactivity.modes.repulse.duration*1000)
break}}})}}
pJS.fn.vendors.densityAutoParticles=function(){if(pJS.particles.number.density.enable){var area=pJS.canvas.el.width*pJS.canvas.el.height/1000
if(pJS.tmp.retina){area=area/(pJS.canvas.pxratio*2)}
var nb_particles=area*pJS.particles.number.value/pJS.particles.number.density.value_area
var missing_particles=pJS.particles.array.length-nb_particles
if(missing_particles<0)pJS.fn.modes.pushParticles(Math.abs(missing_particles))
else pJS.fn.modes.removeParticles(missing_particles)}}
pJS.fn.vendors.checkOverlap=function(p1,position){for(var i=0;i<pJS.particles.array.length;i++){var p2=pJS.particles.array[i]
var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=p1.radius+p2.radius){p1.x=position?position.x:Math.random()*pJS.canvas.w
p1.y=position?position.y:Math.random()*pJS.canvas.h
pJS.fn.vendors.checkOverlap(p1)}}}
pJS.fn.vendors.createSvgImg=function(p){var svgXml=pJS.tmp.source_svg,rgbHex=/#([0-9A-F]{3,6})/gi,coloredSvgXml=svgXml.replace(rgbHex,function(m,r,g,b){if(p.color.rgb){var color_value="rgba("+p.color.rgb.r+","+p.color.rgb.g+","+p.color.rgb.b+","+p.opacity+")"}else{var color_value="hsla("+p.color.hsl.h+","+p.color.hsl.s+"%,"+p.color.hsl.l+"%,"+p.opacity+")"}
return color_value})
var svg=new Blob([coloredSvgXml],{type:"image/svg+xml;charset=utf-8"}),DOMURL=window.URL||window.webkitURL||window,url=DOMURL.createObjectURL(svg)
var img=new Image()
img.addEventListener("load",function(){p.img.obj=img
p.img.loaded=true
DOMURL.revokeObjectURL(url)
pJS.tmp.count_svg++})
img.src=url}
pJS.fn.vendors.destroypJS=function(){cancelAnimationFrame(pJS.fn.drawAnimFrame)
canvas_el.remove()
pJSDom=[]}
pJS.fn.vendors.drawShape=function(c,startX,startY,sideLength,sideCountNumerator,sideCountDenominator){var sideCount=sideCountNumerator*sideCountDenominator
var decimalSides=sideCountNumerator/sideCountDenominator
var interiorAngleDegrees=(180*(decimalSides-2))/decimalSides
var interiorAngle=Math.PI-Math.PI*interiorAngleDegrees/180
c.save()
c.beginPath()
c.translate(startX,startY)
c.moveTo(0,0)
for(var i=0;i<sideCount;i++){c.lineTo(sideLength,0)
c.translate(sideLength,0)
c.rotate(interiorAngle)}
c.fill()
c.restore()}
pJS.fn.vendors.exportImg=function(){window.open(pJS.canvas.el.toDataURL("image/png"),"_blank")}
pJS.fn.vendors.loadImg=function(type){pJS.tmp.img_error=undefined
if(pJS.particles.shape.image.src!=""){if(type=="svg"){var xhr=new XMLHttpRequest()
xhr.open("GET",pJS.particles.shape.image.src)
xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){pJS.tmp.source_svg=data.currentTarget.response
pJS.fn.vendors.checkBeforeDraw()}else{console.log("Error pJS - Image not found")
pJS.tmp.img_error=true}}}
xhr.send()}else{var img=new Image()
img.addEventListener("load",function(){pJS.tmp.img_obj=img
pJS.fn.vendors.checkBeforeDraw()})
img.src=pJS.particles.shape.image.src}}else{console.log("Error pJS - No image.src")
pJS.tmp.img_error=true}}
pJS.fn.vendors.draw=function(){if(pJS.particles.shape.type=="image"){if(pJS.tmp.img_type=="svg"){if(pJS.tmp.count_svg>=pJS.particles.number.value){pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}else{if(pJS.tmp.img_obj!=undefined){pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}}else{pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}
pJS.fn.vendors.checkBeforeDraw=function(){if(pJS.particles.shape.type=="image"){if(pJS.tmp.img_type=="svg"&&pJS.tmp.source_svg==undefined){pJS.tmp.checkAnimFrame=requestAnimFrame(check)}else{cancelRequestAnimFrame(pJS.tmp.checkAnimFrame)
if(!pJS.tmp.img_error){pJS.fn.vendors.init()
pJS.fn.vendors.draw()}}}else{pJS.fn.vendors.init()
pJS.fn.vendors.draw()}}
pJS.fn.vendors.init=function(){pJS.fn.retinaInit()
pJS.fn.canvasInit()
pJS.fn.canvasSize()
pJS.fn.canvasPaint()
pJS.fn.particlesCreate()
pJS.fn.vendors.densityAutoParticles()
pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color)}
pJS.fn.vendors.start=function(){if(isInArray("image",pJS.particles.shape.type)){pJS.tmp.img_type=pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length-3)
pJS.fn.vendors.loadImg(pJS.tmp.img_type)}else{pJS.fn.vendors.checkBeforeDraw()}}
pJS.fn.vendors.eventsListeners()
pJS.fn.vendors.start()}
Object.deepExtend=function(destination,source){for(var property in source){if(source[property]&&source[property].constructor&&source[property].constructor===Object){destination[property]=destination[property]||{}
arguments.callee(destination[property],source[property])}else{destination[property]=source[property]}}
return destination}
window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})()
window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})()
function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i
hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b})
var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null}
function clamp(number,min,max){return Math.min(Math.max(number,min),max)}
function isInArray(value,array){return array.indexOf(value)>-1}
window.pJSDom=[]
window.particlesJS=function(tag_id,params){if(typeof(tag_id)!="string"){params=tag_id
tag_id="particles-js"}
if(!tag_id){tag_id="particles-js"}
var pJS_tag=document.getElementById(tag_id),pJS_canvas_class="particles-js-canvas-el",exist_canvas=pJS_tag.getElementsByClassName(pJS_canvas_class)
if(exist_canvas.length){while(exist_canvas.length>0){pJS_tag.removeChild(exist_canvas[0])}}
var canvas_el=document.createElement("canvas")
canvas_el.className=pJS_canvas_class
canvas_el.style.width="100%"
canvas_el.style.height="100%"
var canvas=document.getElementById(tag_id).appendChild(canvas_el)
if(canvas!=null){pJSDom.push(new pJS(tag_id,params))}}
window.particlesJS.load=function(tag_id,path_config_json,callback){var xhr=new XMLHttpRequest()
xhr.open("GET",path_config_json)
xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){var params=JSON.parse(data.currentTarget.response)
window.particlesJS(tag_id,params)
if(callback)callback()}else{console.log("Error pJS - XMLHttpRequest status: "+xhr.status)
console.log("Error pJS - File config not found")}}}
xhr.send()}};if(CloudflareApps.matchPage(CloudflareApps.installs['Krg0zgWQ00wm'].URLPatterns)){"use strict";(function(){if(!window.addEventListener)return;var _window=window;var tinycolor=_window.tinycolor;var CONTAINER_ID="eager-particles-js";var getComputedStyle=document.defaultView.getComputedStyle.bind(document.defaultView);var options=CloudflareApps.installs['Krg0zgWQ00wm'].options;var element=void 0;function getParticleColor(){var particleColor=void 0;if(options.particleColor){particleColor=tinycolor(options.particleColor);}else{var backgroundColor=options.backgroundColor||getComputedStyle(document.body).backgroundColor;var components=tinycolor(backgroundColor).toHsl();components.l=Math.abs((components.l+0.5)%1)+(1-components.s)*0.1;particleColor=tinycolor(components);}
return{hex:particleColor.toHexString(),rgb:particleColor.toRgb()};}
function getInteractivityEvents(){return{onhover:{enable:options.interaction.onHover!=="none",mode:options.interaction.onHover},onclick:{enable:options.interaction.onClick!=="none",mode:options.interaction.onClick},resize:true};}
function updateElement(){var particleColor=getParticleColor();element=Eager.createElement({selector:"body",method:"prepend"},element);element.id=CONTAINER_ID;if(element.parentNode.tagName!=="BODY"){element.parentNode.setAttribute("data-particle-parent","");}
element.style.backgroundColor=options.backgroundColor;window.particlesJS(CONTAINER_ID,{particles:{number:{value:options.fewerParticles?40:80,density:{enable:true,value_area:800}},color:{value:particleColor.hex},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:0.8,random:true,anim:{enable:true,speed:1,opacity_min:0.1,sync:false}},size:{value:3,random:true,anim:{enable:false,speed:40,size_min:0.1,sync:false}},line_linked:{enable:true,distance:160,color:particleColor.hex,opacity:0.45,width:1},move:{enable:true,speed:6,direction:"none",random:false,straight:false,out_mode:options.behavior.outMode,bounce:false,attract:{enable:false,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:getInteractivityEvents(),modes:{grab:{distance:200,line_linked:{opacity:0.4}},bubble:{distance:350,size:3.1,duration:2,opacity:0.8,speed:3},repulse:{distance:80,duration:0.3},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true});}
if(document.readyState==="loading"){window.addEventListener("load",updateElement);}else{updateElement();}
window.CloudflareApps.installs['Krg0zgWQ00wm'].scope={setColors:function setColors(nextOptions){options=nextOptions;if(!window.pJSDom){updateElement();return;}
if(element)element.style.backgroundColor=options.backgroundColor;var _getParticleColor=getParticleColor();var hex=_getParticleColor.hex;var rgb=_getParticleColor.rgb;window.pJSDom.forEach(function(_ref){var particles=_ref.pJS.particles;particles.color.value=hex;particles.color.rgb=rgb;particles.line_linked.color=hex;particles.line_linked.color_rgb_line=rgb;});},setCommon:function setCommon(nextOptions){options=nextOptions;if(!window.pJSDom){updateElement();return;}
window.pJSDom.forEach(function(_ref2){var pJS=_ref2.pJS;pJS.particles.move.out_mode=options.behavior.outMode;pJS.interactivity.events=getInteractivityEvents();});},setResetworthy:function setResetworthy(nextOptions){options=nextOptions;if(window.pJSDom){window.pJSDom.forEach(function($){return $.pJS.fn.vendors.destroypJS();});}
updateElement();}};})();};if(CloudflareApps.matchPage(CloudflareApps.installs['W8sRtzU3457g'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['W8sRtzU3457g'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['W8sRtzU3457g'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['x57B5QY7EQPW'].URLPatterns)){(function(){var demoChatraId="x57B5QY7EQPW"=='preview'?'hX8ihkAcyHK93ue99':void 0;var demoGroupId="x57B5QY7EQPW"=='preview'?'BKjdxwGNFhDE4DJ2r':void 0;var currentChatraId;function convertOptions(options,isDemo){var useChatraButtonSettings=options.button.useChatraSettings&&!isDemo;if(!options.button)options.button={};if(!options.window)options.window={};if(!options.advanced)options.advanced={};var result={chatWidth:parseInt(options.window.width)||void 0,chatHeight:parseInt(options.window.height)||void 0,zIndex:options.advanced.zIndex!==null?options.advanced.zIndex:void 0,mobileOnly:options.advanced.devices=='mob',disabledOnMobile:options.advanced.devices=='notMob',language:options.advanced.language||(isDemo?'en':void 0)};if(isDemo||options.advanced.groupId){result.groupId=isDemo?demoGroupId:options.advanced.groupId;}
if(!useChatraButtonSettings){result.buttonStyle=options.button.style||void 0;result.buttonSize=parseInt(options.button.size)||void 0;result.buttonPosition=options.button.position||void 0;}
result.colors={};if(!useChatraButtonSettings&&options.button.textColor)result.colors.buttonText=options.button.textColor;if(!useChatraButtonSettings&&options.button.bgColor)result.colors.buttonBg=options.button.bgColor;if(options.window.bgColor)result.colors.chatBg=options.window.bgColor;if(options.window.clientBubbleBg)result.colors.clientBubbleBg=options.window.clientBubbleBg;if(options.window.agentBubbleBg)result.colors.agentBubbleBg=options.window.agentBubbleBg;return result;}
function initialize(options){var chatraId=(options.account||{}).userId;window.ChatraSetup=convertOptions(options,!chatraId);currentChatraId=chatraId;window.ChatraID=chatraId||demoChatraId;window.ChatraProtocol='https:';var s=document.createElement('script');window.Chatra=window.Chatra||function(){(window.Chatra.q=window.Chatra.q||[]).push(arguments);};s.async=true;s.src='https://call.chatra.io/chatra.js';if(document.head)document.head.appendChild(s);}
window.CloudflareApps.installs['x57B5QY7EQPW'].scope.setOptions=function(options){var newChatraId=(options.account||{}).userId;var newChatraSetup=convertOptions(options,!newChatraId);if(newChatraId!=currentChatraId){currentChatraId=newChatraId;window.ChatraID=newChatraId||demoChatraId;window.ChatraSetup=newChatraSetup;Chatra('restart');}
else if(window.ChatraSetup.buttonStyle!=newChatraSetup.buttonStyle){window.ChatraSetup=newChatraSetup;Chatra('restart');Chatra('minimizeWidget');}
else if(window.ChatraSetup.mobileOnly!=newChatraSetup.mobileOnly||window.ChatraSetup.disabledOnMobile!=newChatraSetup.disabledOnMobile||window.ChatraSetup.language!=newChatraSetup.language){var isExpanded=Chatra._chatExpanded;window.ChatraSetup=newChatraSetup;Chatra('restart');if(isExpanded)Chatra('expandWidget');}
else{var chatButtonChanged=false;var chatWindowChanged=false;if(window.ChatraSetup.buttonSize!=newChatraSetup.buttonSize){Chatra('setButtonSize',newChatraSetup.buttonSize);chatButtonChanged=true;}
if(window.ChatraSetup.buttonPosition!=newChatraSetup.buttonPosition){Chatra('setButtonPosition',newChatraSetup.buttonPosition);chatButtonChanged=true;}
if(window.ChatraSetup.chatWidth!=newChatraSetup.chatWidth){Chatra('setChatWidth',newChatraSetup.chatWidth);chatWindowChanged=true;}
if(window.ChatraSetup.chatHeight!=newChatraSetup.chatHeight){Chatra('setChatHeight',newChatraSetup.chatHeight);chatWindowChanged=true;}
if(window.ChatraSetup.zIndex!=newChatraSetup.zIndex)
Chatra('setZIndex',newChatraSetup.zIndex);if(window.ChatraSetup.groupId!=newChatraSetup.groupId)
Chatra('setGroupId',newChatraSetup.groupId?newChatraSetup.groupId:null);if(window.ChatraSetup.colors.buttonText!=newChatraSetup.colors.buttonText||window.ChatraSetup.colors.buttonBg!=newChatraSetup.colors.buttonBg){Chatra('setColors',newChatraSetup.colors);chatButtonChanged=true;}
else if(window.ChatraSetup.colors.chatBg!=newChatraSetup.colors.chatBg||window.ChatraSetup.colors.clientBubbleBg!=newChatraSetup.colors.clientBubbleBg||window.ChatraSetup.colors.agentBubbleBg!=newChatraSetup.colors.agentBubbleBg){Chatra('setColors',newChatraSetup.colors);chatWindowChanged=true;}
if(chatButtonChanged&&!chatWindowChanged&&Chatra._chatExpanded)Chatra('minimizeWidget');else if(chatWindowChanged&&!chatButtonChanged&&!Chatra._chatExpanded)Chatra('expandWidget');window.ChatraSetup=newChatraSetup;}};initialize(CloudflareApps.installs['x57B5QY7EQPW'].options);})();};if(CloudflareApps.matchPage(CloudflareApps.installs['DhqQw7IOJME8'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0);})
([(function(module,exports,__webpack_require__){"use strict";var _slicedToArray=(function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i['return'])_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError('Invalid attempt to destructure non-iterable instance')}}}())
function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}
(function(){if(!window.addEventListener)return
var STATE_ATTRIBUTE='data-cf-google-fonts-state'
var FONT_PATTERN=/\+/g
var FONT_TYPE={serif:'serif',sansSerif:'sans-serif',fancy:'cursive',handwriting:'cursive',monospace:'monospace'}
var loadingStyle=document.createElement('style')
loadingStyle.innerHTML='\n    body, body * {\n      color: transparent !important;\n    }\n  '
var googleFontLoader=document.createElement('script')
var fontStyles=document.createElement('style')
var options=CloudflareApps.installs['DhqQw7IOJME8'].options
function onFontLoadFinish(){document.body.setAttribute(STATE_ATTRIBUTE,'loaded')
loadingStyle.parentNode&&loadingStyle.parentNode.removeChild(loadingStyle)}
function updateElement(){var _options=options,headers=_options.headers,body=_options.body,custom=_options.custom
headers.selector='h1, h2, h3, h4, h5, h6, headers'
body.selector='body'
var fonts=[headers,body].concat(custom)
var families=fonts.map(function(_ref){var category=_ref.category,attrs=_objectWithoutProperties(_ref,['category'])
return attrs[category]})
window.WebFont.load({active:function active(){fontStyles.innerHTML=fonts.reduce(function(rules,_ref2){var category=_ref2.category,attrs=_objectWithoutProperties(_ref2,['category'])
var _attrs$category$split=attrs[category].split(':'),_attrs$category$split2=_slicedToArray(_attrs$category$split,1),fontFamily=_attrs$category$split2[0]
return rules+('\n            '+attrs.selector+' {\n              font-family: \''+fontFamily.replace(FONT_PATTERN,' ')+'\', '+FONT_TYPE[category]+' !important;\n            }\n          ')},'')
document.head.appendChild(fontStyles)
onFontLoadFinish()},inactive:function inactive(){onFontLoadFinish()},google:{families:families}})}
function bootstrap(){if("DhqQw7IOJME8"==='preview'){var _document$defaultView=document.defaultView.getComputedStyle(document.body),color=_document$defaultView.color
var devStylesheet=document.createElement('style')
devStylesheet.innerHTML='\n        body['+STATE_ATTRIBUTE+'] {\n          transition-duration: 150ms;\n          transition-property: color, text-shadow;\n          transition-timing-function: linear;\n        }\n\n        body['+STATE_ATTRIBUTE+'="updating"],\n        body['+STATE_ATTRIBUTE+'="updating"] * {\n          color: transparent !important;\n          text-shadow: 0 0 6px '+color+';\n        }\n      '
document.head.appendChild(devStylesheet)}
document.body.setAttribute(STATE_ATTRIBUTE,'boostrapping')
googleFontLoader.src='https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
googleFontLoader.async=true
googleFontLoader.addEventListener('load',updateElement)
document.head.appendChild(googleFontLoader)}
document.head.appendChild(loadingStyle)
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['DhqQw7IOJME8'].scope={setOptions:function setOptions(nextOptions){document.body.setAttribute(STATE_ATTRIBUTE,'updating')
options=nextOptions
updateElement()}}})()})]);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,I2VhZ2VyLXBhcnRpY2xlcy1qcyB7CiAgYm90dG9tOiAwOwogIGRpc3BsYXk6IGJsb2NrOwogIGxlZnQ6IDA7CiAgcG9zaXRpb246IGZpeGVkOwogIHJpZ2h0OiAwOwogIHRvcDogMDsKICB6LWluZGV4OiAtMTsKfQoKI2VhZ2VyLXBhcnRpY2xlcy1qcyAucGFydGljbGVzLWpzLWNhbnZhcy1lbCB7CiAgZGlzcGxheTogYmxvY2s7CiAgaGVpZ2h0OiAxMDAlOwogIHdpZHRoOiAxMDAlOwp9';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/9uKXPMDFjVcej2Ab3FQ-oTo5_KE.js';document.head.appendChild(script);})();