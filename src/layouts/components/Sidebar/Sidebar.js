import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

import {
    FollowingIcon,
    CameraIcon,
    HomeIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    CameraActiveIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<CameraIcon />}
                    activeIcon={<CameraActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default SideBar;
