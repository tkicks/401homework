function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var data = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
// <<<<<<< HEAD
  	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  		var data = getData(xmlhttp);
      console.log(data[3].getElementsByTagName("height")[0].childNodes[0].nodeValue);
  	}
// =======
// 		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 			data = getData(xmlhttp);
// 			console.log(data[3].getElementsByTagName("name")[0].childNodes[0].nodeValue);
		
// 			for (i = 0; i < data.length; i++) { 
// 				console.log(data[i].getElementsByTagName("name")[1].childNodes[0].nodeValue);
// 			}
// 		}
// >>>>>>> f91258b7a259df4604633d43bc0d1cf62c689cd1
	};
	xmlhttp.open("GET", "./files/sportsData1.xml" , true);
	xmlhttp.send();
}

function getData(xml) {
// <<<<<<< HEAD
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Team</th><th>Player</th></tr>";
  var names = xmlDoc.getElementsByTagName("team");
  for (i = 0; i < names.length; i++) { 
    table += "<tr><td>" + 
    names[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>";
  }
  // document.getElementById("sportsVis").innerHTML = table;
  return names;
// =======
	// var i;
	// var xmlDoc = xml.responseXML;
	// var table = "<tr><th>Team</th><th>Player</th></tr>";
	// var x = xmlDoc.getElementsByTagName("team")
	// for (i = 0; i < x.length; i++) { 
	// 	var playerInfo = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
	// 	var circle = makeSVG(playerInfo);
	// 	document.getElementsById('svgCanvas').appendChild(circle);
	// }
	// document.getElementById("sportsVis").innerHTML = table;
	// return x;
}

// function makeSVG(playerInfo) {
// 	var newElt = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// 	newElt.setAttribute('cx', playerInfo.getElementsByTagName("average")[0].childNodes[0].nodeValue);
// 	newElt.setAttribute('cy', playerInfo.getElementsByTagName("OBP")[0].childNodes[0].nodeValue);
// 	newElt.setAttribute('r', playerInfo.getElementsByTagName("weight")[0].childNodes[0].nodeValue);
// 	return newElt;
// >>>>>>> f91258b7a259df4604633d43bc0d1cf62c689cd1
// }