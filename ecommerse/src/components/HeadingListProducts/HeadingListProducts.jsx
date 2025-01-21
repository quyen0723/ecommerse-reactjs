import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
// import React from 'react';

function HeadingListProducts({ data }) {
    const { container, containerItem } = styles;

    console.log('kakaka', data);
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item, index) => (
                        <ProductItem
                            key={item.id || index}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                    {/* <ProductItem />
                    <ProductItem /> */}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
