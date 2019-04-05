import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {

  const categories = Array.from(new Set(products.map(product => product.category)));

  const rows = categories.map(category => (
    <React.Fragment key={category}>
      <ProductCategoryRow category={category}/>
      {products.map(product => {
        if (product.category !== category) {
          return null;
        }
        return <ProductRow key={product.name} stocked={product.stocked} name={product.name} price={product.price}/>;
      })}
    </React.Fragment>
  ));

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {rows.length ? rows : (
        <tr>
          <td colSpan="2">
            No available goods...
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

export default ProductTable;
