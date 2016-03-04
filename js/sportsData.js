function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		myFunction(xmlhttp);
	}
	};
	xmlhttp.open("GET", "./files/sportsData1.xml" , true);
	xmlhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Team</th><th>Player</th></tr>";
  var x = xmlDoc.getElementsByTagName("team")
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" + 
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>";
  }
  document.getElementById("sportsVis").innerHTML = table;
  console.log(x[3].getElementsByTagName("name"));
}