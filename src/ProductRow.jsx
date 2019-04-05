import React from 'react';

const ProductRow = ({name, price, stocked}) => (
  <tr style={{color: stocked ? 'black' : 'red'}}>
    <td>
      {name}
    </td>
    <td >
      {price}
    </td>
  </tr>
);

export default ProductRow;
