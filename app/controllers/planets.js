import Ember from 'ember';

export default Ember.Controller.extend({
  imagePath: function() {
    var pic = this.get('model.image')
    return "/assets/" + pic;
  }.property('model.image')
});
