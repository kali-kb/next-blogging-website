

export default function CheckBoxFilters(props){
	return (
		<>
			{props.tags.map(tag => {
				<div>
					<input type="checkbox" id={tag} value={tag} defaultChecked></input>
					<span>{tag}</span>
				</div>
			})}
		</>
		
	)
}



// export default function CheckBoxFilters(props){
// 	return (
// 		<>
// 			<div>
// 				<input type="checkbox" id={props.tag} value={props.tag} defaultChecked></input>
// 				<span>{props.tag}</span>
// 			</div>
// 		</>
		
// 	)
// }


