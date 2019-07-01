import React, { Component } from 'react';
import './App.css';
import Head from '../Head/Head';
import Main from '../Main/Main';

class App extends Component {
	constructor(props) {
		super(props);
		 this.state = {
            products : [
                    {
                        name : 'Laptop Asus',
                        price : '10000000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Laptop Dell',
                        price : '200000000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Laptop Hp',
                        price : '2025000000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Dien thoai Lenovo',
                        price : '159621510',
                        image : '/Img/dienthoai.jpg',
                        type: 2
                    },
                    {
                        name : 'Laptop Bird',
                        price : '2155150',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Laptop Cat',
                        price : '215126000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Dien thoai Mouse',
                        price : '3689211000',
                        image : '/Img/dienthoai.jpg',
                        type: 2
                    },
                    {
                        name : 'Laptop Dog',
                        price : '200000000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Laptop Dell',
                        price : '200000000',
                        image : '/Img/maytinh.jpg',
                        type: 1
                    },
                    {
                        name : 'Laptop Dell',
                        price : '200000000',
                        image :'/Img/maytinh.jpg',
                        type: 1
                    }
                ],
        }
	}
  addNewProducts = ( item ) => {
      let list = this.state.products;
      list = list.concat( item );
      this.setState({
        products: list 
      });
  }

  removeProducts = ( item ) => {
    let list = [];
    let a = this.state.products;
    console.log(item);
    for(let i=0; i<a.length; i++){
        if (a[i].name !== item.name || (a[i].name === item.name && a[i].type !== item.type)){
            list = list.concat(a[i]);
        }
    }
    this.setState({
        products: list
    })
  } 

  render() {
    return (
      <div className="App container-fluid">
        <Head 
          add={ (item) => { this.addNewProducts( item ) } }
          remove={ (item) => { this.removeProducts( item ) }}/>     {/*height : 70*/}
       	<Main add={ this.state.products } />
      </div>
    );
  }
}

export default App;
