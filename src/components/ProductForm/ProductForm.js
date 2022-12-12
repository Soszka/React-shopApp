import styles from '../ProductForm/ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import shortid from 'shortid';

const ProductForm = props => {
    return (
        <form onSubmit={props.addToCart}>
          <OptionSize key={shortid()} setCurrentSize={props.setCurrentSize} currentSize={props.CurrentSize} sizes={props.sizes}/>
          <OptionColor key={shortid()} setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} colors={props.colors}/>
          <Button className={styles.button}><span className="fa fa-shopping-cart" /></Button>
        </form>
    );
};

export default ProductForm