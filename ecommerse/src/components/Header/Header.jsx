import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/LogoWebsite.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item) => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
            <div>
                <img
                    src={Logo}
                    alt='Logo'
                    style={{ height: '70px', borderRadius: '30%' }}
                />
            </div>
            <div className={containerBox}>
                <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.length).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
                <div className={containerBoxIcon}>
                    <img src={reloadIcon} alt='reloadIcon' />
                    <img src={heartIcon} alt='heartIcon' />
                    <img src={cartIcon} alt='cartIcon' />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
