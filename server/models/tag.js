var mongoose = require( 'mongoose' );

var tag = new mongoose.Schema({
	label: String,
	count: Number
});
module.exports = mongoose.model( 'Tag', tag );