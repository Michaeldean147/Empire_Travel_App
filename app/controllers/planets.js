import Ember from 'ember';

export default Ember.Controller.extend({
  imagePath: function() {
    return "/assets/"+this.get("planet.image");
  }.property('imageID')
});
