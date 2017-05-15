import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.get('store').createRecord('food-item', {
        name: 'What are you craving?',
        location: 'Where did you wanna eat it?'
      });
    }
});
