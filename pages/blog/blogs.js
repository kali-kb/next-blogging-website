// export default async function listBlogs(){
// 	blogs = await fetch('/api/blogs/')
// }
import Blog from '../../model/schema'
import Nav from '../../components/NavBar'
// import CheckBoxFilters from '../../components/CheckBoxFilter'
import Filter from '../../components/Filters'
import Footer from '../../components/Footer'
import moment from 'moment'
import Link from 'next/link'
import _ from 'lodash'
import { useContext, createContext } from 'react'


export async function getServerSideProps(context){
 
	const {req, query, params} = context
	let data
	if(_.isEmpty(query)){
	  const blogs = await Blog.find()
	  data = JSON.stringify(blogs)
	  // console.log('if')
	}
	else{
		const blogs = await Blog.find({tags: query.tag })
	  data = JSON.stringify(blogs)
	  // console.log('else')
	}

  // console.log(data)
  return { 
    props: { data }
  }
}


//separately perform db query just for the component



export default function listBlogs({data}){
	let blogslist = JSON.parse(data)
	// useState
	// console.log(bloglist)
	return (
		<>
		<Nav />
		<div className="flex">
			<Filter />
			<div>
				<div className="mx-12 text-3xl my-11 font-semibold">All Blogs</div>
				<div className="grid grid-cols-3 gap-4 mx-12 space-x-4">
	      		{blogslist.map((blog) => {
	        		return(
	              <div key={blog.id} className="w-72 rounded shadow space-y-2">
	                <img src={blog.image}></img>
	                <div className="mx-5">
		                {blog.tags.map(tag => {
		                	return (
		                		<p key={tag} className="bg-green-300 px-1 py-1 inline rounded-full">#{tag}</p>
		                	)
		                })}
	                  <Link href={'/blog/'+ blog._id} className="hover:underline"><p className="font-semibold">{blog.title}</p></Link>
	                  <p className="truncate">{blog.content}</p>
	                  <p>{moment(blog.publication_date).fromNow()}</p>
	                </div>
	              </div>
	            )
	          })}
	        </div>
	       </div>
        </div>
    <Footer />    
		</>
	
	)	
}