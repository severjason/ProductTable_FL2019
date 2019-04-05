import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './styles/main.css';


const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      inStockOnly: false,
    }
  }

  handleInput = (event) => this.setState({input: event.target.value});

  handleCheckbox = () => this.setState({inStockOnly: !this.state.inStockOnly});

  getFilteredProducts = () => {
    const {inStockOnly, input} = this.state;
    return PRODUCTS.filter(product => {
      if (inStockOnly && !product.stocked)  {
        return false;
      }
      return !(!product.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && !product.price.includes(input));

    })
  };

  render() {
    const { input, inStockOnly} = this.state;
    return (
      <div className="filterable-table-root">
        <p>
          Filterable table
        </p>
        <SearchBar
          onCheckboxChange={this.handleCheckbox}
          onChange={this.handleInput}
          input={input}
          inStockOnly={inStockOnly}
        />
        <ProductTable
          products={this.getFilteredProducts()}
        />
      </div>
    )
  }
}

export default FilterableProductTable;
