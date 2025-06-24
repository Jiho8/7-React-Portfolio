import React from 'react'
import styles from './Intro.module.scss';

function IntroSkill({ idx, data }) {
    
  return (
    <div className={`${styles.skillBox} ${styles[`skillBox${idx}`]}`}>
        <p className={styles.img}><img src={data.imgurl} alt="logoImg" /></p>
        <p className={styles.skillTitle}>{data.title}</p>
        <span className={styles.skillContent}>{data.content}</span>
    </div>
  )
}

export default IntroSkill