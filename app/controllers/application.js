import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
    login() {
      this.get('session').authenticate(
        'authenticator:oauth2',
        'kaiser.dandangi@gmail.com',
        '1234567890'
      ).catch(e => this.set('errorMessage', e));
    },
		logout() {
			this.get('session').invalidate();
		}
	}
})