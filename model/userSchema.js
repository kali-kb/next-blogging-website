import mongoose from 'mongoose'


userSchema = mongoose.Schema({
	name: String,
	email: String
})


module.exports = mongoose.models.User || mongoose.model('User', userSchema)