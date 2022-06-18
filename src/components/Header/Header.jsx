import React from 'react'
import style from './Header.module.scss'

import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={style.buttonBlock}>
        <button>Users</button>
        <button>Sing up</button>
      </div>
    </div>
  )
};

export { Header };
