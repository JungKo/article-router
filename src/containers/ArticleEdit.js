import React , { Component} from 'react'
import confirmRouteLeave from '../lib/confirmRouteLeave'
import config from '../config'

class ArticleEdit extends Component {

	static contextTypes = {
			router: React.PropTypes.object
	}

	static API_ENDPOINT = config.api

	state = {
		title : '',
		content: ''
	}

  	componentDidMount() {	
		this.loadArticle()
	}

	onTitleChange = (e) => {
		this.setState({title : e.target.value})
	}

	onContentChange = (e) => {
		this.setState({content : e.target.value})
	}

	onClick = (e) => {
		const {title,content} = this.state
		this.manageArticle(title,content)
	}

	manageArticle = (title,content) => {
		const { id }  = this.props.routeParams
		
		if(title && content){			
			fetch(`${this.constructor.API_ENDPOINT}/${id}`, {
		      method: 'PUT',
		      headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify({
				  	title,
				  	content
				  })
	    	})
        	.then(() => this.context.router.push('/'))
		}
	}
 
	loadArticle =() => {
		const { id }  = this.props.routeParams
		fetch(`${this.constructor.API_ENDPOINT}/${id}`)
		.then(article=> article.json())
		.then(({title,content})=> this.setState({title,content}))
	}

	render(){
		return(
			<div>
				<div>
					Title:
					<input 
						type="text"
						onChange={this.onTitleChange}
						value={this.state.title}
					/>
				</div>

				<div>
					Content:
					<textarea
						value={this.state.content}
						onChange={this.onContentChange}
					/>
				</div>

				<button 
					onClick={this.onClick}>
					Update
				</button>
			</div>
		)
	}
}

export default confirmRouteLeave(ArticleEdit)
