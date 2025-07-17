import React from 'react'
import LogoGrey from '../../assets/imgs/logo-grey.svg';
import EducationDetails from './EducationDetails';
import styles from './Education.module.scss';
import data from '../../data/education.json';

function Education() {
  const recentDataImg = '/imgs/logo-red.svg';  // 제일 최근 데이터에 표시할 컬러 로고

  return (
    <section id='edu' data-aos="fade-up" data-aos-delay="1000">
      {/* 제목 */}
      <div className={styles.titleBox}>
        <p className={styles.title}>교육</p>
      </div>

      {/* 리스트 */}
      <div className={styles.listBox}>
        {
          data.map((item, i) => 
            <div key={i} className={styles.listItem}>
              {/* 이미지 */}
              <p className={styles.img}>
                {/* 제일 최근 데이터인 0번째 데이터는 컬러 로고, 아니면 흑백 표시 */}
                <img src={i === 0 ? recentDataImg : LogoGrey} alt="logo" />
              </p>

              {/* 내용 텍스트 */}
              <div className={styles.content}>
                {/* 순서대로 기간 • 장소 • 부가 설명 */}
                <span className={styles.subTxt}>{item.duration}</span>
                <p className={styles.location}>{item.location}</p>
                <span className={styles.subTxt}>{item.description}</span>

                {/* 상세 내용 */}
                <EducationDetails data={item} />
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Education