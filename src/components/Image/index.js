import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            className,
            alt,
            fallBack: customFallback = images.noImage, //systax fe6 gán fallBack cho tên khác và truyền default.
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback); //khi ảnh bị lỗi sẽ mặc định dùng noImage.
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
//forwardRef ra ngoài để tippy có thể nhận được.
