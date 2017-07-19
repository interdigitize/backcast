var Videos = Backbone.Collection.extend({

  model: Video,
  search: function() {
   
    var settings = {
      'async': true,
      'crossDomain': true,
      'url': 'https://www.googleapis.com/youtube/v3/search?key=' + window.YOUTUBE_API_KEY + '&maxResults=5&q=surfing&type=video&part=snippet',
      'method': 'GET',
      'headers': {
        'cache-control': 'no-cache',
        'postman-token': '52fe07ba-2b4d-3c70-5e6a-510576e321c2'
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  
});
