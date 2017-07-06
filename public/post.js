document.querySelector('#ispoved').value = ""
function textpost(){
	var posttext = document.querySelector('#ispoved').value;
	fetch("http://localhost:3000/post?texttopost=" + posttext)
		.then(function(response){
			location.reload()
		});
};
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}
function ratepost(rateop, postid){
	console.log("http://localhost:3000/rate?rateid=" + postid + "&rateoperation=" + rateop)
	if(!getCookie(rateop + postid)){
		fetch("http://localhost:3000/rate?rateid=" + postid + "&rateoperation=" + rateop)
			.then(function(response){
				document.cookie = rateop + postid + "=1"
				location.reload()
			});
	}else{
		fetch("http://localhost:3000/rate?rateid=" + postid + "&rateoperation=" + rateop + "remove")
			.then(function(response){
				deleteCookie(rateop+postid)
				location.reload()
			});
	}
};