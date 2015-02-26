import Ember from 'ember';

export default Ember.ArrayController.extend({
  climate: ["arid", "temperate", "frozen", "murky", "hot"],
  terrain: ["desert", "grasslands", "mountains", "jungle", "canyons", "lakes", "forests", "oceans", "urban"],
  population: ["small (value - value)", "medium (value - value)", "large (value - value)"],
  imageUrl: 'http://lolcats.info/haz-a-funny'
  actions: {
		searchPlanets: function() {
			var inputClimate = this.get('selectedClimate');
			var inputTerrain = this.get('selectedTerrain');
      var inputPopulation = this.get('selectedPopulation');
      var planet = this.get('model');
      var arr = [];
      planet.forEach(function(i) {
        if (i._data.climate.indexOf(inputClimate) !== -1 && i._data.terrain.indexOf(inputTerrain) !== -1){
          arr.push(i._data);
          }
      });
      this.set('planets', arr);
    }
  }
});
