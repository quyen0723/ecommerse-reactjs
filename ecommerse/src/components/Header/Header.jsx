import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@images/LogoWebsite.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        containerLogo,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    console.log('MMMMMM', scrollPosition);

    const { isOpen, setIsOpen } = useContext(SideBarContext);

    console.log('lalalala', isOpen);
    console.log('huhuhuhu', setIsOpen);
    console.log('check', { isOpen, setIsOpen });

    useEffect(() => {
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }

        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon
                                key={item.id || index} // Use item.id if it exists, otherwise fallback to index
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu
                                key={item.id || index} // Use item.id if it exists, otherwise fallback to index
                                content={item.content}
                                href={item.href}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                </div>
                <div className={containerLogo}>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ height: '60px', borderRadius: '30%' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3).map((item, index) => (
                            <Menu
                                key={item.id || index + 3} // Ensure unique key for this slice
                                content={item.content}
                                href={item.href}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <img src={reloadIcon} alt='reloadIcon' />
                        <img src={heartIcon} alt='heartIcon' />
                        <img src={cartIcon} alt='cartIcon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
