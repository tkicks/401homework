function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var data = null;
	var xmlhttp = new XMLHttpRequest();
	var svg = d3.select('#svgSpot').append('svg').attr("id", "svgCanvas")
		.attr("width", 600)
		.attr("height", 800);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = getData(xmlhttp);
			console.log(data[3].getElementsByTagName("height")[0].childNodes[0].nodeValue);
			console.log(data.length);
			for (var i = 0; i < data.length; i++)
				var circle = makeSVG(data[i], svg);
			
		}
	};
	xmlhttp.open("GET", "./files/sportsData1.xml" , true);
	xmlhttp.send();
}

function getData(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var names = xmlDoc.getElementsByTagName("team");
	for (i = 0; i < names.length; i++) { 
		names[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
	}
	return names;
}

function makeSVG(playerInfo, svg) {
	var height = playerInfo.getElementsByTagName("height")[0].childNodes[0].nodeValue;
	var weight = playerInfo.getElementsByTagName("weight")[0].childNodes[0].nodeValue;
	var average = playerInfo.getElementsByTagName("average")[0].childNodes[0].nodeValue;
	var obp = playerInfo.getElementsByTagName("obp")[0].childNodes[0].nodeValue;
	var hr = playerInfo.getElementsByTagName("hr")[0].childNodes[0].nodeValue;


	var circle = svg.append("circle")
		.attr("cx", average)
		.attr("cy", obp)
		.attr("r", hr)
    	.style("fill", "white")
    	.style("stroke", "black")
    	.style("stroke-width", 5);
    console.log("here");
    return circle;
}