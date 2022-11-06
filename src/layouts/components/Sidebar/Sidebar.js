import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '../SuggestedAccounts';
import * as userService from '~/services/userService';

import {
    FollowingIcon,
    CameraIcon,
    HomeIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    CameraActiveIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function SideBar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                // setSuggestedUser((prevUsers) => [...prevUsers, ...data]);
                setSuggestedUser(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

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
            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default SideBar;
