import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Tippy from '@tippyjs/react/headless';


import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images'

// icon
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiLoaderCircle, BiSearch } from 'react-icons/bi'
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';


// viet duoc className duoi dang '-' Vd:(post-item)
const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setsearchResult] = useState([])

    useEffect( ()=> {
        setTimeout(() => {
            setsearchResult([])
        }, 3000);
    } , [])
    return (
        <header className={cx('wrapper', 'flex')}>
            <div className={cx('content', 'flex')}>
                <div className={cx('logo')}>
                    <img src={images.logo}></img>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search', 'flex')}>
                        <input placeholder='Search acounts and videos' spellCheck = {false} />
                        <button className={cx('clear')}>
                            <AiFillCloseCircle />
                        </button>
                        {/* loading */}
                        {/* <BiLoaderCircle className={cx('loading')} /> */}
                        <button className={cx('search-btn')}>
                            <BiSearch />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('pro')}>
                    <Button  text>Upload</Button>
                    <Button rounded primary>Log in</Button>
                </div>
            </div>
        </header>
    )
}
export default Header