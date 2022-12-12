import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import shortid from 'shortid';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => { 
    return (props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  };

  const addToCart = event => {
    event.preventDefault();
    console.log('Summary');
    console.log('==========');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log(currentSize);
    console.log(currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage key={shortid()} title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          key={shortid()} 
          addToCart={addToCart}
          currentSize={currentSize}
          currentColor={currentColor}
          colors={props.colors}
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
        />
      </div>
    </article>
  );
};

export default Product;