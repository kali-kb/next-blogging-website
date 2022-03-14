import mongoose from 'mongoose'
import dbConnect from '../utils/connect'

dbConnect()

const blogModel = new mongoose.Schema({

	title: {type: String, required: true},
	content: {type:String, min:10},
	image:  {type:String, required:true},
	publication_date: {type:Date, default: Date.now},
	tags: {type: Array, required: false},

})


module.exports = mongoose.models.blogSchema || mongoose.model('blogSchema', blogModel)