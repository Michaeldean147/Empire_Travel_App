import Ember from 'ember';

export default Ember.ObjectController.extend({
  imagePath: function() {
    return "/assets/"+this.get("planet.image");
  }.property('imageID')
});
