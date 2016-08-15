var mongoose = require( 'mongoose' );

var post = new mongoose.Schema({
	author: { type: String, ref: 'Author' },
	createdDate: { type: Date, default: Date.now },  //新規作成日
	updatedDate: Date,
	publicDate: Date,
	state: String,
	category: { type: String, ref: 'Category' },
	tags: [ { type: String, ref: 'Tag' }],
	title: String,
	content: String,
	eyecatch: String,
	banner: String,
	parmalink: String,
	persons: [],
	introduction: String,
	seo: mongoose.Schema.Types.Mixed,
	ogp: mongoose.Schema.Types.Mixed,
	access: { type: Number, default: 0 },
	serial: { type: String, ref: 'Serial' }
});
module.exports = mongoose.model( 'Post', post );