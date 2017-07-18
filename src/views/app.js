var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
  },


  render: function() {
    
    this.$el.html(this.template());
    
    // why can't we move the instantiations up to initialize?
    var videoPlayerView = new VideoPlayerView();
    videoPlayerView.$el.append(videoPlayerView.render());
    
    var search = new SearchView();
    search.$el.append(search.render());
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    
    // return this;
  },

  // results a template function that you can invoke within your Backbone View, passing in a context object with the appropriate values to substitue into the template HTML.
  template: templateURL('src/templates/app.html')

});
