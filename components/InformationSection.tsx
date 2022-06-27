import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

interface InformationSectionProps {
    headingText: string;
    descriptionText: string;
    image: string;
    imageAlt: string;
    flip: boolean;
}

const InformationSection: React.FC<InformationSectionProps> = ({
    headingText,
    descriptionText,
    image,
    imageAlt,
    flip,
}) => {
    return (
        <>
            {flip ? (
                <Row className='align-items-center mb-5'>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={imageAlt}
                        />
                    </Col>
                    <Col>
                        <h2>{headingText}</h2>
                        <p className={styles.description}>{descriptionText}</p>
                    </Col>
                </Row>
            ) : (
                <Row className='align-items-center mb-5'>
                    <Col>
                        <h2>{headingText}</h2>
                        <p className={styles.description}>{descriptionText}</p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={imageAlt}
                            className={styles.startup}
                        />
                    </Col>
                </Row>
            )}
        </>
    );
};

export default InformationSection;
