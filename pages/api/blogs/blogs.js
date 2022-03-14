//api route that returns list of blogs from db as json
import Blog from '../../../model/schema'

export default async function allBlogs(req, res) {
	
	const blogs = await Blog.find() 
	res.send(blogs)
}