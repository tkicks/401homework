function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var data = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			data = getData(xmlhttp);
			console.log(data[3].getElementsByTagName("name")[0].childNodes[0].nodeValue);
		
			for (i = 0; i < data.length; i++) { 
				console.log(data[i].getElementsByTagName("name")[1].childNodes[0].nodeValue);
			}
		}
	};
	xmlhttp.open("GET", "./files/sportsData1.xml" , true);
	xmlhttp.send();
}

function getData(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table = "<tr><th>Team</th><th>Player</th></tr>";
	var x = xmlDoc.getElementsByTagName("team")
	for (i = 0; i < x.length; i++) { 
		var playerInfo = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var circle = makeSVG(team);
		document.getElementsById('svgCanvas').appendChild(circle);
	}
	document.getElementById("sportsVis").innerHTML = table;
	return x;
}

function makeSVG(playerInfo) {
	var newElt = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	newElt.setAttribute(cx, playerInfo.getElementsByTagName("average")[0].childNodes[0].nodeValue);
	newElt.setAttribute(cy, playerInfo.getElementsByTagName("OBP")[0].childNodes[0].nodeValue);
	newElt.setAttribute(r, playerInfo.getElementsByTagName("weight")[0].childNodes[0].nodeValue);
	return newElt;
}