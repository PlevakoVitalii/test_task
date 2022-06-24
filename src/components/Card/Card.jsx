import React from 'react';

import style from './Card.module.scss'

const Card = ({ user }) => {
  console.log(user)
  return (

    <div className={style.card}>
      <img src={user.photo} alt='CardImg' />
      <div className={style.cardUserInfo}>
        <p className={style.name}>{user.name}</p>
        <p>{user.position} </p>
        <p>{user.email}</p>
        <p> {user.phone}</p>
      </div>
    </div>
  )
}


export { Card };