import React , { Component} from 'react'
import confirmRouteLeave from '../lib/confirmRouteLeave'
import config from '../config'
import { Form } from '../components'

class ArticleNew extends Component {

	static contextTypes = {
		router: React.PropTypes.object
	}

	static API_ENDPOINT = config.api

	manageArticle = (title,content) => {
		if(title && content){			
			fetch(this.constructor.API_ENDPOINT, {
		      method: 'POST',
		      headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify({
				  	title,
				  	content
				  })
	    	}).then(resp => resp.json())
        	.then(({id}) => this.context.router.push(`/articles/${id}`))
		}
	}

	render(){		
		return(
			<Form 
				manageArticle={this.manageArticle} 
				buttonText="Create" 
			/>
		)
	}
}

export default confirmRouteLeave(ArticleNew)

