var tubeyURL = 'https://www.googleapis.com/youtube/v3/search';

function results(data){
	var items = data.items;
	console.log(items[0].snippet.thumbnails.default.url);
}

function getData(search){
	var parameters = {
		part: 'snippet',
		key: 'AIzaSyDQONwNeCXcrqpL7aRJWwy3bbk5N4g3J_s',
		q: searchTerm
	},
	tubeyURL;
	$.getJSON(tubeyURL, parameters, function(data) {
		results(data);
	});
}