var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',
  
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  
  render: function() {
    // what is this.model.attributes ?? probably need to iterate over an array of video data   
    console.log(this);

    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
