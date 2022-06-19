import React from 'react';

import style from './PostBlock.module.scss'

const PostBlock = () => {
  return (
    <div className={style.postBlock}>
      <h2>Working with POST request</h2>
      <form >
        <div className={style.inputContainer}>
          <input type="text" id="Your_name" name="Your name" value="Your name" />
          <input type="email" id="email" name="email" value="email" />
          <input type="phone" id="phone" name="phone" value="phone" />
        </div>
        <div className={style.phoneInputLabel}>
          <label for="phone">phone</label>
        </div>

        <span className={style.inputRadioContainerHeader}>Select your position</span>

        <div className={style.inputRadioContainer}>
          <div >
            <input type="radio" id="Frontend_developer" name="position" value="Frontend developer" />
            <label for="Frontend_developer">Frontend developer</label>
          </div>
          <div>
            <input type="radio" id="Backend_developer" name="position" value="Backend developer" />
            <label for="Backend_developer">Backend developer</label>
          </div>
          <div>
            <input type="radio" id="Designer" name="position" value="Designer" />
            <label for="Designer">Designer</label>
          </div>
          <div>
            <input type="radio" id="QA" name="position" value="QA" />
            <label for="QA">QA</label>
          </div>
        </div>
        <div className={style.inputUploadContainer}>
          <label for="file">Uploud </label>
          <input type="file" id="file" name="file" multiple />
        </div>
        <div >
          <button>Sing up</button>
        </div>


      </form >

      <p></p>
    </div >
  )
}


export { PostBlock };