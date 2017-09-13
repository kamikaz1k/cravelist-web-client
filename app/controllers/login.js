import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service('session'),

	actions: {
    login() {
      this.get('session').authenticate(
        'authenticator:oauth2',
        this.get("model.username"),
        this.get("model.password")
      ).catch(e => this.set('errorMessage', e));
    }
	}
});