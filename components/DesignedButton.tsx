import React from 'react';
import styles from '../styles/DesignedButton.module.css';

interface DesignedButtonProps {
    text: string;
}

const DesignedButton: React.FC<DesignedButtonProps> = ({ text }) => {
    return (
        <div className={styles.designedButtonWrapper}>
            <button className={styles.designedButton}>{text}</button>
        </div>
    );
};

export default DesignedButton;
