import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
    constructor(props) {
        super(props);
    }
    newProduct = () => {
    	let img = this.checkType1.checked?
    					'/Img/maytinh.jpg' :
    					'/Img/dienthoai.jpg';
    	let a = {
    		name :  this.nameProduct.value,
    		price : this.priceProduct.value,
    		image : img,
    		type: this.checkType1.checked? 1 : 2
    	}
    	// console.log(a.type);
    	return a;
    }
    rmProduct = () =>{
    	let a = {
    		name: this.nameRmProduct.value,
    		type: this.checkTypeRm1? 1 : 2
    	}
    	return a;
    }
    deleteData = () => {
    	this.nameProduct.value = null;
    	this.priceProduct.value = null;
    	this.checkType1.checked = false;
    	this.checkType2.checked = false;
    	this.nameRmProduct.value = null;
    	this.checkTypeRm1.checked = false;
    	this.checkTypeRm2.checked = false;
    }

    render() {
        return (
		    <header className="header col-md-12">
			        <div className="title col-md-10" > 
			    		<p> Products </p>
			        </div>    
			        <div className="col-md-2 row">
			            {/* Trigger the modal with a button */}
			            <div className="btnAdd"> 
  						<button type="button" className="btn btn-primary" 
  							data-toggle="modal" data-target="#modalAdd"> Add </button>
	  					<button type="button" className="btn btn-danger" 
	  							data-toggle="modal" data-target="#modalRemove"> Remove</button>
	  					</div>
			        </div>
					{/* Modal */}
					<div id="modalAdd" className="modal fade" role="dialog">
						<div className="modal-dialog">
					    {/* Modal content*/}
					    	<div className="modal-content">
					        	<div className="modal-header">
					          		<button type="button" className="close" data-dismiss="modal">×</button>
					          		<h4 className="modal-title"><b> Add a new product </b></h4>
					        	</div>
					        	<div className="modal-body">
					        		<form noValidate>
									  <div className="form-group">
									    <label> Tên sản phẩm </label>
									    <input type="text" ref={ (inp)=>{this.nameProduct = inp} } className="form-control" placeholder="What is your product's name?" required/>								
									  </div>
									  <div className="form-group">
									    <label> Giá tiền </label>
									    <input type="text" ref={ (inp)=>{this.priceProduct = inp} } className="form-control" placeholder="How much does it cost?" required/>
									  </div>
									  <div className="form-group form-check">
										<label htmlFor="maytinh"><input ref={ (inp)=>{this.checkType1 = inp} } id="maytinh" type="radio" name="maytinh-dienthoai" /> Máy tính </label>
										<label htmlFor="dienthoai"><input ref={ (inp)=>{this.checkType2 = inp} } id="dienthoai" type="radio" name="maytinh-dienthoai" /> Điện thoại </label>
									  </div>
									</form>
					        	</div>
					        	<div className="modal-footer">
					        		<button type="submit" onClick={()=>{ 
					        										this.props.add(this.newProduct()); 
					        										this.deleteData();
					        									}}
					        				className="btn btn-primary" data-dismiss="modal">Submit</button>
					        		<button onClick={()=>{ this.deleteData() }} className="btn btn-default" data-dismiss="modal">Close</button>
					        	</div>
					      	</div>
					    </div>				
					</div>
					<div id="modalRemove" className="modal fade" role="dialog">
						<div className="modal-dialog">
					    {/* Modal content*/}
					    	<div className="modal-content">
					        	<div className="modal-header">
					          		<button type="button" className="close" data-dismiss="modal">×</button>
					          		<h4 className="modal-title"><b> Remove products </b></h4>
					        	</div>
					        	<div className="modal-body">
					        		<form noValidate>
									  <div className="form-group">
									    <label> Tên sản phẩm </label>
									    <input type="text" ref={ (inp)=>{this.nameRmProduct = inp} } className="form-control" placeholder="What is your product's name?" required/>								
									  </div>
									  <div className="form-group form-check">
										<label htmlFor="maytinh"><input ref={ (inp)=>{this.checkTypeRm1 = inp} } id="maytinh" type="radio" name="maytinh-dienthoai" /> Máy tính </label>
										<label htmlFor="dienthoai"><input ref={ (inp)=>{this.checkTypeRm2 = inp} } id="dienthoai" type="radio" name="maytinh-dienthoai" /> Điện thoại </label>
									  </div>
									</form>
					        	</div>
					        	<div className="modal-footer">
					        		<button type="submit" onClick={()=>{ 
					        										this.props.remove(this.rmProduct()); 
					        										this.deleteData();
					        									}}
					        				className="btn btn-primary" data-dismiss="modal">Submit</button>
					        		<button onClick={()=>{ this.deleteData() }} className="btn btn-default" data-dismiss="modal">Close</button>
					        	</div>
					      	</div>
					    </div>				
					</div>
		    </header>
        );
    }
}

export default Head;
