import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import Myfooter from '@components/Footer/Footer';

function HomePage() {
    const { container } = styles;

    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    console.log(listProducts);
    return (
        // <div className={container}>
        //     <MyHeader />
        //     <Banner />
        //     <Info />
        //     <AdvanceHeadling />
        //     <HeadingListProducts />
        //     <div style={{ height: '200px' }}></div>
        // </div>
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct
                data={listProducts.slice(2, listProducts.length - 1)}
            />
            <SaleHomepage />
            <Myfooter />
            {/* <div style={{ height: '200px' }}></div> */}
        </>
    );
}

export default HomePage;
