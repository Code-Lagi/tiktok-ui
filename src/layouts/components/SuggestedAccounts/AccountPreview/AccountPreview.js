import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667876400&x-signature=v%2Fyt%2BUCJdU5UgRRVCZxUh8BNc98%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>daophuongnhi826</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đào Phương Nhi</p>
            </div>
            <p className={cx('analytics')}>
                <span className={cx('user-count')}>7.9M</span>
                <span className={cx('user')}>Followers</span>
                <span className={cx('user-count')}>566.1M </span>
                <span className={cx('user')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
