import React , { Component } from 'react'
import { Header, Footer} from '../components/'

class App extends Component{	
	render(){
		return (
			<div>
				<Header />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App