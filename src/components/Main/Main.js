import React, { Component } from 'react';
import './Main.css';
import Product from '../Product/Product';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    showProducts = () => {
        const listProduct = this.props.add.map( (item, index) => 
                <Product 
                    key={ index }
                    name={ item.name }
                    price={ item.price }
                    image= { item.image }
                    type= { item.type }/> 
            );
        // console.log(this.addNew());
        return listProduct;
    }

    render() {
        // console.log('render');
        return (
        	<div className="main">
                { this.showProducts() }
        	</div>    
        );
    } 
}

export default Main;
