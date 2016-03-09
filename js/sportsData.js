function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var data = null;
	var xmlhttp = new XMLHttpRequest();
	var svg = d3.select('#svgSpot').append('svg').attr("id", "svgCanvas")
		.attr("height", 100)
		.attr("width", 100);
	var maxVals = [0, 0];
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = getData(xmlhttp);
			console.log(data[3].getElementsByTagName("height")[0].childNodes[0].nodeValue);
			console.log(data.length);
			for (var i = 0; i < data.length; i++)
				maxVals = makeSVG(data[i], svg, maxVals);
			// console.log(maxVals[0]);
			svg.attr("width", maxVals[0]*1000 + 100);
			svg.attr("height", maxVals[1]*1000 + 100);
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

function makeSVG(playerInfo, svg, maxVals) {
	// average is x axis (width) obp is y axis (height)
	var height = playerInfo.getElementsByTagName("height")[0].childNodes[0].nodeValue;
	var weight = playerInfo.getElementsByTagName("weight")[0].childNodes[0].nodeValue;
	var average = playerInfo.getElementsByTagName("average")[0].childNodes[0].nodeValue;
	var obp = playerInfo.getElementsByTagName("OBP")[0].childNodes[0].nodeValue;
	var hr = playerInfo.getElementsByTagName("home_runs")[0].childNodes[0].nodeValue;

	if (average > maxVals[0])
		maxVals[0] = average;
	if (obp > maxVals[1])
		maxVals[1] = obp;

	var circle = svg.append("circle")
		.attr("cx", average*1000)
		.attr("cy", obp*1000)
		.attr("r", hr/10)
    	.style("fill", "white")
    	.style("stroke", "black")
    	.style("stroke-width", 5);

    return maxVals;
}