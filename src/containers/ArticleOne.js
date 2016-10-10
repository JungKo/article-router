import React, { Component } from 'react'
import { shallowEqual } from 'recompose'
import { ArticleDetail } from '../components'
import config from '../config'

class ArticleOne extends Component{

	static contextTypes = {
		router: React.PropTypes.object
	}

	static API_ENDPOINT = config.api

	state = {
	  article: [],
	  other: [],
    }

    componentDidUpdate(prevProps, prevState) { 
    	// Not Working
    	const prevQuery = prevProps.location.query 
    	const query = this.props.location.query
    	//console.log(prevQuery,query)
    	if(!shallowEqual(prevQuery,query)){
    		this.loadArticle()
    	}
    }

	componentDidMount() {	
		this.loadArticle()
	}

	onDeleteClick = () => {	
		let result = confirm("Are you sure?");

		if (result) {		
			this.deleteArticle()
	    }
	}

	loadArticle =() => {
		const { id }  = this.props.routeParams
		fetch(`${this.constructor.API_ENDPOINT}/${id}`)
		.then(article=> article.json())
		.then(article=> {
			fetch(`${this.constructor.API_ENDPOINT}?id_ne=${id}`)
				.then(other=> other.json())
				.then(other=> this.setState({other,article }))
		})
	}

	deleteArticle  = () => {
		const { id }  = this.props.routeParams
	    fetch(`${this.constructor.API_ENDPOINT}/${id}`, {
	      method: 'DELETE'
	    }).then(()=> this.context.router.push('/'))
  	}

	render(){
		return (
				<ArticleDetail {...this.state} onDeleteClick={this.onDeleteClick} />
		)
	}
}

export default ArticleOne