
function handleOldDownload2()
{
console.log( "ready2!" ); 
var hyperlink = document.createElement("a");
useOldLink = 0;
console.log( "using new hyperlinks!" ); 
// if download property is undefined
// browser doesnt support the feature
if(hyperlink.download === undefined) {
  // do stuff
  useOldLink = 1;
  
  }
else
 {
console.log( "must use old hyperlinks!" ); 
var hrefs = document.getElementsByTagName("a"); 
for (var i = 0; i < hrefs.length; i++) { 
    var ref = hrefs[i].getAttribute("href"); 
   // if ( status == "open" ) { 
        // grab the data 
   // }
    console.log(ref);

    var search = hrefs[i].search;
	var map = parseQueryString(search);
	if(map["filename"]==undefined) continue;
	{
	console.log("map:"+map["filename"]);
    console.log("map2:"+map["filename"]);	   
    hrefs[i].setAttribute("href","/media/"+map["filename"]);
    hrefs[i].setAttribute("download",map["filename"]);
     }	   
	console.log(search);

	}
}	
}


function parseQueryString(search) {
    var query = (search || '?').substr(1),
        map   = {};
    query.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function(match, key, value) {
        (map[key] = map[key] || []).push(value);
    });
    return map;
}

function parseURL (str) {
	var	o   = parseURL.options,
		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
		url = {},
		i   = 14;
 
	while (i--) url[o.key[i]] = m[i] || "";
 
	url[o.q.name] = {};
	url[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
		if ($1) url[o.q.name][$1] = $2;
	});
 
	return url;
};
 
parseURL.options = {
	strictMode: false,
	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	q:   {
		name:   "queryKey",
		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};