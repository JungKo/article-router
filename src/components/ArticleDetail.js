import React from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'
import { ArticleList } from '../components'
import './ArticleDetail.css'
const ArticleDetail =({article,other,onDeleteClick}) => (
	<div>
		<div className='left'>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		</div>
		
		<div className='right'>
			<ArticleList article={other} />
		</div>
		
		<div className='clear'>
			<Link to={`/articles/${article.id}/edit`}><button>Edit</button></Link>| 
			<button onClick={onDeleteClick}>Delete</button>
		</div>
	</div>
)

export default pure(ArticleDetail)