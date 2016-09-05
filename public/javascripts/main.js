// Model
var Farmer = Backbone.Model.extend({
  defaults: {
    name: '',
    description: '',
    picture: '',
    positive: 0,
    negative: 0,
    positivePercent: 0,
    negativePercent: 0
  }
});

// Collection
var Farmers = Backbone.Collection.extend({
  model: Farmer,
  url: '/fazenda.json',
  parse: function (data) {
    return data.data;
  }
});

// View
var FarmersView = Backbone.View.extend({
  tagName: 'ul',
  className: 'ranking-list',
  initialize: function () {
    this.collection;
    this.listenTo(this.collection, 'all', this.render);
  },
  newTemplate: Handlebars.compile(document.getElementById('farmers-template').text),
  render: function () {
    this.collection.reduce();
    this.$el.html(this.newTemplate({ farmers: this.collection.toJSON() }));
  }
});

var farmers = new Farmers();
farmers.fetch();

var farmersView = new FarmersView({ collection: farmers });
farmersView.render();

document.getElementById('ranking-list').appendChild(farmersView.el);