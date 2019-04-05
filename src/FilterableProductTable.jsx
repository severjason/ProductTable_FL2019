import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './styles/main.css';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      inStockOnly: false,
      products: [],
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get('data/products.json')
      .then(res => this.setState({products: res.data}))
  };

  handleInput = (event) => this.setState({input: event.target.value});

  handleCheckbox = () => this.setState({inStockOnly: !this.state.inStockOnly});

  filterProducts = () => {
    const {inStockOnly, input, products} = this.state;
    return products.filter(product => {
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
          products={this.filterProducts()}
        />
      </div>
    )
  }
}

export default FilterableProductTable;
