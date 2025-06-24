import React, { useState } from 'react'
import LogoGrey from '../../assets/imgs/logo-grey.svg';
import EducationDetails from './EducationDetails';
import styles from './Education.module.scss';
import data from '../../data/education.json';

function Education() {
  const [openIdx, setOpenIdx] = useState(null);
  const recentDataImg = '/imgs/logo-red.svg';

  return (
    <section id='edu'>
      <div className={styles.titleBox}>
        <p className={styles.title}>교육</p>
      </div>

      <div className={styles.listBox}>
        {
          data.map((item, i) => 
            <div key={i} className={styles.listItem}>
              <p className={styles.img}>
                <img src={i === 0 ? recentDataImg : LogoGrey} alt="logo" />
              </p>

              <div className={styles.content}>
                <span className={styles.subTxt}>{item.duration}</span>
                <p className={styles.location}>{item.location}</p>
                <span className={styles.subTxt}>{item.description}</span>

                <EducationDetails
                  data={item} idx={i}
                  openIdx={openIdx} setOpenIdx={setOpenIdx}/>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Education