var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
  },


  render: function() {
    
    this.$el.html(this.template());
    
    var videoPlayerView = new VideoPlayerView();
    this.$('.player').append(videoPlayerView.render());
    
    var search = new SearchView();
    this.$('.search').append(search.render());
    
    var videoList = new VideoListView();
    this.$('.list').append(videoList.render());
    
    // return this;
  },

  // results a template function that you can invoke within your Backbone View, passing in a context object with the appropriate values to substitue into the template HTML.
  template: templateURL('src/templates/app.html')

});
