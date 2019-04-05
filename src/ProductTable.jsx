import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {

  const categories = Array.from(new Set(products.map(product => product.category)));

  const rows = categories.map(category => (
    <React.Fragment key={category}>
      <ProductCategoryRow  category={category}/>
      {products.map(product => product.category === category ? (
        <ProductRow key={product.name} name={product.name} price={product.price}/>
      ) : null)}
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
      {rows}
      </tbody>
    </table>
  );
};

export default ProductTable;
