var VideoListView = Backbone.View.extend({

  el: '.list',
  
  // initialize: function() {
  //   this.collection.on('')
  // };
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    
    
    return this;
  },
  
  renderVideo: function(video) {
        // debugger;

    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
