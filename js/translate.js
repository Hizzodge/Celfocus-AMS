function Translate() { 
	//initialization
	this.init =  function(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "i18n/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var flattenedObj = flatten(JSON.parse(xrhFile.responseText));

					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							if(flattenedObj[key] == null) {
								console.log("Can't find key " + key + " in translation file");
							}
							else {
								elem.innerHTML = flattenedObj[key];
							}
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}

function flatten(obj){
	var root = {};
	(function tree(obj, index){
	  var suffix = toString.call(obj) == "[object Array]" ? "]" : "";
	  for(var key in obj){
	   if(!obj.hasOwnProperty(key))continue;
	   root[index+key+suffix] = obj[key];
	   if( toString.call(obj[key]) == "[object Array]" )tree(obj[key],index+key+suffix+"[");
	   if( toString.call(obj[key]) == "[object Object]" )tree(obj[key],index+key+suffix+".");   
	  }
	})(obj,"");
	return root;
   }