import mongoose from 'mongoose'
// mongodb+srv://kb:<password>@cluster0.pshzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// mongoose.connect(process.env.MONGO_URI)
export default function connectdb(){	
	mongoose.connect(process.env.MONGO_URI).then(res => console.log('connected to mongodb')).catch(err => console.log('couldnt connect with database', err.message))
}


