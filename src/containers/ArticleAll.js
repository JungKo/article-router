import React, { Component } from 'react'
import { Link } from 'react-router'
import { ArticleList } from '../components'
import fetchApi from '../lib/fetchApi'
import config from '../config'

class ArticleAll extends Component {

 	state = {
	  article: []
    }

    static fetch = [
		{
			url :  config.api,
			state: 'article'
		}
	]

	render(){
		return (
			<div>				
				<h3>Articles</h3>
				<Link to='/articles/new'>Create</Link>
				<hr/>
				<ArticleList
     			 	article={this.state.article}
     			 />
			</div>
		)
	}

}

export default fetchApi(ArticleAll)