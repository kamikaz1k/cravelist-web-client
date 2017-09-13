import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			"username": "kaiser.dandangi@gmail.com",
    	"password": "1234567890"
		});
	}
});
