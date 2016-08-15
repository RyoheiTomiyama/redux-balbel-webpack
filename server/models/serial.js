var mongoose = require( 'mongoose' );

var serial = new mongoose.Schema({
	title: { type: String},
	link: { type: String },
	// link: { type: String, unique: true },
	archieve: [ { type: String, ref: "Post" } ]
});
module.exports = mongoose.model('Serial', serial);
