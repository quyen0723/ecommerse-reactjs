import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}>
                    {data.map((item, index) => (
                        <ProductItem
                            key={item.id || index}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
}

export default PopularProduct;
