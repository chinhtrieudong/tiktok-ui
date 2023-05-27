import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image //Component để có thể hiển thị ảnh mặc định khi link lỗi.
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1684972800&x-signature=ZMDHWBXZhb8Z1p7sjrIvO6tGfFo%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thanh Hoa</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>Thanh Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
