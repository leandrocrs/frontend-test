// Handlebars Helpers
Handlebars.registerHelper('orderIndex', function (index) {
  return index + 1;
});

Handlebars.registerHelper('htmlEscape', function (text) {
  return new Handlebars.SafeString(text);
});

function calcPercent(part, total) {
  return parseInt((part / total) * 100);
}

// Me playing through backbone
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
  },
  comparator: function (participante) {
    return -participante.get('positive');
  }
});

// View
var FarmersView = Backbone.View.extend({
  tagName: 'ul',
  className: 'ranking-list',
  initialize: function () {
    this.collection;
    this.listenTo(this.collection, 'add', function () {
      this.collection;

      this.render();
    });
  },
  newTemplate: Handlebars.compile(document.getElementById('farmers-template').text),
  render: function () {
    if (this.collection.length > 0) {

      var totalPositives = _.chain(this.collection.models)
        .map(function (participante) {
          return parseInt(participante.get('positive'));
        })
        .filter(function (positive) {
          return _.isNumber(positive) && !_.isNaN(positive);
        })
        .reduce(function (positive, num) {
          return positive + num;
        }, 0)
        .value();

      var totalNegatives = _.chain(this.collection.models)
        .map(function (participante) {
          return parseInt(participante.get('negative'));
        })
        .filter(function (negative) {
          return _.isNumber(negative) && !_.isNaN(negative);
        })
        .reduce(function (negative, num) {
          return negative + num;
        }, 0)
        .value();

      this.collection.each(function (participante) {
        participante.set('positivePercent', calcPercent(participante.get('positive'), totalPositives));
        participante.set('negativePercent', calcPercent(participante.get('negative'), totalNegatives));
      });

      this.$el.html(this.newTemplate({ farmers: this.collection.toJSON() }));
    }
  }
});

var farmers = new Farmers();
farmers.fetch();

var farmersView = new FarmersView({ collection: farmers });

document.getElementById('ranking-list').appendChild(farmersView.el);