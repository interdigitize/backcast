var VideoListView = Backbone.View.extend({
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    
    
    // return this;
  },
  
  renderVideo: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.children().append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
