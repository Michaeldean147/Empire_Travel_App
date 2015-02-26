import Ember from 'ember';

export default Ember.ObjectController.extend({
  climate: ["arid", "temperate", "frozen", "murky", "hot"],
  terrain: ["desert", "grasslands", "mountains", "jungle", "canyons", "lakes", "forests", "oceans", "urban"],
  population: ["small (value - value)", "medium (value - value)", "large (value - value)"]
});
