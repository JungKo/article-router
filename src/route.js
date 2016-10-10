import React from 'react'
import { 
		Route, 
	 	Router, 
	 	IndexRoute,
	 	IndexRedirect,
	 	browserHistory 	  
} from 'react-router'

import { 
		App,
		Home,
		ArticleLayout,		 
} from './components'

import {
		ArticleAll,
		ArticleNew,
		ArticleEdit,
		ArticleOne
} from './containers'

const ConfigRouter = () => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRedirect to='/articles' />
			<Route path="/articles" component={ArticleLayout}>
				<IndexRoute component={ArticleAll} />
				<Route path='new' component={ArticleNew} />
				<Route path=':id' component={ArticleOne} />
				<Route path=":id/edit" component={ArticleEdit} />
			</Route>
		</Route>
	</Router>
)

export  default ConfigRouter