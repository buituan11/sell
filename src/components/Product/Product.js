import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	bought : false,
        	add : false
        }
    }
    showBought = () => {
    	return this.state.bought?
    				<div className="bought">
        				Đã mua
        			</div> :
        			null;
    }
    showCheckAdd = () => {
    	return this.state.add?
    				<div className="add">
        				<i className="fas fa-check-square"></i>
        			</div> :
        			null;
    }
    showAdd = () => {
    	return this.state.add?
    				"Remove from list":
    				"Add to list";
    }
    render() {
        return (
        	<div className="product container-fluid col-md-12">
        		<div className="row">
        			<div className="image col-md-5"> 
        				<img src={ this.props.image } alt=""/>  
        				{ this.showBought() }
        				{ this.showCheckAdd() }
        			</div>
        			<div className="detail col-md-7">
        				<h1> { this.props.name } </h1>
        				<p> { this.props.price } VND </p> 
        				<div className="row">
	        				<button 
	        					className="btn btn-primary" 
	        					onClick = {() => 
	        						this.setState({bought : true})
	        					}
	        					style={{margin:"10px"}}> BUY </button>
	        				<button 
	        					className="btn btn-danger"
	        					onClick = {() => {
	        						let addState = this.state.add;
	        						return this.setState({add : !addState});
	        					}}> { this.showAdd() } </button>
	        			</div>
        			</div>
       			</div>
        	</div>
        );
    }
}

export default Product;
