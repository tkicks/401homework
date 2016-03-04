function sportsTab() {
	console.log("Sports tab active");
	loadXML();
}

function loadXML() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  		var data = getData(xmlhttp);
      console.log(data[3].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  	
      for (i = 0; i < data.length; i++) { 
        table += "<tr><td>" + 
        data[i].getElementsByTagName("name")[1].childNodes[0].nodeValue +
        "</td><td>";
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
    table += "<tr><td>" + 
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>";
  }
  document.getElementById("sportsVis").innerHTML = table;
  return x;
}