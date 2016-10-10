import React from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'

const ArticleItem =({id,title}) => (
	<p><Link to={`/articles/${id}`}>{title}</Link></p>
)

export default pure(ArticleItem)