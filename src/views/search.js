var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'callSearch'
  },
  
  callSearch: function() {
    var query = $('input').val();
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
