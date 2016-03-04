$(document).ready(function() {
	// run when page loads (calls other js functions based on tabs clicked)
	$('#homeTab').click(function() {
		console.log("Home tab active");
	})
	$('#illusion1Tab').click(function() {
		SAMTab();
	})
	$('#illusion2Tab').click(function() {
<<<<<<< HEAD
		tTab();
	})
	$('#sportsData').click(function() {
		sportsTab();
=======
		gridTab();
>>>>>>> 94a75bdc932df181cd566cef3502465e983272e1
	})
})