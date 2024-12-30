import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
// import React from 'react';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    const targetDate = '2025-12-31T00:00:00';

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
