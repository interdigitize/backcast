var VideoListEntryView = Backbone.View.extend({
  
  // el: '.video-list',
  
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  
  render: function() {
    // this.model.attributes 

    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
