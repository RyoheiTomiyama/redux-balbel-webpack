var mongoose = require( 'mongoose' );
var passportLocalMongoose = require('passport-local-mongoose');

var userInfo = new mongoose.Schema({
	userId: { type: String },
	follow: [ { type: String, ref: 'Tag' } ],
	clip: [ { type: String, ref: 'Post' } ]
});
module.exports = mongoose.model( 'UserInfo', userInfo );
