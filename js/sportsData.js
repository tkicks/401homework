function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var data = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = getData(xmlhttp);
			console.log(data[3].getElementsByTagName("height")[0].childNodes[0].nodeValue);
			makeSVG(data[0]);
		}
	};
	xmlhttp.open("GET", "./files/sportsData1.xml" , true);
	xmlhttp.send();
}

function getData(xml) {
// <<<<<<< HEAD
	var i;
	var xmlDoc = xml.responseXML;
	var names = xmlDoc.getElementsByTagName("team");
	for (i = 0; i < names.length; i++) { 
		names[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
	}
	return names;
}

function makeSVG(playerInfo) {
	var newElt = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	newElt.setAttribute('cx', playerInfo.getElementsByTagName("average")[0].childNodes[0].nodeValue);
	newElt.setAttribute('cy', playerInfo.getElementsByTagName("OBP")[0].childNodes[0].nodeValue);
	newElt.setAttribute('r', playerInfo.getElementsByTagName("weight")[0].childNodes[0].nodeValue);
	return newElt;
}