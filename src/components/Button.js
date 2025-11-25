import styles from './Button.module.css';
import { useState } from 'react';

function Button(props) {
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={onClick} className={styles['button-class']}>{props.text} - {count}</button>
    )
}

export default Button;