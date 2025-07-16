import React from 'react';
import styles from './Projects.module.scss';

function ProjectsItem({ data, onClick }) {
  
  return (
    // 데이터 내 bgColor 값에 따라 클래스 변경 -> background 및 font color 변경
    // 클릭 시 상세 팝업 생성
    <div 
      className={`${styles.item} ${styles[data.bgColor]}`}
      onClick={onClick}
    >
      {/* 썸네일 이미지 */}
      <p className={styles.itemThumb}>
        <img src={`/imgs/${data.imgurl}`} alt="project-thumb" />
      </p>

      {/* 프로젝트 내용 */}
      <div className={styles.itemContent}>
        <p>{data.mainTitle}</p>
        <span className={styles.contentSubtitle}>
          {data.subTitle}
        </span>

        {/* 사용된 기술 스택 */}
        <div className={styles.techItemBox}>
          {
            data.techStack.map((item, i) =>
              <span key={i}>{item}</span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem