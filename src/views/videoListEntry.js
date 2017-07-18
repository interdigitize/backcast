var VideoListEntryView = Backbone.View.extend({
  
  // el: '.video-list',
  
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  
  render: function() {
    // this.model.attributes 
    console.log('listentryview', this.$el);

    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
