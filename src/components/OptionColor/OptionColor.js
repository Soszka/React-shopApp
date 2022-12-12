import styles from '../ProductForm/ProductForm.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

    const prepaerColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color} onClick={() => {props.setCurrentColor(color)}}><button type="button" className={clsx(prepaerColorClassName(color), color === props.currentColor && styles.active)}></button></li>)}
            </ul>
          </div>
    );
};

export default OptionColor;