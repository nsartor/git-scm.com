!function(e,t,i){var n=.4,s={use_html5_location:!1,ipinfodb_key:!1,gapi_location:!0,location_cookie:"location",location_cookie_timeout:5,session_timeout:32,session_cookie:"first_session"},r=function(){if(String.prototype.contains=function(e){if("string"==typeof e)return-1!==this.indexOf(e);for(var t=0;t<e.length;t++)if(-1!==this.indexOf(e[t]))return!0;return!1},e.session&&e.session.options)for(option in e.session.options)s[option]=e.session.options[option];var t={api_version:n,locale:a.locale(),current_session:a.session(),original_session:a.session(s.session_cookie,1e3*60*60*24*s.session_timeout),browser:a.browser(),plugins:a.plugins(),time:a.time(),device:a.device()};if(s.use_html5_location?t.location=a.html5_location():s.ipinfodb_key?t.location=a.ipinfodb_location(s.ipinfodb_key):s.gapi_location&&(t.location=a.gapi_location()),e.session&&e.session.start)var i=e.session.start;var r,o=0,l=function(){0===o&&i&&i(e.session)};e.session={};for(var c in t)if(r=t[c],"function"==typeof r)try{r(function(t){e.session[c]=t,o--,l()}),o++}catch(u){e.console&&"function"==typeof console.log&&console.log(u)}else e.session[c]=r;l()},o={detect:function(){return{browser:this.search(this.data.browser),version:this.search(i.userAgent)||this.search(i.appVersion),os:this.search(this.data.os)}},search:function(e){if("object"!=typeof e){var t=e.indexOf(this.version_string);if(-1==t)return;return parseFloat(e.substr(t+this.version_string.length+1))}for(var i=0;i<e.length;i++){var n=e[i].string,s=e[i].prop;if(this.version_string=e[i].versionSearch||e[i].identity,n){if(-1!=n.indexOf(e[i].subString))return e[i].identity}else if(s)return e[i].identity}},data:{browser:[{string:i.userAgent,subString:"Chrome",identity:"Chrome"},{string:i.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:i.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:e.opera,identity:"Opera",versionSearch:"Version"},{string:i.vendor,subString:"iCab",identity:"iCab"},{string:i.vendor,subString:"KDE",identity:"Konqueror"},{string:i.userAgent,subString:"Firefox",identity:"Firefox"},{string:i.vendor,subString:"Camino",identity:"Camino"},{string:i.userAgent,subString:"Netscape",identity:"Netscape"},{string:i.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:i.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:i.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:i.platform,subString:"Win",identity:"Windows"},{string:i.platform,subString:"Mac",identity:"Mac"},{string:i.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:i.userAgent,subString:"iPad",identitiy:"iPad"},{string:i.platform,subString:"Linux",identity:"Linux"},{string:i.userAgent,subString:"Android",identity:"Android"}]}},a={browser:function(){return o.detect()},time:function(){var e=new Date,t=new Date;return e.setMonth(0),e.setDate(1),t.setMonth(6),t.setDate(1),{tz_offset:-(new Date).getTimezoneOffset()/60,observes_dst:e.getTimezoneOffset()!==t.getTimezoneOffset()}},locale:function(){var e=(i.language||i.browserLanguage||i.systemLanguage||i.userLanguage).split("-");return 2==e.length?{country:e[1].toLowerCase(),lang:e[0].toLowerCase()}:e?{lang:e[0].toLowerCase(),country:null}:{lang:null,country:null}},device:function(){var n={screen:{width:screen.width,height:screen.height}},s=t.documentElement,r=t.getElementsByTagName("body")[0];return n.viewport={width:e.innerWidth||s.clientWidth||r.clientWidth,height:e.innerHeight||s.clientHeight||r.clientHeight},n.is_tablet=!!i.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i),n.is_phone=!n.isTablet&&!!i.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i),n.is_mobile=n.is_tablet||n.is_phone,n},plugins:function(){var e=function(e){if(i.plugins){for(var t,n=0,s=i.plugins.length;s>n;n++)if(t=i.plugins[n],t&&t.name&&-1!==t.name.toLowerCase().indexOf(e))return!0;return!1}return!1};return{flash:e("flash"),silverlight:e("silverlight"),java:e("java"),quicktime:e("quicktime")}},session:function(i,n){var s=l.get_obj(i);if(null==s){s={visits:1,start:(new Date).getTime(),last_visit:(new Date).getTime(),url:e.location.href,path:e.location.pathname,referrer:t.referrer,referrer_info:l.parse_url(t.referrer),search:{engine:null,query:null}};var r,o=[{name:"Google",host:"google",query:"q"},{name:"Bing",host:"bing.com",query:"q"},{name:"Yahoo",host:"search.yahoo",query:"p"},{name:"AOL",host:"search.aol",query:"q"},{name:"Ask",host:"ask.com",query:"q"},{name:"Baidu",host:"baidu.com",query:"wd"}],a=o.length,c=0,u="q query term p wd query text".split(" ");for(c=0;a>c;c++)if(r=o[c],-1!==s.referrer_info.host.indexOf(r.host)){s.search.engine=r.name,s.search.query=s.referrer_info.query[r.query],s.search.terms=s.search.query?s.search.query.split(" "):null;break}if(null===s.search.engine&&s.referrer_info.search.length>1)for(c=0;c<u.length;c++){var h=s.referrer_info.query[u[c]];if(h){s.search.engine="Unknown",s.search.query=h,s.search.terms=h.split(" ");break}}}else s.last_visit=(new Date).getTime(),s.visits++;return l.set_cookie(i,l.package_obj(s),n),s},html5_location:function(){return function(e){i.geolocation.getCurrentPosition(function(t){t.source="html5",e(t)},function(){s.gapi_location?a.gapi_location()(e):e({error:!0,source:"html5"})})}},gapi_location:function(){return function(t){var i=l.get_obj(s.location_cookie);i&&"google"===i.source?t(i):(e.gloader_ready=function(){"google"in e&&(e.google.loader.ClientLocation?(e.google.loader.ClientLocation.source="google",t(e.google.loader.ClientLocation)):t({error:!0,source:"google"}),l.set_cookie(s.location_cookie,l.package_obj(e.google.loader.ClientLocation),1e3*60*60*s.location_cookie_timeout))},l.embed_script("https://www.google.com/jsapi?callback=gloader_ready"))}},ipinfodb_location:function(t){return function(i){var n=l.get_obj(s.location_cookie);n&&"ipinfodb"===n.source&&i(n),e.ipinfocb=function(e){if("OK"===e.statusCode)e.source="ipinfodb",l.set_cookie(s.location_cookie,l.package_obj(e),1e3*60*60*s.location_cookie),i(e);else{if(s.gapi_location)return a.gapi_location()(i);i({error:!0,source:"ipinfodb",message:e.statusMessage})}},l.embed_script("http://api.ipinfodb.com/v3/ip-city/?key="+t+"&format=json&callback=ipinfocb")}}},l={parse_url:function(e){var i=t.createElement("a"),n={};if(i.href=e,query_str=i.search.substr(1),""!=query_str)for(var s,r=query_str.split("&"),o=0,a=r.length;a>o;o++)s=r[o].split("="),2===s.length&&(n[s[0]]=decodeURI(s[1]));return{host:i.host,path:i.pathname,protocol:i.protocol,port:""===i.port?80:i.port,search:i.search,query:n}},set_cookie:function(i,n,s,r){if(!t.cookie||!i||!n)return null;if(!r)var r={};return(null===n||void 0===n)&&(s=-1),s&&(r.expires=(new Date).getTime()+s),document.cookie=[encodeURIComponent(i),"=",encodeURIComponent(String(n)),r.expires?"; expires="+new Date(r.expires).toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",e.location&&"https:"===e.location.protocol?"; secure":""].join("")},get_cookie:function(e,t){return(t=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?decodeURIComponent(t[1]):null},embed_script:function(e){var i=t.createElement("script");i.type="text/javascript",i.src=e,t.getElementsByTagName("body")[0].appendChild(i)},package_obj:function(e){e.version=n;var t=c.stringify(e);return delete e.version,t},get_obj:function(e){var t;try{t=c.parse(l.get_cookie(e))}catch(i){}return t&&t.version==n?(delete t.version,t):void 0}},c={parse:e.JSON&&e.JSON.parse||function(e){return"string"==typeof e&&e?new Function("return "+e)():null},stringify:e.JSON&&e.JSON.stringify||function(e){var t=typeof e;if("object"===t&&null!==e){var i,n,s=[],r=e&&e.constructor===Array;for(i in e)n=e[i],t=typeof n,"string"===t?n='"'+n+'"':"object"===t&&null!==n&&(n=this.stringify(n)),s.push((r?"":'"'+i+'":')+n);return(r?"[":"{")+s.join(",")+(r?"]":"}")}return"string"===t?'"'+e+'"':void 0}};r()}(window,document,navigator);