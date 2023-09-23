// Using require() in ES5 
var Zalo = require('zalo-sdk');
var ZaloSocial = require('zalo-sdk').ZaloSocial;

var zsConfig = {
	appId: '3166919040452783058',
	redirectUri: 'http://localhost/login/zalo-callback',
	secretkey: '2JkT20G58357EG3Q1QgB'
};
var ZSClient = new ZaloSocial(zsConfig);

var code = 'Your oauth code';
ZSClient.getAccessTokenByOauthCode(code, function(response) {
	if (response && response.access_token) {
		ZSClient.setAccessToken(response.access_token);
	}
});

ZSClient.api('me', 'GET', { fields: 'id, name, birthday, gender, picture' }, function(response) {
	console.log(response);
});