import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { MangifyingGlass, CircleXMarkIcon, LoadingIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>

                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <CircleXMarkIcon />
                    </button>
                )}
                <LoadingIcon />

                <button className={cx('search-btn')}>
                    <MangifyingGlass />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
