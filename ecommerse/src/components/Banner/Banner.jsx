import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Hello mọi người</h1>
                <div className={des}>
                    Cuộc sống trở nên trọn vẹn hơn khi được sống với đam mê và
                    tận hưởng niềm vui.{' '}
                </div>
                <Button content={'Go to me'} />
            </div>
        </div>
    );
}

export default Banner;
