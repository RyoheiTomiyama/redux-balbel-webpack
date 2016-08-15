var mongoose = require( 'mongoose' );
var author = new mongoose.Schema({
	email: { type: String, required: true },
	authority: { type: String },
	info: { type: Object }
});
module.exports = mongoose.model( 'Author', author );
