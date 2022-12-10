import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} {...product} />)}
    </section>
  );
};

Products.proptypes = {
  id: PropTypes.number.isRequired
};

export default Products;