var tubeyURL = 'https://www.googleapis.com/youtube/v3/search';

var watchURL = 'https://www.youtube.com/watch?v=';

function displayResults(data){ // get the data from youtube
	var searchResults = $('.search_results');
	searchResults.empty();
	if (data.items) {
		data.items.forEach(function(item) {
			var searchItemLink = watchUrl + item.id.videold;
			var imageLink - item.snippet.thumbnails.medium.url;
			var image = '<a href="' + searchItemLink + '" target="_blank"><img class="card-img-top" src="'+ imageLink +'" /></a>'; 
			var elem = '<li class="card">' + image + '</li>';
		});
	}
	else {
		items += '<li>No results</li>';
	}
	$('.search_results').html(items);
}

function getData(videos, callback){
	var query = {
		part: 'snippet',
		key: 'AIzaSyDQONwNeCXcrqpL7aRJWwy3bbk5N4g3J_s',
		q: 'text'
	},
	$.getJSON(tubeyURL, query, callback); //endpoint for webAPI tubeyURL 
}

function submit(){
	$('.search_results').submit(function(event) {
		event.preventDefault();
		var data = $(this).find('.js_data').val();
		getData(query, searchResults);
	});
}

$(function(){submit();});
