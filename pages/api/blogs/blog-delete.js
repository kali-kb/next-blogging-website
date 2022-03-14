import Blog from '../../../model/schema'

export default async function deleteBlog(req, res){
	if(req.method == 'DELETE'){
		try{
			await Blog.deleteOne({_id: req.query.id})
			res.json({status: 'success'})
			console.log('success')
		}
		catch(err){
			res.json({errMessage:err.message, status: 'failed'})
			console.log('failed', err.message)
		}
	}
}