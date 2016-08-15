var mongoose = require( 'mongoose' );

var category = new mongoose.Schema({
	label: { type: String },
	link: { type: String }
});
module.exports = mongoose.model( 'Category', category );

