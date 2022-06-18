import React from 'react';

import style from './Card.module.scss'

import CardImg from '../../assets/CardImg.png'

const Card = () => {
  return (
    <div className={style.card}>
      <img src={CardImg} alt='CardImg' />
      <p className={style.name}>CardImg</p>
      <p>Leading specialist of the department of cent...
        frontend_develop@gmail.com
        +38 (098) 278 44 24</p>

    </div>
  )
}


export { Card };