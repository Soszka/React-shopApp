import styles from '../ProductForm/ProductForm.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size => <li key={size.name}><button onClick={() => {props.setCurrentSize(size.name)}} type="button" className={clsx(styles.sizes, props.currentSize === size.name && styles.active)}>{size.name}</button></li>)}
            </ul>
        </div>
    );
};

export default OptionSize;