import React from 'react'
import { compose, withState,withHandlers,pure } from 'recompose'

const enchance = compose(
	withState('title', 'updateTitle',''),
	withState('content','updateContent',''),
	withHandlers({
		onTitleChange : ({updateTitle}) => e => updateTitle(e.target.value),
		onContentChange : ({updateContent}) => e => updateContent(e.target.value),
		onClick: props => e => {
			const { manageArticle,title, content} = props		
				manageArticle(title,content)
		}
	}),	
	pure
)

const Form = ({
	title,
	content,
	onTitleChange,
	onContentChange,
	onClick,
	buttonText
}) =>(
	<div>
		Title:
		<div>
			<input 
				type="text"
				onChange={onTitleChange}
				value={title}
			/>
		</div>

		Content:
		<div>
			<textarea
				value={content}
				onChange={onContentChange}
			/>
		</div>

		<button 
			onClick={onClick}>
			{buttonText}
		</button>
	</div>
)
export default enchance(Form)