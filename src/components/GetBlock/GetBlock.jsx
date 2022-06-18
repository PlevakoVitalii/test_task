import React from 'react'
import { Card } from '../Card/Card';
import style from './GetBlock.module.scss'

const GetBlock = () => {
  return (
    <div className={style.getBlock}>
      <h2>Working with GET request</h2>
      <div className={style.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button>Show more</button>
    </div>
  )
}

export { GetBlock };