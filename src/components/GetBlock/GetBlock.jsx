import React from 'react'

import { Card } from '../Card/Card';
import style from './GetBlock.module.scss'

const GetBlock = ({ users, showMoreUsers }) => {

  return (
    <div className={style.getBlock}>
      <h2>Working with GET request</h2>
      <div className={style.cardContainer}>
        {users.map((user) => <Card key={user.id} user={user} />
        )}

      </div>
      <button
        style={users.length > 23 ? { opacity: 0 } : null}
        onClick={showMoreUsers}>Show more</button>
    </div >
  )
}

export { GetBlock };