import React, { Component } from 'react' 
import { wrapDisplayName } from 'recompose' 
const confirmRouteLeave = WrappedComponent=> class extends WrappedComponent 
{ 
	componentDidUpdate(prevProps, prevState) {
		/*
		let result = confirm("Are you sure?");

		if (result) {		
			console.log('user confirmed')
	    }
	    */
	}

	componentWillReceiveProps(nextProps) {
		alert('componentWillReceiveProps')
	}
	
	render() { 
		return super.render()  
	} 
} 

export default WrappedComponent => { 
	const Component = confirmRouteLeave(WrappedComponent) 
	Component.displayName = wrapDisplayName(WrappedComponent,'confirmRouteLeave') 
	return Component 
}