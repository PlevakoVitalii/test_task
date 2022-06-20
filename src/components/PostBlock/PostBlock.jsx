import React from 'react';

import style from './PostBlock.module.scss'

const PostBlock = () => {
  return (
    <div className={style.postBlock}>
      <h2>Working with POST request</h2>
      <form action="#" method="post" encType="multipart/form-data">
        <div className={style.inputContainer}>
          <input type="text" id="Your_name" name="Your name" />
          <input type="email" id="email" name="email" />
          <input type="phone" id="phone" name="phone"
            onChange={(e) => e.target.value} />
        </div>
        <div className={style.phoneInputLabel}>
          <label htmlFor="phone">phone</label>
        </div>

        <span className={style.inputRadioContainerHeader}>Select your position</span>

        <div className={style.inputRadioContainer}>
          <div >
            <input type="radio" id="Frontend_developer" name="position" value="Frontend developer"
              onChange={(e) => e.target.value} />
            <label htmlFor="Frontend_developer">Frontend developer</label>
          </div>
          <div>
            <input type="radio" id="Backend_developer" name="position" value="Backend developer" />
            <label htmlFor="Backend_developer">Backend developer</label>
          </div>
          <div>
            <input type="radio" id="Designer" name="position" value="Designer" />
            <label htmlFor="Designer">Designer</label>
          </div>
          <div>
            <input type="radio" id="QA" name="position" value="QA" />
            <label htmlFor="QA">QA</label>
          </div>
        </div>

        <div className={style.inputUploadContainer}>
          <input type="file" name="Upload" id="Upload" className={style.inputUploadFile} />
        </div>
        <div>
          <button type="submit">Sing up</button>
        </div>


      </form >

      <p></p>
    </div >
  )
}


export { PostBlock };