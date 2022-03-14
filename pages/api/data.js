import Blog from '../../model/schema'
import lodash from 'lodash'

export default async function Func(req, res){
	console.log(req.query)
	const blogs = await Blog.find()
	console.log(blogs)
	res.send(blogs)


}