import { useState } from 'react'


export default function BlogForm(){

	const [tagInput, setTagInput] = useState('')
	const [tags, setTags] = useState([])

	const changeEvent = (e) => {
	    let value = e.target.value
	    console.log(value)
	    setTagInput(value)
	}

	const addTag = () => {
		console.log(tags)
		setTags(prev => [...tags, tagInput])
	}

	return (
		<>
			<h1 className="text-4xl font-semibold mb-5">Create a new blog</h1>
			<form action="/api/post_blog" className="space-y-2" method="POST">
				<input type="text" className="border rounded py-2 w-1/4" name="title" placeholder="title"></input><br></br>
				<input type="textarea" className="border py-2 rounded w-1/4" name="blog_body" placeholder="Content here"></input><br></br>
				<input type="text" name="blog_cover"></input><br></br>
				<input className="bg-green-700 text-white px-2 py-1 rounded-sm" type="submit"></input>
			</form>
				<input onChange={changeEvent} type="text" name="tags"></input>
				<button onClick={addTag} className="bg-green-500 text-white px-2 py-1">Add Tag</button>
		</>
	)

}

