var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    // use detach to clear out the event listeners as well (vs. just empty())
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);    
    return this;
  },
  
  renderVideo: function(video) {
    //ANOTHER VIDEO RENDER OPTION
    // var videoListEntry = new VideoListEntryView({model: video});
    // this.$el.children().append(videoListEntry.render());
    
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video,
      }).render().$el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
