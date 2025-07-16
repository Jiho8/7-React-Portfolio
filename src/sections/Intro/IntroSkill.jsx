import React from 'react'
import styles from './Intro.module.scss';

function IntroSkill({ idx, data, aosType, aosDelay }) {
    
  return (
    // 인덱스에 따라 클래스 나누어 border color 변경
    <div 
      className={`${styles.skillBox} ${styles[`skillBox${idx}`]}`}
      data-aos={aosType}
      data-aos-delay={aosDelay}
    >
      <p className={styles.img}><img src={data.imgurl} alt="logoImg" /></p>
      <p className={styles.skillTitle}>{data.title}</p>
      <span className={styles.skillContent}>{data.content}</span>
    </div>
  )
}

export default IntroSkill