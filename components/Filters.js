// import CheckBoxFilters from './CheckBoxFilter'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'


function Select(){
	return (
		<>
			<p className="font-bold mx-2 text-xl">Sort</p>
			<select className="m-1 w-11/12">
				<option>A-Z</option>
				<option>Z-A</option>
			</select>
		</>
	)
}

export default function Filter(){

	const [checkedDesign, setCheckedDesign] = useState(false)
	const [checkedDev, setCheckedDev] = useState(false)

	const router = useRouter()

	const designCheckBoxValue = (e) => {
		if(!e.target.defaultChecked){
			setCheckedDesign(prev => !checkedDesign)
			const checkBoxValue = e.target.value
			router.push(`/blog/blogs/?tag=${checkBoxValue}`)
		}
		else{
			router.push('/blog/blogs/')
			setCheckedDesign(prev => !checkedDesign)
		}
	}

	const devCheckBoxValue = (e) => {
		if(!e.target.defaultChecked){
			setCheckedDev(prev => !checkedDev)
			const checkBoxValue = e.target.value
			router.push(`/blog/blogs/?tag=${checkBoxValue}`)
		}
		else{
			router.push('/blog/blogs/')
			setCheckedDev(prev => !checkedDev)
		}
	}
	//********Is Not working for whatever reason ******//
	// const checkBoxValue = (e) => {
	// 	if(!e.target.defaultChecked){
	// 		(e.target.value == 'react') ? setCheckedReact(!checkedReact) : setCheckedDesign(!checkedJs) 
	// 		const checkBoxValue = e.target.value
	// 		router.push(`/blog/blogs/?tag=${checkBoxValue}`)
	// 	}
	// 	else{
	// 		router.push('/blog/blogs/')
	// 		(e.target.value == 'Design') ? setCheckedJs(!checkedJs) : setCheckedReact(!checkedReact)  
	// 		// setCheckedReact(prev => !checkedReact)
	// 	}
	// }

	return (
		<>
			<div className="w-72 h-screen bg-gray-100">
				<Select />
				<div>
					<div className='flex flex-col space-y-5 mx-2'>
						<p className='font-bold mx-2 text-xl'>Tags</p>
						<div className="px-2">
							<input type="checkbox" onChange={designCheckBoxValue} defaultChecked={checkedDesign} value="Design" name="Design"></input>
							<label htmlFor="Design">Design</label>
						</div>
						<div className="px-2">
							<input type="checkbox" onChange={devCheckBoxValue} defaultChecked={checkedDev} value="development" name="development"></input>
							<label htmlFor="development">Devlopment</label>
						</div>
					</div>

					{/*{props.tags.map(tag => {
						<div>
							<input type="checkbox" id={tag} value={tag} defaultChecked></input>
							<span>{tag}</span>
						</div>
					})}*/}
				</div>
			</div>
		</>
	
	)
}