import Ember from 'ember';

export default Ember.Controller.extend({
  imagePath: function() {
    var pic = this.get('model.image')

    return "https://murmuring-cove-5784.herokuapp.com/" + pic;
  }.property('model.image')
});
