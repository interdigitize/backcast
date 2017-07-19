var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.render();
    this.videos.on('select', e => this.render(e));
    //this.videos.on('update', e => this.render(e));
  },

  render: function(model) {
    model = model || this.videos.at(0);
    this.$el.html(this.template());
    
    // var videoPlayerView = new VideoPlayerView();
    // videoPlayerView.$el.append(videoPlayerView.render());
    
    if (this.videos.searchResults) {
      this.videos = this.videos.searchResults;
    }

    new VideoPlayerView({
      el: this.$('.player'), 
      collection: this.videos,
      model: model
    }).render();
    
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    // var search = new SearchView();
    // search.$el.append(search.render());
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    // return this;
  },

  // results a template function that you can invoke within your Backbone View, passing in a context object with the appropriate values to substitue into the template HTML.
  template: templateURL('src/templates/app.html')

});
