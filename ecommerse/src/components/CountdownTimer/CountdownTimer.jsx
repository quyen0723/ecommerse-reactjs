import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

function CountdownTimer({ targetDate }) {
    const { box, title } = styles;
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                return {
                    Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    Minutes: Math.floor((difference / 1000 / 60) % 60),
                    Seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return {};
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => String(number).padStart(2, '0');

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval, index) => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={`${interval}-${index}`} className={box}>
                    {formatNumber(timeLeft[interval])}{' '}
                    <span className={title}>{interval}</span>
                </span>
            );
        }
    });

    return timerComponents;
}

export default CountdownTimer;

// import React, { useState, useEffect } from 'react';
// import styles from './styles.module.scss';

// function CountdownTimer({ targetDate }) {
//     const { box } = styles;
//     const [timeLeft, setTimeLeft] = useState({});

//     useEffect(() => {
//         const calculateTimeLeft = () => {
//             const difference = +new Date(targetDate) - +new Date();
//             if (difference > 0) {
//                 return {
//                     Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                     Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                     Minutes: Math.floor((difference / 1000 / 60) % 60),
//                     Seconds: Math.floor((difference / 1000) % 60)
//                 };
//             }
//             return {};
//         };

//         setTimeLeft(calculateTimeLeft());

//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [targetDate]);

//     const formatNumber = (number) => String(number).padStart(2, '0');

//     return (
//         <div>
//             {Object.entries(timeLeft).map(([unit, value], index) => (
//                 <span key={unit} className={box}>
//                     {formatNumber(value)} {unit}{' '}
//                 </span>
//             ))}
//         </div>
//     );
// }

// export default CountdownTimer;
