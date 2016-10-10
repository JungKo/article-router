import React from 'react'
import { pure } from 'recompose'
import { ArticleItem } from './'

const ArticleList =({article}) => (
	<div>
		{
			article.map(
				obj => (
					<ArticleItem
						key = {obj.id}
						{...obj}
					/>
				)
			)
		}
	</div>
)

export default pure(ArticleList)