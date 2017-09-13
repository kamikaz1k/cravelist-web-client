import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: '/api/token'
});

// import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

// export default OAuth2Bearer.extend({
// 	serverTokenEndpoint: '/api/token'
// });