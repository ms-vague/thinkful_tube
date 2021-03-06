var tubeyURL = 'https://www.googleapis.com/youtube/v3/search';

var watchURL = 'https://www.youtube.com/watch?v=';

function getData(searchTerm, callback){
	var query = {
		part: 'snippet',
		type: 'video',
		key: 'AIzaSyCtP-cUimQUeR_OxVvPvs9pnFFuYkWbGok',
		q: searchTerm
	}
	$.getJSON(tubeyURL, query, callback);
}

function displayResults(data){ // get the data from youtube
/*	var searchResults = $('.search_items');
	searchResults.empty(); */
	var searchResults = '';
	if (data.items) {
		data.items.forEach(function(item){
			/*console.log(data.items);*/
			var searchItemLink = watchURL + item.id.videoId;
			var imageLink = item.snippet.thumbnails.medium.url;
			var image = '<a href="' + searchItemLink + '"target="_blank"><img class="card-img-top" src="'+ imageLink +'" /></a>'; 
			/* var elem = '<li class="card">' + image + '</li>'; */
			searchResults += '<li><span>' + image + '</span></li>';
		});
	}
	else {
		searchResults += '<li>' + 'No results' + '</li>';
	}
	$('.search_items').html(searchResults); 
	/* look up jquery html method. where is item/what is item? */
}

function submit(){
	$('form').submit(function(event){
		event.preventDefault();
		var searchTerm = $('.js_data').val();
		getData(searchTerm, displayResults);
	});
}

$(function(){submit();});
