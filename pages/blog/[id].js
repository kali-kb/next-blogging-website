// import Blog from '../../model/schema'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import {NextResponse} from 'next/server'
import axios from 'axios'
import moment from 'moment'
import Blog from '../../model/schema'
import Nav from '../../components/NavBar'
import Footer from '../../components/Footer'
//using intellisence check if the variable have accessible properties
//be aware of destructured data how it works

export async function getServerSideProps(context){

	const {req, params, query} = context
	const blogObj = await Blog.findOne({_id: params.id})
	// console.log(params.id)
	const data = JSON.stringify(blogObj)
	return {
		props: {data}
	}
}


function DynamicPage({data}) {
	let blog = JSON.parse(data)
	const [count, setCount] = useState(0)

	const addCount = (e) => {
		setCount(count += 1)
	}

	const blogDelete = async() => {
		// const blog = await Blog.findOne({_id: blog._id})
		// await Blog.deleteOne(blog)
		await axios({
			method: 'DELETE',
			url: '/api/blogs/blog-delete',
			params: {
				id: blog._id
			}
		})
		window.location.href = '/blog/blogs'
		// deleteDoc.
	}
	return (
		<>
		<Nav />
		 <div className="w-10/12 mx-auto my-16 rounded space-y-2">
              <p className="font-semibold text-5xl text-center">{blog.title}</p>
            <img className="mx-auto py-6" src={blog.image}></img>
            <div className="mx-5">
              <p className="w-7/12 mx-auto text-xl">{blog.content}</p>
              <p className="text-center">{moment(blog.publication_date).fromNow()}</p>
            </div>
            <div className="md:flex translate-x-56 space-x-5">
            	<button onClick={addCount} className="bg-green-100 px-2 rounded-full">👍{count}</button>
            	<button onClick={blogDelete} className="bg-red-100 px-2 rounded-full">Delete</button>
            </div>
         </div>
        <Footer />
        </> 
	)
}

export default DynamicPage

//622704afde59a045d1d96924
//6227053ede59a045d1d96927