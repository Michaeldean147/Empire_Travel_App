import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  climate: DS.attr("string"),
  diameter: DS.attr("string"),
  rotation_period:DS.attr("string"),
  orbital_period: DS.attr("string"),
  gravity: DS.attr("string"),
  terrain: DS.attr("string"),
  surface_water: DS.attr("string"),
  population: DS.attr("string"),
  image: DS.attr("string")
});
