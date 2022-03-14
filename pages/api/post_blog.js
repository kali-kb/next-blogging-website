//api route for handling post request
import Blog from '../../model/schema'
import dbConnect from '../../utils/connect'

dbConnect()

export default async function postHandler(req, res){
	if (req.method == 'POST'){
		//handler
		console.log('body obj', req.body)
		const title = req.body.title
		const body = req.body.blog_body
		const image = req.body.blog_cover
		// const date = new Date()
		const blogObj = new Blog({
			title: title,
			content: body,
			image: image
		})

		const newBlog = await blogObj.save()
		console.log(newBlog)
		// res.send('body recieved')
		res.redirect('/blog/blogs')
	}
	else{
		res.send('unsupported method')
	}
}