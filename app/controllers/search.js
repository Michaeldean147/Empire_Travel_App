import Ember from 'ember';

export default Ember.ArrayController.extend({
  climate: ["arid", "temperate", "frozen", "murky", "hot"],
  terrain: ["desert", "grasslands", "mountains", "jungle", "canyons", "lakes", "forests", "oceans", "urban"],
  population: ["small", "medium", "large"],
  message: "",
    actions: {
		searchPlanets: function() {
			var inputClimate = this.get('selectedClimate');
			var inputTerrain = this.get('selectedTerrain');
      var inputPopulation = this.get('selectedPopulation');
      var planet = this.get('model');
      console.log(planet)
      var arr = [];
      planet.forEach(function(i) {
        if (i._data.climate.indexOf(inputClimate) !== -1 && i._data.terrain.indexOf(inputTerrain) !== -1 && i._data.population_catagory == inputPopulation){
          arr.push(i._data);
          }
      });

      if (arr.length == 0){
        this.set('message', "Sorry, No Results Were Found For Those Selections")
      }
      else{
        this.set('message', "Matches Found! View Them Below")
      }
      this.set('planets', arr);
    }
  }
});
