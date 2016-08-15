var mongoose = require( 'mongoose' );
// var passportLocalMongoose = require('passport-local-mongoose');

var user = new mongoose.Schema({
	salt: { type: String },
	hash: { type: String },
	name: { type: String },
	email: { type: String },
	info: { type: String, ref: 'UserInfo' },
	provider: { type: String, default: 'local' },
	providerId: { type: String },
	createdDate: { type: Date, default: new Date() }
});
// user.plugin(passportLocalMongoose, {
// 	usernameField: "email",
// 	passwordField: "password",
// 	errorMessages: {
// 		MissingPasswordError: "パスワードを入力してください。",
// 		MissingUsernameError: "メールアドレスを入力してください。",
// 		IncorrectPasswordError: "メールアドレスまたはパスワードが違います。",
// 		IncorrectUsernameError: "メールアドレスまたはパスワードが違います。",
// 		UserExistsError: "入力頂いたメールアドレスはすでに登録されています。"
// 	}
// });
module.exports = mongoose.model( 'User', user );
